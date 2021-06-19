import Head from 'next/head'
import Header from '../components/Header';
import Nav from '../components/Nav';
import requests from '../utils/requests';
import Results from '../components/Results';

export default function Home(props) {
  console.log(props)
  return (
    <div>
      <Head>
        <title>Create Next Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={props.results} />
    </div>
  )
}

export async function getServerSideProps(content) {

  const genre = content.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results
    }
  }
}