import React from 'react'
import { Button } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';

export default function Booking() {
  return (
    <>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello World</h1>
        <Link href="/login"><Button variant="filled">Login</Button></Link>
        
        
      </main>
    </>
        
  )
}
