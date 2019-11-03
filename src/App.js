import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <div className="MainContainer">

          <header className="Header">
            <img src={logo} className="logo" alt="logo" />
            <div className="profile">
              <h1>Aleksi Wikman</h1>
              <h2>Software Engineer</h2>
            </div>
          </header>

          <div className="Main">
            <div className="Section">
              <h3>About me</h3>
              <p>
                This is a main view section. TODO: Add some info about me
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="Section">
              <h3>Another section</h3>
              <p>I feel like we could have more of these kinds of cards here...</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              </p>
            </div>
          </div>
          <div className="Sidebar">
            <div className="Section">
              <p>
                This is a side bar item. Maybe add my contact info here...
              </p>
            </div>
          </div>
        </div>

        <footer className="Footer">
          <div>TODO: Footer here...</div>
        </footer>
      </div>
  );
}

export default App;
