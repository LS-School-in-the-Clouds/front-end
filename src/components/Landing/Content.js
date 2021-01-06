import React from 'react'
import '../../style/Landing.css'
import { useHistory } from 'react-router-dom'
import PicOne from '../../style/content/pic01.jpg'
import PicTwo from '../../style/content/pic02.jpg'
import PicThree from '../../style/content/pic03.jpg'





export default function Content(props) {

  const history = useHistory()

    /////// REACT ROUTER ONCLICK /////////
  const routeToLogin = () => {
     history.push('/login')}
  
 const routeToSignUp = () => {
     history.push('/signup')}


    return (
        <div >
           <div>

  <title>School In The Cloud</title>
  
  <div id="page-wrapper">
    {/* Header */}
    <header id="header" className="alt">
      <h1><a href="index.html">School In The Cloud</a></h1>
      <nav id="nav">
        <ul>
          <li className="special">
            <a href="#menu" className="menuToggle"><span>Menu</span></a>
            <div id="menu">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="generic.html">About Us</a></li>
                <li><a href="elements.html">Meet The Team</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Log In</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
    {/* Banner */}
    <section id="banner">
      <div className="inner">
        <h2>School In The Cloud</h2>
        <p>
          School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting..
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
      <a href="#one" className="more scrolly">Learn More</a>
    </section>
    {/* One */}
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Arcu aliquet vel lobortis ata nisl<br />
            eget augue amet aliquet nisl cep donec
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend<br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1"><span className="label">Lorem</span></span>
          </li>
          <li>
            <span className="icon fa-heart major style2"><span className="label">Ipsum</span></span>
          </li>
          <li>
            <span className="icon solid fa-code major style3"><span className="label">Dolor</span></span>
          </li>
        </ul>
      </div>
    </section>
    {/* Two */}
    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image"><img src={PicOne} alt="" /></div>
        <div className="content">
          <h2>
            Magna primis lobortis<br />
            sed ullamcorper
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image"><img src={PicTwo} alt="" /></div>
        <div className="content">
          <h2>
            Tortor dolore feugiat<br />
            elementum magna
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image"><img src={PicThree} alt="" /></div>
        <div className="content">
          <h2>
            Augue eleifend aliquet<br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>
    {/* Three */}
    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend<br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>
    {/* CTA */}
    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet
            amet eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li><a href="#" className="button fit primary">Explore</a></li>
          <li><a href="#" className="button fit">Learn More</a></li>
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
        <li>© Buddy Agyin 2020</li>
        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </footer>
  </div>
  {/* Scripts */}
</div>
        </div>

    )
}