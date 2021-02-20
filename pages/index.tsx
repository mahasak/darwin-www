import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { GetStaticProps } from "next";
import { signIn, signOut, useSession } from "next-auth/client";
import prisma from '../lib/prisma'
import TopBar from '../components/TopBar'
export const getServerSideProps = async ({req}) => {
  const token = req.headers.AUTHORIZATION
  //const userId = await getUserId(token)
  /*
  const posts = await prisma.post.findMany({
    where: {
      author: { id: userId },
    },
  })
  
  */
 return { props: {  } }
}

function HomeApp() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default function Home() {
  const [session, loading] = useSession();
  return (
    <Layout>
      <TopBar />
      <HomeApp/>
    </Layout>
  )
}