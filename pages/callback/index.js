import { useRouter } from 'next/router'
import { useGetTokenMutation } from '../../redux/features/user/user-api-slice'
import { saveToken } from '../../redux/features/user/user-slice'

function index() {
  const router = useRouter()
  const { query } = useRouter()
  const [getToken] = useGetTokenMutation()

  getToken(query)
    .then((res) => res.json())
    .then((data) => {
      saveToken(data.access_token)
      return router.push('/')
    })
}
