import './style.css'
import myPhoto from './assets/dylan.jpeg'

function App() {
  return (
    <>
      <header>
        <a href="#home" className="logo">SUPILANAS PORTFOLIO</a>


{/*1 category part home, about me and skills */}
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </nav>
      </header>

{/*2 My name and my hobby, Home */}
      <main>
        <section id="home" className="Theprofile">
          <article className="hero-content">
            <h2>I'm Supilanas</h2>
            <h1>I love creating websites and data bases.</h1>

            <p>
              Im a Person who loves to do Database, also my side hobby of web developing
            </p>

{/*3 About me */}
            <div className="buttons">
              <a href="#about" className="btn light">
                About Me
              </a>
{/*4 My skills */}
              <a href="#skills" className="btn">
                My Skills
              </a>
            </div>
          </article>

{/* 5 Photo of my porfolio */}
          <div className="profile">
            <img src= {myPhoto} alt="Supilanas Profile" />
          </div>
        </section>

        <section id="about" className="content-section">

          <h2>About Me</h2>
{/* 6 Description */}          <article>
            <h3>Who Am I?</h3>
            <p>
              Hello! I'm Supilanas. I'm learning web development
              and enjoy turning creative ideas into websites and build a well and good database.
            </p>
          </article>
        </section>
{/* 7 skills  */}
        <section id="skills" className="content-section">
          <h2>My Skills</h2>

          <p>The languages that im familiar with:</p>

          <article className="skill-list">
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>React</div>
            <div>Vite</div>
            <div>mysql</div>
            <div>php

            </div>
          </article>
        </section>
      </main>
{/*8 end footer */}
      <footer>
        <p>© 2026 Supilanas Portfolio</p>
      </footer>
    </>
  )
}

export default App