import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = (
        <ul className="bgrid-quarters s-bgrid-thirds cf">
          <li>
            <div className="columns feature-item">
              <img className="skill" alt="Git" src="images/tech/git.jpg" />
              <h5>Git</h5>
              <p>
                I use Git for all of my projects so far. I have used Git for
                version control in small teams and have toyed around with
                contributing to Open Source Projects.
              </p>
            </div>
          </li>

          <li>
            <div className="columns feature-item">
              <img className="skill" alt="React Js" src="images/tech/react.jpg" />
              <h5>React Js</h5>
              <p>
                I am fairly new to React and really did not like it at first. It
                has grown on me though and I will continue to use it going
                forward. I have built a ReactJS based resume-website template
                (link below in portfolio) which I used as a starting point for
                this personal site.
              </p>
            </div>
          </li>

            <div className="columns feature-item">
              <img className="skill" alt="Node JS" src="images/tech/node.jpg" />
              <h5>Node JS</h5>
              <p>
                Node JS is my server-side scripting language of choice. The bulk
                of my experience with it has been in conjunction with
                ReactJS-based projects
              </p>
            </div>

            <div className="columns feature-item">
              <img
                className="skill"
                alt="Bootstrap 4"
                src="images/tech/bootstrap.jpg"
              />
              <h5>Bootstrap 4</h5>
              <p>
                I use Bootstrap more often than not when designing the layout
                for my sites. It is the framework I am most familiar with and
                can therefore design more quickly than with others.
              </p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="MongoDB" src="images/tech/mongo.jpg" />
              <h5>MongoDB</h5>
              <p>
                I have used many different database systems and am better
                educated and experienced with Relational Databases. However, for
                many applications, the ease of use of MongoDB better suits my
                needs and it is much more enjoyable to work with
              </p>
            </div>

            <div className="columns feature-item">
              <img className="skill" alt="Heroku" src="images/tech/heroku.jpg" />
              <h5>Heroku</h5>
              <p>
                I use Heroku as my hosting platform for most of my projects
                because so far they are all unpaid and their free tier is
                convenient. I also appreciate its integration with Github for
                such simple deployment.
              </p>
            </div>
        </ul>
      );
      
      
      // this.props.data.skills.map(function(skills){
      //   var className = 'bar-expand '+skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Favorite Tech</span>
            </h1>
          </div>

<div>
<div className="nine columns main-col">
            <p>
              {`I'm a tinkerer and am always interested in playing around with new technologies but these are the ones that have really won me over`}
            </p>
          </div>
          {skills}

</div>
        </div>
      </section>
    );
  }
}

export default Resume;
