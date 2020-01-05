import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Skills from './components/skills'
import Blog from './components/blog'
import Contact from './components/contact'
import Education from './components/education'
import Services from './components/services'
import Projects from "./components/projects";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Education></Education>
					<Timeline></Timeline>
					<Services></Services>
					<Skills></Skills>
					<Projects></Projects>
					<Contact></Contact>


					{/*<Blog></Blog>*/}
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
