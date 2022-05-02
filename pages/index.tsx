import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import { useSession } from "next-auth/react"
import Login from "../components/Login"
import { useGetUserQuery } from '../redux/features/user/user-api-slice'
import { useSelector } from "react-redux"
import { RootState } from '../redux/store'

const Home: NextPage = () => {
  const {data: userData, error, isLoading } = useGetUserQuery('')
  const token = useSelector((state: RootState) => state.user.token)

 if (!token) return <Login />

  return (
    <div>
      <Head>
        <title>Github</title>
        <link rel="icon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg" />
      </Head>

      <Header />

      <main className="flex border-b">
          <Sidebar userData={userData} />
          <Feed />
      </main>
    </div>
  )
}

export default Home
