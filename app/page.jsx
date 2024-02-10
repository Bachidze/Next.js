'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


const Home = () => {
  const router = useRouter()

  const navigate = (page) =>{
    router.push(page)
  }
  return (
    <section className="">
      <h1>useRouter</h1>
      <Link href={'/projects'}>Projects</Link><br />
        <button onClick={()=>navigate('about')}>
            GoTo About Page
        </button> <br/>
        <button onClick={()=>navigate('login')}>
            GoTo Login Page
        </button>
    </section>
  )
}

export default Home