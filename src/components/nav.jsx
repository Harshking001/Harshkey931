import React from 'react'
import favicon from '/public/favicon.jpg'
import profile from '/public/assets/profile.png'

const Nav = () => {
  return (
    <nav>
      <div className='profile-container'>
        <img className="bg-profile"src={profile} />
        <div className='profile'>
          <img src={ favicon }/>
          <div className='text'>
            <h1><span>Harsh</span>key</h1>
            <p>rudboy</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
