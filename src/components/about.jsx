import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm a bachelor of information of communication technology undergraduate student from university of sri jayewardenepura. I'm a creative thinker. I like to explore alternative solutions to problems, and I have an open mind about what will work best. My creativity has made me an effective team leader because I can anticipate problems and innovate solutions.</p>
                    {/* <p>I have started reflecting my ideas and thougths through the medium of words recently so spelling and grammer mistaks are very often.You can write me back if you spot any and don't want to live anymore :P </p>*/}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-xs-10 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my Interests</h2>
            </div>
            </div>
            <div className="row row-pt-md">

                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                        <div className="desc">
                            <h3>Dev Ops</h3>
                            <p>I am practicing and working with Jenkins, Docker, K8s, AWS. I have practical experience with linux. </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-2">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                        <div className="desc">
                            <h3>Mobile Application Development</h3>
                            <p> I have done project in Android development, React Native also now Started with flutter. </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                        <div className="desc">
                            <h3>Machine Learning </h3>
                            <p>I have experience with machine learning.I have developed small scale project with python. </p>
                        </div>
                    </div>
                </div>

                {/*<div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">*/}
                {/*    <div className="hire">*/}
                {/*        <h2>I am happy to know you that 10+ projects done sucessfully </h2>*/}
                {/*        <a href="https://www.linkedin.com/in/tisanthan/" className="btn-hire">Hire me</a>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="col-md-4  text-center animate-box">*/}
                {/*<div className="services color-2">*/}
                {/*<span className="icon">*/}
                {/*    <i className="icon-data" />*/}
                {/*</span>*/}
                {/*<div className="desc">*/}
                {/*    <h3>Dev Ops</h3>*/}
                {/*    <p>Jenkins , Kubernetes , Docker </p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}

            </div>
        </div>
        </section>
      </div>
    )
  }
}
