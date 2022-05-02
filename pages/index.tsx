import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import { useSession, getSession } from "next-auth/react"
import Login from "../components/Login"

const Home: NextPage = () => {
  const { data: session } = useSession();
 if (!session) return <Login />

  return (
    <div>
      <Head>
        <title>Github</title>
        <link rel="icon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg" />
      </Head>

      <Header />

      <main className="flex border-b">
         
          <Sidebar />
          <Feed />
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const session = await getSession();

  return {
    props: {
      session
    }
  }
}