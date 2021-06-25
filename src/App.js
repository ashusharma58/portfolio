import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      a: 0
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    let personalData = {
      name: 'Ashish Kumar Sharma',
      bio: '',
      address: {
         street : 'Badangarh Teh-Chirawa',
         city: 'Jhunjhunu',
         state: 'Rajasthan',
         zip: '333035',
      },
      phone: '8107357801',
      email: 'ashuysharma@gmail.com',
      resumeDownload: '/ashish_sharma_reactjs.pdf',
      profilepic: 'profilepic.jpeg',
      occupation: 'Full Stack Developer',
      description: 'currently employed by Classic Informatics Pvt Ltd where I work as a software engineer across the range of products.',
      social: [
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/ashish-sharma-8650a4125',
          className: 'fa fa-linkedin'
        },
        {
          name:"github",
          url:"https://github.com/ashusharma58",
          className:"fa fa-github"
        },
        {
          name:"skype",
          url:"https://join.skype.com/invite/URrzUReNvpIU",
          className:"fa fa-skype"
        }
      ],
      education: [
        {
          school: 'Institute of Engineering & Technology, Alwar',
          degree: 'Bachelors in Technology',
          graduated: '2013 - 2017',
          description: `I attended IET,Alwar for my Bachelors of Technology. While here, I studied Computer Science Engineering.
          It was here that I discovered my passion for scalable application programming (web and mobile).`
        }
      ],
      work: [
        {
          company: 'Classic Informatics Pvt Ltd',
          title: 'Software Engineer',
          years: 'Oct 2018 - Present',
          description: `For most of my time at Classic Informatics Pvt Ltd, I have worked as a Software Engineer.
           Here I have had the chance to dig in and get my hands dirty with all parts of our software.
           I have worked extensively with React/Redux as well as with react hooks.
           As well, I worked on mobile application written in React Native.
           I have worked with Node backend. 
            `
        },
        {
          company: 'Alluma',
          title: 'Frontend Developer',
          years: 'Mar 2018 - Oct -2018',
          description: `In Alluma I worked as a Frontend Developer. Where I got a chance to work on React/Redux.
          Here we build Cryptocurrency Exchange platform to provide a smooth user experience of trading.`
        }
      ],
      skills: [],
      "portfolio":{
        "projects": [
          {
            "title": "Condexo-Dashboard",
            "category":"Condexo is property management tool",
            "image": "Condexo.png"
          },
        {
          "title": "Condexo-Documents",
          "category":"Condexo is property management tool",
          "image": "Condexo1.png"
        },
          {
            "title":"Alluma-Dashboard",
            "category":"Alluma is crypto trading platform",
            "image":"alluma-1.png",
            "url":""
          },
          {
            "title":"Alluma-TradingPage",
            "category":"Trading page of alluma",
            "image":"alluma-2.png",
            "url":""
          },
          {
            "title":"Courier Service",
            "category":"Website I built for a courier service provider",
            "image":"courier-service.png",
            "url":""
          },
          {
            "title":"Resume Website",
            "category":"A React based resume website template",
            "image":"resume-website.png",
            "url":""
          }
        ]
      },
   }
    return (
      <div className="App">
        <Header data={personalData}/>
        <About data={personalData}/>
        <Resume data={personalData}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;


