import React from "react";
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import HorizontalFlow from "./horizontal";
import Legend from "assets/img/ggg.png"
import mainImage from "assets/img/main-homepage-image.png";
import sectionImage from "assets/img/how-we-make-this.png";
// Add font and css
import "typeface-roboto"; /* Roboto font, usage: font-family: 'Roboto', sans-serif; */
import './flowVisualizationStyles.css'; /* custom styling */

export default function Profile() {
  return (
    <>
      { <Navbar transparent /> }
        <script
          type="text/javascript"
          src="/node_manager.js">
        </script>

      {/* Who Knows What About Us Section */}
      <section className="pt-20 pb-10 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-10/12 px-4">
                <h1 className="pt-20 font-semibold" style={{color:"#252525", fontSize:"2.5rem", lineHeight:"2.5rem"}}>
                    <span style={{color:"#0047FF"}}>Who </span>
                    <span>knows </span>
                    <span style={{color:"#0047FF"}}>What </span>
                    <span>about Us and </span>
                    <span style={{color:"#0047FF"}}>Why? </span>
                </h1>
                
                <img src={mainImage} alt="mainImage" className="self-center pt-20 mt-6"/>

                <p className="text-lg leading-relaxed m-4 pt-20 pb-20" style={{color:"#252525"}}>
                Many smartphone apps gather and send of sensitive data to third parties around the Internet. Android users may see notifications of apps trying to access their data daily. However, it's difficult for users to know what kind of data is being collected by those apps, and why the data is being collected. 
                The goal of our website is to educate users about what kind of network activity is being carried out by android apps. 
                Learn more about this project from our published paper. 
                </p>
              </div>
            </div>
          </div>
      </section>


      {/* How We Make This Section */}
      <section className="relative pb-20">

          <div className="container mx-auto px-4">

          <div className="flex flex-wrap justify-left text-left mb-24">
              <div className="w-full w-5/12 px-4 mr-auto">
                <h2 className="text-3xl font-semibold leading-normal">How we make this?</h2>
                <p className="text-lg leading-relaxed text-gray-600">
                <i>Collecting and Analyzing Data</i>
                </p>
              </div>
          </div>

            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 mr-auto">
                <img
                  alt="diagram describes how data flows from app and websites via our vpn "
                  className="max-w-full "
                  src={ sectionImage }
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-2">
                  <p className="mt-4 text-lg leading-relaxed" style={{color:"#252525"}}>
                  As a team of researchers at Carnegie Mellon University, we collected network traces from thousands of apps, and analyze them into categories of data types. In this website we present data visualizations showing “who” collects our data, “what” data they collected, “where” do they send our data to, and “why” the data is being sent.
                  <br/><br/>
                  The most common way for smartphone apps to communicate with cloud servers is through HTTP(S) requests. Therefore, we built a custom VPN to intercept these network traces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div class="container mx-auto pb-20">
          <div class="flex flex-wrap">
            <div class="w-1/12 ">
            </div>
            <div class="w-10/12 flex-1">
              <hr class="solid"/>
            </div>
            <div class="w-1/12 ">
              
            </div>
          </div>
        </div>

        <section className="relative pb-20">

          <div className="container mx-auto px-4">

            <div className="flex flex-wrap justify-left text-left mb-12">
                <div className="w-full w-5/12 px-4 mr-auto">
                  <h2 className="text-3xl font-semibold leading-normal">What can you learn about smartphone data?</h2>
                  <p className="text-lg leading-relaxed text-gray-600">
                  <i>Data flow of Top 5 Apps that collect the most data</i>
                  </p>
                </div>
            </div>
          </div>
          <div style={{
            height: "800px",
          }}>
            <img src={Legend} alt="Legend" style={{paddingTop: "50px", display: "block", maxWidth: "46%", marginLeft:"auto", marginRight:"auto"}}/>
            <HorizontalFlow />
          </div>
        </section>


      
      
      { <Footer /> }
    </>
  );
}
// app elements class: .react-flow__node-input
//     border-color: #0041d0;
//     border-style: solid; 