import React from 'react';
import Login from './Login';

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
        <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
            <Login />
            <div className="image">
                <img src="img/banner.jpg" alt="" />
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

export default Banner;
