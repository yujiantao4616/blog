import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../styles.module.css'
import lottie from 'lottie-web'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const neko = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: neko.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets4.lottiefiles.com/packages/lf20_tr1pjkop.json', // the path to the animation json
    })
  },[])
  console.log(neko)
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <div ref={neko} className={styles.neko}></div>
    </Layout>
  )
}

export default Home
