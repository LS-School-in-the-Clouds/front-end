//Functional imports
import React from 'react'
import '../../style/Landing.css'
import { useHistory } from 'react-router-dom'

//Style Imports
import PicOne from '../../style/content/pic01.jpg'
import PicTwo from '../../style/content/pic02.jpg'
import PicThree from '../../style/content/pic03.jpg'

export default function Content(props) {

  const history = useHistory()

    /////// REACT ROUTER ONCLICK /////////
  const routeToLogin = () => {
     history.push('/login')}
  
 const routeToSignUp = () => {
     history.push('/register')}


    return (
        <div >
           <div>

  <title>School In The Cloud</title>
  <div id='NewBanner'>
  <div id="page-wrapper">
  

    {/* Banner */}
    <section id="banner">
      <div className="inner">
        <h2>School In The Cloud</h2>
        <p>
          A all-in-one solution that connects community mentors with students based on interests, career goals and location.  
        </p>
        <ul className="actions special">
      
         {/* BUTTON */}

          <li>
            <button onClick={routeToLogin} className="StyledButtons primary"> Login</button>
          </li>

         <li> 
           <button onClick={routeToSignUp} className="button primary"> Sign Up</button>
          </li>


        </ul>
      </div>
      <a href="#" className="more scrolly">Learn More</a>
    </section>
    </div>
    {/* One */}
    <section id="one" className="wrapper style1 special">
     
      <div className="inner">
        <header className="major">
          <h2>
            Local community members want to share their insights<br />
            & students want to become better prepared for the future. 
          </h2>
          <p>
            School in the Cloud trains community members on how to engage with young students<br />
            while connecting students with mentors that can impact their lives.
          </p>
        </header>
       
      </div>
    </section>
    {/* Two */}
    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image"><img src={PicOne} alt="" /></div>
        <div className="content">
          <h2>
          Students - connect and get advice from seniors in your area
          </h2>
          <p>
          Working with senior volunteers reinforces the material in school and facilitates a strong connection with those more experienced than you in your town.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image"><img src={PicTwo} alt="" /></div>
        <div className="content">
          <h2>
            Professionals - find your purpose <br />
            
          </h2>
          <p>
          Mentoring a student can provide meaning to your free time when you work to help close the achievement gap in your community.
          </p>
        </div>
      </section>
      <section className="spotlight">
        
        <div className="image"><img src={PicThree} alt="" /></div>
        <div className="content">
          <h2>
          A training software<br />
            so mentors are 100% effective
          </h2>
          <p>
          Train mentors to ensure their knowledge is shared in the most effective way possible.
          </p>
          </div>
        
      </section>
    </section>
    {/* Three */}
    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Both students and mentors experience tremendous outcomes for both their personal achievements and community.</h2>
          <p>
          We work each and every day to provide students with the necessary mentorship to succeed in the classroom and in life. 
            <br />
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Jimmy - HS Senior</h3>
            <p>
            “Working with Mr. Gray really helped my confidence in Math. I look forward to quiz day now!”
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Mr. Baptist - Retired Navy General</h3>
            <p>
            “After I retired from an illustrious career in the Navy, I had no longer had the same energy to face each new day. SITC has provided me with meaning each week to mentor students looking to make a difference in their lives.”
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Emma - HS Sophomore</h3>
            <p>
            “I now know what career I want to get into. I am going to prepare to get into my favorite universities! As a first-generation college students, every session opened my eyes to a world I never experienced.”
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mrs. Johnson - Financial Advisor</h3>
            <p>
            “Teaching has always been a passion of mine, but life carried me away on a different path. Retirement has a new meaning for me when I get to interact and shape the next generation of leaders in our country.”

            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Grace - College Sophomore</h3>
            <p>
            “School in the Clouds has been immensely helpful in teaching me to focus on the WHY behind my education. Critical thinking is exciting now!”

            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Mr. Young - Software Engineer</h3>
            <p>
            “Mentorship provides the ability to reflect critically on one’s life. Working with such passionate students allows me the opportunity to share my wisdom and perspective on life with young members of my community.”

            </p>
          </li>
        </ul>
      </div>
    </section>
  

    {/* Footer */}
    <footer id="footer">
      <ul className="icons">
        <li>
          <a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a>
        </li>
        <li>
          <a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a>
        </li>
        <li>
          <a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a>
        </li>
        <li>
          <a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a>
        </li>
        <li>
          <a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a>
        </li>
      </ul>
      <ul className="copyright">
        <li>@ School in the Clouds 2021</li>
        <li>Design: <a href="http://html5up.net">Track-Team 44</a></li>
      </ul>
    </footer>
  </div>
  {/* Scripts */}
</div>
        </div>

    )
}