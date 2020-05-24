import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <div class="content">
        <h1>Story</h1>
        <p class="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
        <p>This is a <strong>Banner</strong> element, and it's generally used as an introduction or opening statement. You can customize its <span class="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-banner">details</a>).</p>
        <ul class="actions stacked">
          <li><a href="#first" class="button large wide smooth-scroll-middle">Get Started</a></li>
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Login;
