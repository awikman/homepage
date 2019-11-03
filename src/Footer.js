import React from 'react';

export function Footer(props){
    return (
        <footer className="Footer">
          <div>
            <div>Contact me at <a className="Link" href="mailto:aleksi@wikman.ch">aleksi@wikman.ch</a></div>
            <div>Acces the source code at
              <a className="Link" rel="noopener" target="_blank" href="https://github.com/awikman/homepage">
                <i className="fas fa-external-link-alt"></i> Github
              </a>
            </div>
          </div>
        </footer>

    );
}

export default Footer;
