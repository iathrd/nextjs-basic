import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  const handleClick = () => {
    console.log('placing your order')
    router.push('/product')
  }

  return (
   <>
   <h1>Home Page</h1>
   <Link href="/blog" >
   <a>Blog Page</a>
   </Link>
   <button onClick={handleClick} > Place Order</button>
   </>
  )
}
