import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import todoApp from '../assets/images/todoApp.jpg';
import ExpenseTracker from '../assets/images/expenseTracker.jpg';
import bellrCakes from '../assets/images/bellrCakes.jpg';

import pic8 from '../assets/images/pic03.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Andrew Efurhievwe</strong>
              <br />A Web developer
            </h2>
            <p>I've made few things. Check it out!</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>These are some of the projects I've built</p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://andys-todo-app.netlify.app/"
                  target="_blank"
                  className="image fit"
                >
                  <img src={todoApp} alt="My todo app" />
                </a>
                <header>
                  <h3>React todo App</h3>
                </header>
              </article>
              <article className="item">
                <a
                  href="https://andys-expense-tracker-app.netlify.app/"
                  target="_blank"
                  className="image fit"
                >
                  <img
                    src={ExpenseTracker}
                    alt="A simple expense tracker app"
                  />
                </a>
                <header>
                  <h3>Expense tracker app</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://bellr-cakes.netlify.app/"
                  target="_blank"
                  className="image fit"
                >
                  <img
                    src={bellrCakes}
                    alt="An e-commerce site for ordering cakes"
                  />
                </a>
                <header>
                  <h3>Bellr Cakes & more</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
            I am a React developer with a passion for creating beautiful
            websites. Responsive, speedy websites make me happy. I'm a big fan
            of the JAMstack and spend most of my time working with React and
            GatsbyJS. I dabble in a little bit of ASP.NET C# and node I'm a
            self-taught developer so in my spare moments I like to play some
            call of duty and blitz chess Feel free to get in touch.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>Feel free to send me a message</p>

          <form method="post" action="mailto:andyriles22@gmail.com">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
