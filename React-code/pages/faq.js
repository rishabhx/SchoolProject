import React from "react";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        
        

        <section className="relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <br></br>
                <br></br>
                <br></br>
                <h2 className="text-4xl font-semibold text-white">
                Frequently Asked Questions
                </h2>
              </div>
            </div>
          </div>
        </section>
        
        <section className="relative block bg-gray-900">
          <div className="container mx-auto px-4 lg:pb-64">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  General Information
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-10/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                    What is the goal of the Android Network Traces website?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    Many smartphone apps collect and send a great deal of data to third-party websites. The goal of this site is to help people better understand Who knows What about us and Why. By Who, we mean these third-party websites. By What, we mean what data they are collecting about us. By Why, we mean the purpose of this 
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                    What types of data can I learn about from Android Network Traces?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      <ul>
                        <li><b>General ID data:</b>  MAC address, IMEI number UUID, and other identifiers. This data was used for analytics, advertising, authentication, and anti-fraud activities.</li>
                        <li><b>Device data:</b> Phone model, screen size, manufacturer info etc. This data was used for analytics, advertising, and interface customization.</li>
                        <li><b>Account data:</b> demographics such as email, age, gender, zip and settings for tasks like syncing data from different services. This data was used for analytics, advertising, and login purposes.</li>
                        <li><b>Network data:</b> IP address and network connectivity details like WiFi, LTE, 3G, 4G etc. This data was used for analytics, network optimization, and advertising.</li>
                        <li><b>Location data:</b> Location related GPS data from the phone + other Geospatial data. This data was used for advertising, analytics, personalization, and nearby searches. </li>
                      </ul>
                      </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                    What keywords would help me understand Android Network Traces?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    <ul>
                        <li><b>Network trace:</b> A network trace is a single piece of data sent across the internet (i.e. packet) that we were able to intercept (ex. latitude of 45 would be a coordinate for location data).</li>
                        <li><b>Network request:</b> A request may contain multiple network traces (ex. Latitude of 45, longitude of 90). The most common type of traffic request is HTTP or HTTPS. </li>
                        <li><b>UI monkey:</b> This refers to a bot that randomly clicks through an app. </li>
                    </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block bg-gray-900">
          <div className="container mx-auto px-4 lg:pb-64">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                About the Collected Data
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-10/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                    How much data was collected?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    We accessed approximately 15 thousand apps, which sent 6.3 million network traces to 12 thousand domains. 
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                    How did you collect data from apps?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    We collected data using 8 phones, an automation tool for clicking through apps, and a custom VPN for intercepting data.
                    <ul>
                        <li><b>Phones and apps:</b> In November 2016, we crawled the Google Play store to find free apps visible to US users. Out of the 185,000 apps free apps updated after 2015, 30,000 apps were compatible with Android 7 and were thus installed on eight phones. Network traces were found from half of these apps.</li>
                        <li><b>Automation tool:</b> Each phone contained an automation tool called a “UI monkey”. The UI monkey could install an app, randomly click through it for 3 minutes, and then uninstall it. We ran the UI monkeys for 50 days. </li>
                        <li><b>Custom VPN:</b> As the UI monkeys clicked through the apps, the phones sent data across the internet. The most common way for smartphone apps to communicate with cloud servers is through HTTP(S) requests. Therefore, we built a custom tool (or “man-in-the-middle VPN”) to intercept these outgoing HTTP(S) traffic requests.</li>
                    </ul>
                    This approach is novel in its ability to not only assess which data leaves the phones but also collect millions of data points. A limitation is that UI monkeys miss some screens in an app. Additionally, these bots were generally not logged into the apps.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                    How did you process the collected data for analysis?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    The responses (i.e. network traces) that our VPN intercepted were parsed as key-value pairs. For each pair, we performed a taxonomy look-up to assign a data type. For example, a key of latitude could have a value of 40.460865 and be classified as “Location data”. 
Our algorithm successfully predicted the data type with 95% precision. The five data types supported with our current dataset are shown above.

                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                    How often do you refresh your data?

                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    Our predictive results are based on the one-time analysis of the dataset from a project called MobiPurpose. We assume the data type sent to the cloud services and the data collection purposes to be quite static. If we update the raw dataset in the future, we will put up a notice. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block bg-gray-900">
          <div className="container mx-auto px-4 lg:pb-64">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Data Collection Purposes
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-10/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                    How did you predict the data-collection purpose?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    Our team built both PrivacyGrade.org and this website. PrivacyGrade assigns a privacy score to an app based on user expectations, while Android Network Traces provides transparency on where our data is going and why. That is, Android Network Traces focuses more on the third parties that are gathering data about us. 

                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                    What are examples of the purposes?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      <ul>
                    <li><b>Analytics:</b> A general ID could be used to avoid redundant device counting in marketing, and location and account data could be used for marketing analysis.</li>
                    <li><b>Advertising:</b> Network data can be used for personalizing advertisements, and general ID could support ad targeting/evaluation. </li>
                    <li><b>Interface customization:</b> Device information can be used to customize an interface based on the screen resolution.</li>
                    <li><b>Anti-fraud activities:</b> Device information could be used to enforce limits on both free content and advertisement.</li>
                    <li><b>Third-party login:</b> Account data could help a user log into a new app with their facebook or google account.</li>
                    <li><b>Network optimization:</b> Network data could be used to download low resolution images when on LTE.</li>
                    </ul>
                    For researchers interested in our full purpose taxonomy, it is available on github as part of the CMU’s contribution to the Brandeis project.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}