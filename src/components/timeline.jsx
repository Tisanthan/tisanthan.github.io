import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  {/*<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">*/}
                  {/*  <div className="timeline-entry-inner">*/}
                  {/*    <div className="timeline-icon color-3">*/}
                  {/*      <i className="icon-pen2" />*/}
                  {/*    </div>*/}
                  {/*    <div className="timeline-label">*/}
                  {/*      <h2>Internship at Juniper <span>2019-present</span></h2>*/}
                  {/*      <p>I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</article>*/}
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mobile Developer  <span>2018-2019</span></h2>
                        <p>I have stated develop android application with java then i have committed with Courier service application development then i have to develop android application with kotlin. I'm enthusiastic in developing the application with React native and flutter now. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Website developer <span>2017-2018</span></h2>
                        <p>I have developed and maintained the front end functionality of websites and  Designed prototypes for apps and websites also, Developed websites that have a consistent feel and look throughout all web properties. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
