import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Header.css"

export const Header = () => {
  return (

    <div className='container'>

      <div className='headitem'>

        <div></div>

        <div className='headtitle'>
          <p>PORTFOLIO</p>
        </div>

        <div className='headtitle'>
          <button>Download CV</button>
        </div>

        <div></div>

      </div>


      <div className='headbody'>
        <div className='imgsocial'>
          <div className='headimg'>
            <img src='./profile2.png' alt='Profile Photo' height={200} />
          </div>

          <div className='headsocial'>
            <div className='Icon'><a href='http://github.com/Jaifan' target="_blank"> <GitHubIcon /> </a></div>
            <div className='Icon'><a href='https://www.linkedin.com/in/jafran-bin-zakaria/' target="_blank"> <LinkedInIcon/> </a> </div>
            <div className='Icon'><a href='https://www.hackerrank.com/jiku1213?hr_r=1' target="_blank"> <img src="./hackerRank.png" height={25}/> </a> </div>

          </div>

        </div>


        <div className='headbois'>
          <h4>
            " A recent graduate candidate, with 2 years of coding experience in web-programs and institutions. During the study period,
            I learned some web technologies with projects. I consider myself a quick learner, with an understanding of data structures and algorithms assisting me in adopting any technology."
          </h4>
          <h3 className='name'> - JAFRAN BIN ZAKARIA</h3>
        </div>
        
      </div>

    </div>
  )
}
