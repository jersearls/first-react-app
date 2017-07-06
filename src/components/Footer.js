import React from 'react';

//stateless functional component
const Footer = (props) => {
  return (
    <footer className="footer">
      <div>Created by Jeremy Searls with React</div>
        <ul className="body">
          <a href="https://github.com/jersearls/react-bmi-demo" target="_blank">Visit the project GitHub page</a>
          <br />
          <br />
          <a href="https://www.linkedin.com/in/jeremysearls/" target="_blank">Visit my Linkedin page</a>
        </ul>
    </footer>
    )
}
export default Footer;
