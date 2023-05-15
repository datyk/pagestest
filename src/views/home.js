import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Datyk</title>
        <meta property="og:title" content="Daniel Tykriset" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4719f581-3eaf-447e-bc29-bfd4b20e0aa1/0c562ca1-5f0b-40b4-b9a2-91d5697e682e?org_if_sml=1"
        />
      </Helmet>
      <div className="home-hero">
        <div className="home-container1">
          <h1 className="home-text">
            <span className="home-text1">Hi</span>
            <span className="home-text2">,</span>
            <span className="home-text3"> This is a </span>
            <span className="home-text4">Test</span>
          </h1>
        </div>
        <img
          alt="image"
          src="/playground_assets/logo.svg"
          className="home-image"
        />
      </div>
    </div>
  )
}

export default Home
