import React from 'react';
import Login from './Login';
import { Card, Col } from 'react-bootstrap';

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
          <Col sm={6}>
            <Card style={{width: "50%", marginLeft: "8em", marginTop: "12em", padding: "3em" }}>
              <Card.Body>
                <Card.Text>
                  <Login />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} className="image">
            <img src="img/banner.jpg" alt="" />
          </Col>
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
