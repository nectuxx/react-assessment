import React from 'react'

import planes from "../images/planes.png";
import lamp from "../images/lamp.png";
import Group from "../images/Group.png";
import luggage from "../images/luggage.png";
import stairs from "../images/stairs.svg";
import Group2 from "../images/Group2.png";
import furniture from "../images/furniture.png";
import climbing from "../images/climbing.png";

export function Home() {

      return (
        <React.Fragment>
        <section className="mbr-fullscreen">
            <div className="container align-left">
              <div className="row justify-content-left">
                <div className="col-sm-5 section-1">
                  <h1 className="mbr-section-title align-left"><strong>Email for Designers</strong></h1>
                  <div className="mbr-section-text">
                    <p>Dynamic email tool for creators that doesn't cost a leg. Works with sketch, Figma and XD. Easily import your content and send with your favorite API.</p>
                  </div>
                  <div className="mbr-section-btn align-left" style={{position: "relative" ,top: "18px"}}>
                    <a className="btn btn-sm btn-dark" href="#">Start Free Trial</a></div>
                </div>
                <div className="sun-img"><img src={planes} alt="planes" /></div>
              </div>
            </div>
          </section>

          <section>
            <div id="showbox-example" className="showbox p-5" style={{position: "relative"}}>
              <div
                className="d-flex-1 flex-wrap-1 align-content-center htcs-flex-container-1 htcs-flex-container-height-1 justify-content-between mt-5"
                style={{textAlign: "center"}}>
                <img className="img-thumbnail-1 lamp" src={lamp} alt="Thumbnail" />
                <img className="img-thumbnail-1 paper_ladder" src={Group} alt="Thumbnail" />
                <img className="img-thumbnail-1 luggage" src={luggage} alt="Thumbnail" />

              </div>
            </div>
          </section>

          <section className="section-3-wrap">
            <div className="section-3">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-sm-3 text-left section-left">
                    <h2 className="section-3-title"><strong>Newsletter in minutes</strong></h2>
                    <div>
                      <p>Emails are traditionally painfully slow to work with.
                        We've made a drag and drop tool that automatically
                        fetches data and easily copy or send HTML
                        using your favorite API.</p>
                        <img src={stairs} className="stairs" />
                    </div>
                  </div>
                  <div className="col-sm-4 text-left section-right">
                    <h2 className="section-3-title"><strong>Works with XD, Figma and Sketch</strong></h2>
                    <div className="section-3-text">
                      <p>Ever wanted to export your
                        designs directly from your
                        favorite design tool to your
                        Email service? Now you can.
                        From layers to HTML, to
                        people’s inbox.</p>
                    </div>
                  </div>

                </div>
                <div  className="section-3-1-1">
                  <img src={Group2} className="focusimg" alt="focusing" />
              </div>
              </div>
            </div>    
            
            <div className="section-3-1">
              <div className="row justify-content-center container">
                <div className="col-sm-3 text-left left-section">
                  <h2 className="section-3-title"><strong>So affordable.
                    Small teams OK</strong></h2>
                  <div>
                    <p>Some email services cost
                      hundreds or thousands to send to
                      a not-so-large audience. We’ll
                      make sure you can stop worrying
                      bout costs and more about
                      sending your beautiful content!</p>
                  </div>
                </div>
                <img src={furniture} alt="furniture" />
              </div>
            </div>
          </section>

          <section className="section-4">
            <div className="container">
              <div className="row justify-content-center text-center section-4-top">
                <div lass="col-sm-3"><img src={climbing} className="climbing" alt="climbing" /></div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-3 text-center">
                  <h2 className="section-3-title"><strong>Strat free trial</strong></h2>
                  <p>So affordaable you won't believe it.</p>
                  <p>Cancel anytime</p>
                  <div className="mbr-section-btn"><a className="btn btn-sm btn-dark" href="#">Start Free Trial</a></div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )
}
