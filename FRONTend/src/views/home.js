import React, { useEffect,useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import HomeHeader from '../components/homeHeader'
import Footer from '../components/Footer'

import './home.css'
const Home = (props) => {
  // const [user, setUser] = useState('');
  // useEffect(()=>{
  //   let curruser=localStorage.getItem('userEmail');
  //   setUser(curruser);
  // })
  return (
    <div className="home-container">
      <Helmet>
        <title>E-Tender</title>
      </Helmet>
      <HomeHeader/>
      <div id="how-it-works" className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Welcome to our E-Tender Platform
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Effortlessly manage your tenders online</span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              
              <Link to="/get-started">
                <button className="buttonFilled">Get Started</button>
              </Link>

              <Link to= "/start-bidding">
                <button className="buttonFlat">Start Bidding</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="categories" className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Efficient Features for Seamless Tendering
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Explore the powerful features that make e-tendering
                      hassle-free
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Easy Bidding Process"
                subHeading="Streamlined process for submitting bids and proposals"
              ></FeatureCard>
              <FeatureCard
                heading="Advanced Search Filters"
                subHeading="Find relevant tenders quickly with customizable search filters"
              ></FeatureCard>
              <FeatureCard
                heading="Real-Time Notifications"
                subHeading="Stay updated with instant notifications on new tender opportunities"
              ></FeatureCard>
              <FeatureCard
                heading="Secure Document Management"
                subHeading="Upload and manage tender documents securely on the platform"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div id="faq" className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">
              Choose the Right Plan for Your Business
            </h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>Select a plan that suits your needs and budget</span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container06">
                <span className="home-text36 heading3">Free</span>
                <span className="bodySmall">
                  Access basic features for free
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text40">✔</span>
                  <span className="bodySmall">Unlimited tenders</span>
                </div>
                <div className="home-container10">
                  <span className="home-text41">✔</span>
                  <span className="bodySmall">Limited customer support</span>
                </div>
                <div className="home-container11">
                  <span className="home-text42">✔</span>
                  <span className="bodySmall">Basic analytics</span>
                </div>
                <div className="home-container12">
                  <span className="home-text43">✔</span>
                  <span className="bodySmall">Limited customization</span>
                </div>
              </div>
              <button className="home-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container13">
                <span className="home-text44 heading3">BASIC</span>
                <span className="bodySmall">Ideal for small businesses</span>
              </div>
              <div className="home-container14">
                <span className="home-text45">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">29</span>
                <span className="home-text48">/ month</span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <span className="home-text49">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="home-container17">
                  <span className="home-text51">✔</span>
                  <span className="bodySmall">Unlimited tenders</span>
                </div>
                <div className="home-container18">
                  <span className="home-text52">✔</span>
                  <span className="bodySmall">Priority customer support</span>
                </div>
                <div className="home-container19">
                  <span className="home-text53">✔</span>
                  <span className="bodySmall">Advanced analytics</span>
                </div>
                <div className="home-container20">
                  <span className="home-text54">✔</span>
                  <span className="bodySmall">Custom branding</span>
                </div>
              </div>
              <button className="home-button1 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container21">
                <span className="home-text55 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  For enterprises and large organizations
                </span>
              </div>
              <div className="home-container22">
                <span className="home-text58">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">99</span>
                <span className="home-text61">/ month</span>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <span className="home-text62">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="home-container25">
                  <span className="home-text64">✔</span>
                  <span className="bodySmall">Unlimited tenders</span>
                </div>
                <div className="home-container26">
                  <span className="home-text65">✔</span>
                  <span className="bodySmall">Dedicated customer support</span>
                </div>
                <div className="home-container27">
                  <span className="home-text66">✔</span>
                  <span className="bodySmall">
                    Advanced analytics and reporting
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text67">✔</span>
                  <span className="bodySmall">Full customization options</span>
                </div>
              </div>
              <button className="home-button2 buttonFilledSecondary">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Streamline Your Tender Process with Us
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Our e-tender platform offers a comprehensive solution for all
                  your tendering needs. From creating and publishing tenders to
                  receiving and evaluating bids, we&apos;ve got you covered.
                  Save time, reduce paperwork, and increase efficiency with our
                  user-friendly platform.
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container29">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text85 heading2">Common questions</h2>
              <span className="home-text86 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container30">
              <Question1
                answer="To register as a bidder, go to the website's registration page and fill out the required information."
                question="How do I register as a bidder on the e-tender website?"
              ></Question1>
              <Question1
                answer="Yes, you can submit bids for multiple tenders simultaneously on the e-tender website."
                question="Can I submit bids for multiple tenders at the same time?"
              ></Question1>
              <Question1
                answer="You will receive a notification on the website and via email if your bid has been accepted."
                question="How will I know if my bid has been accepted?"
              ></Question1>
              <Question1
                answer="There may be a nominal fee for accessing certain premium features or participating in specific tenders."
                question="Is there a fee for participating in tenders on the e-tender website?"
              ></Question1>
              <Question1
                answer="If you miss the deadline, your bid will not be considered, and you may have to wait for the next tender opportunity."
                question="What happens if I miss the deadline for submitting a bid?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
