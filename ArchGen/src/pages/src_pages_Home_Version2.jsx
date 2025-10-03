import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <h1>ArchGen</h1>
      <p>
        The Ultimate AI Floorplan & Interior Design Platform.<br />
        Create, customize, and explore 2D, 3D, and 360° floorplans.
      </p>
      <Link to="/editor" className="home-btn">
        Start Designing
      </Link>
    </div>
  )
}

export default Home