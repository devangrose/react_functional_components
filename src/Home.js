import React, { Component } from 'react';
import HomeContent from './HomeContent';
import { FaLinkedin } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa';


class Home extends Component {
  componentDidMount(){
    document.title = 'Home';
  }
  render(){
    return (
      <div>
        <ContactDetails />
        <HomeContent name="Devan Grose" /> 
        <HomeImage source="http://devangrose.me/img/profile.jpg" caption="Look at my beautiful face" />
        <HomePitch />
      </div>
    );
  }
}
function HomeImage (props) {

  return <div>
      <img src={props.source} />
      <p>{props.caption}</p>
  </div>
}

function HomePitch (props) {

  return <div>
      <h3>Why should you hire me?</h3>
      <p>I'm just an amazing dude yall</p>
  </div>
}

function ContactDetails (props) {

  return <ul>
    <li><a href="mailto:devangrose@gmail.com"><FaPaperPlane/></a></li>
    <li><a href="devangrose.me"><FaPaperclip /></a></li>
    <li><a href="www.linkedin.com/in/devangrose"><FaLinkedin /></a></li>
    <li><a href="www.github.com/devangrose"><FaGithub /></a></li>
  </ul>
}

export default Home;
