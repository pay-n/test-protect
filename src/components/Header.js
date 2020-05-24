import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
        <section className="header">
            <div style={{width: "100%", textAlign:"center"}} className="image-logo">
                <img src="img/test-protect-header.png" alt="logo" />
            </div>
        </section>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Header;
