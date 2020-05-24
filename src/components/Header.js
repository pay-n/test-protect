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
            <div className="image-logo">
                <img src="img/test-protect-logo.png" alt="logo" />
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