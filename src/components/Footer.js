import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDev } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
        <footer className="wrapper style1 align-center">
            <div className="inner">
                <ul className="icons">
                    <li> <a href="https://github.com/pay-n/plaginate"> <FontAwesomeIcon icon={ faGithub } /></a></li>
                    <li> <a href="https://github.com/pay-n/plaginate"> <FontAwesomeIcon icon={ faDev } /></a></li>
                </ul>
                <p>&copy; Payn. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
            </div>
        </footer>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Footer;
