import React from 'react';

export function Header(props){
    return (
        <header className="Header">
          <div className="HeaderContent">
            <img src={process.env.PUBLIC_URL + "profile_image.jpg"}
                 width="96" height="96"
                 className="ProfileImage" alt="profile image" />
            <div className="Profile">
              <h1>Aleksi Wikman</h1>
              <h2>Software Engineer</h2>
            </div>
          </div>
        </header>
    );
}

export default Header;
