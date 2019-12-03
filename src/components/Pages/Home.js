import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

// Reusable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome to our studio!"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="Tell me more"
          link="/services"
          showButton={true}
          image={image}
        />

        <Services/>
        <Portfolio/>
        <Timeline/>
        <Team/>
      </div>
    );
  }
}

export default Home;