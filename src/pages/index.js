import React, { useEffect, useRef } from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './styles.module.css'
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
  return (
    <Layout
      title={siteConfig.title}
      description='Description will go into a meta tag in <head />'
    >
      <div ref={neko} className={styles.neko}></div>
    </Layout>
  )
}

export default Home
