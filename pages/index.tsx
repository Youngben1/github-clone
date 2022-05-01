import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"

const Home: NextPage = () => {
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
