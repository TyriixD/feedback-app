import React from 'react'
import { Link } from 'react-router-dom'
import Card
 from '../components/shared/Card'
function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a service</p>
        <p>Version 1.o</p>

        <Link to='/'>
          Return to home page
        </Link>

      </div>

    </Card>
  )
}

export default AboutPage