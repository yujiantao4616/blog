import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Menu } from '../../components'

const linkItems = [
  { title: 'x6', description: 'X6 是 AntV 旗下的图编辑引擎',key:'x6' },
  {
    title: 'Multiavatar',
    description: 'Multiavatar is a multicultural avatar maker',
    key:'multiavatar'
  },
]

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`Links - ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <div style={{ display: 'flex', height: '100vh' }}>
        <Menu list={linkItems} onChange={(key) => {
            console.log(key)
        }}/>
      </div>
    </Layout>
  )
}

export default Home
