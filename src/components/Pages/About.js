import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';

class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="About Us"
          subtitle="It's really a great story"
          buttonText="Tell me more"
          link="/services"
          showButton={false}
          image={image}
        />
        <Timeline/>
        <Team/>
      </div>

    );
  }
}

export default About;