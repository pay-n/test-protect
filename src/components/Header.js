import React from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
        <header>
          <Navbar bg="light" variant="light" fixed="top">
                  <Navbar.Brand href="#">
                    <img 
                      width="100%"
                      height="70%"
                      src="img/test-protect-header.png"
                      className="d-inline-block align-top text-center" 
                      alt="Test protect header"
                      />
                  </Navbar.Brand>
          </Navbar>
        </header>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Header;
