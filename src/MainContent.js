import React from 'react';

export function MainContent(props){
    return (
        <div className="Main">
          <div className="Section">
            <h3>About me</h3>
            <p>
              I'm a full stack web developer with experience developing with both the old, and the new
              stacks. Although I love working with modern technologies like React, Python, GraphQL,
              and serverless architectures, I'm also familiar with working with self hosted Linux servers
              and maintaining legacy systems written in something like Perl + MySQL.
            </p>
            <p>
              I'm currently working on e-commerce
              at <a rel="noopener" target="_blank" href="https://www.vilkasgroup.com/">
                Vilkas Group Oy
              </a> as a Senior Software Engineer (full stack). At Vilkas we develop, maintain, and host
              e-commerce platforms for merchants in the Nordic region.
            </p>
            <p>
              If you have any questions, please don't hesitate to contact me
              at <a href="mailto:aleksi@wikman.ch">aleksi@wikman.ch</a>
            </p>
          </div>
          <div className="Section">
            <h3>About this site</h3>
            <p>
              This site is an old fashioned homepage, like the ones we had in the 90s. Well, not quite
              that old fashioned, but the idea is the same – Just built with React and hosted on GitHub Pages.
            </p>
            <p>
              This site is still a work in progress. Originally I intended to add some interactive
              tech demos, but I never got around to it. This is why it was built with react,
              instead of just being a static HTML site (GitHub Pages would have certainly had prettier
              templates). But we'll get something nice here once I get around to it... Maybe.
            </p>
            <p>
              You can access the source code of this site
              at <a rel="noopener" target="_blank" href="https://github.com/awikman/homepage">
                <i className="fas fa-external-link-alt"></i>GitHub</a>
            </p>
          </div>
        </div>
    );
}

export default MainContent;
