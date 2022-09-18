import React from 'react'
import "../styles/Projects.css"

export const Projects = () => {
  return (
    <div className='containers'>
      <div className='title'> <p>Work Projects</p> </div>
      <div className='projectsCard'>

        <div className='projectCard'>
          <h3 className='projectName'>COVID-19 Tracker</h3>
          <div className='projectDesc'>
            <p> 
            This application provides daily, monthly and all-time COVID status such as COVID cases, deaths, and recovered. 
            It shows the COVID rate based on location and can be selected with a live map.
            Technologies are used : Reactjs, OpenStreetMap, Chartjs, and the disease.sh API.
            </p>
          </div>
          <div className='projectLinks'>
            <button className='projectLink'><a href="https://jaifan.github.io/covid-tracking-app/" target="_blank">Live Link</a></button>
            <button className='projectLink'><a href='https://github.com/Jaifan/covid-19-tracker' target='_blank'>Source Code</a></button>            

          </div>
        </div>

        <div className='projectCard'>
          <h3 className='projectName'>Discord Chat & Channel System API</h3>
          <div className='projectDesc'>
            <p> 
              A backend node application for channel-based communication.
              It's designed with a channel admin and members role system. Members have to use a channel name and password to register.
              Technologies are used : nodejs, MongoDB, Mongoose, Express, JsonWebToken (JWT).
            </p>
          </div>
          <div className='projectLinks'>
            <button className='projectLink'><a href="https://discord-system-jaifan.herokuapp.com/" target="_blank">Live Link</a></button>
            <button className='projectLink'><a href='https://github.com/Jaifan/Discord-Chat-Channel-room-system-API-' target='_blank'>Source Code</a></button>            

          </div>
        </div>
        
        <div className='projectCard'>
          <h3 className='projectName'>Web Shop (E-commerce)</h3>
          <div className='projectDesc'>
            <p> 
            A personalized eShop where you can host your product with your own price and set a payment gateway like Stripe. This system works well for dropshipping businesses and small-to-medium startup companies. 
            Technologies are used like Stripe, Reactjs, and Commercejs, etc.
            </p>
          </div>
          <div className='projectLinks'>
            <button className='projectLink'><a href="https://jaifan.github.io/web-commerce/#/" target="_blank">Live Link</a></button>
            <button className='projectLink'><a href='https://github.com/Jaifan/web-shop' target='_blank'>Source Code</a></button>
          </div>
        </div>

        <div className='projectCard'>
          <h3 className='projectName'>Crypto Asset Transfer</h3>
          <div className='projectDesc'>
            <p> 
            A system where you can send your assets, such as etherum, anywhere in the world with a message and keyword. 
            Technologies are used: Solidity smart-contract, Reactjs , Hardhat, and Ether.
            </p>
          </div>
          <div className='projectLinks'>
            <button className='projectLink'><a href="https://jaifan.github.io/krpto_webapp/" target="_blank">Live Link</a></button>
            <button className='projectLink'><a href='https://github.com/Jaifan/Crypto_webApp' target='_blank'>Source Code</a></button>
          </div>
        </div>

        <div className='projectCard'>
          <h3 className='projectName'>CRUD API</h3>
          <div className='projectDesc'>
            <p> 
            A backend node application for products to be created, read , updated, and deleted. You can perform advanced queries and
            sort based on products through this application API. Technologies are used : Nodejs, MongoDB, Mongoose ,Express .
            </p>
          </div>
          <div className='projectLinks'>
            <button className='projectLink'><a href="https://product-crud-api-jaifan.herokuapp.com/" target="_blank">API Link</a></button>
            <button className='projectLink'><a href='https://github.com/Jaifan/Store-API' target='_blank'>Source Code</a></button>
          </div>
        </div>

        <div className='projectCard'>
          <h3 className='projectName'>Job Portal API </h3>
          <div className='projectDesc'>
            <p> 
              A backend node application for a job portal with authentication. A user can post and update job status.
              Technologies are used : nodejs, MongoDB, Mongoose, Express, JsonWebToken (JWT).
            </p>
          </div>
          <div className='projectLinks'>
            <button className='projectLink'><a href='https://job-api-jaifan.herokuapp.com/' target="_blank">API Link</a></button>
            <button className='projectLink'><a href='https://f1xysk.csb.app/' target="_blank">Live Link</a></button>
            <button className='projectLink'><a href="https://github.com/Jaifan/job-api" target="_blannk">Source Code</a></button>
          </div>
        </div>

      </div>
    </div>
  )
}
