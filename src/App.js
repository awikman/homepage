import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="Header">
          <div className="HeaderContent">
            <img src={process.env.PUBLIC_URL + "profile_image.jpg"} className="ProfileImage" alt="profile image" />
            <div className="Profile">
              <h1>Aleksi Wikman</h1>
              <h2>Software Engineer</h2>
            </div>
          </div>
        </header>
        <div className="MainContainer">
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
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="Sidebar">
            <div className="Section">
              <div><i className="fas fa-file-signature"></i> Aleksi Wikman</div>
              <div><i className="fas fa-map-marked-alt"></i> Switzerland, Zürich </div>
              <div><i className="fas fa-at"></i> aleksi@wikman.ch </div>
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
