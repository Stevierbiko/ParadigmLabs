import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
            Scale with <span className='text-primary text-2xl px-1'>&#9825;</span> <Link href="/" className='underline underline-offset-2'>ParadigmLabs</Link>
            </div>
            <Link href="/" className='underline underline-offset-2'>Get in touch</Link>
            <Link href="/"className='underline underline-offset-2'>Privacy Policy</Link>
        </Layout>
    </footer>
  )
}

export default Footer