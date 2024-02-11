'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";



const Home = () => {
  const router = useRouter()
  const navigate = (page) => {
    router.push(page)
  }


  return (
   <section>
    <Link className="m-4" href='/projects'>Projects</Link><br />
    <button
     className="border px-2 py-4 border-black m-4"
      onClick={() => navigate('about')}>Go To About Page</button><br />
    <button
     className="border px-2 py-4 border-black m-4"
     onClick={() => navigate('login')}>Go To Login Page</button><br />
    <button
     className="border px-2 py-4 border-black m-4"
      onClick={() => navigate('projects')}>Go To Projects Page</button>
   </section>
  )
}

export default Home