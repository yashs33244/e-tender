import React from "react";
import "./start-bidding.css"
import LiveTender from "../components/LiveTender";
import HomeHeader from "../components/homeHeader";
import { Link } from "react-router-dom";

const BidTender = () => {
  return (
    <div>
  <link href="./page1.css" rel="stylesheet" />
  <HomeHeader/>
  <div class="page1-container">
      
    <div class="page1-hero heroContainer">
      <div class="page1-container01">
        <h1 class="page1-hero-heading heading1">HOW It Works</h1>
        <span class="page1-hero-sub-heading bodyLarge">
          <span>
            <span>
              <span>Effortlessly manage your tenders online</span>
              <span></span>
            </span>
          </span>
        </span>
        <div class="page1-btn-group">
          
            <button class="buttonFilled">Get Started</button>
          
          <button class="buttonFlat">Learn More →</button>
        </div>
      </div>
    </div>
    <div class="page1-steps">
      <h1 class="page1-text14"><span>Discover Our Process</span></h1>
      <span class="page1-text16">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <br />
        <span></span>
      </span>
      <div class="page1-container02">
        <div class="page1-step">
          <div class="page1-container03">
            <div class="page1-line"></div>
            <div class="page1-container04">
              <svg viewBox="0 0 1024 1024" class="page1-icon10">
                <path
                  d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"
                ></path>
              </svg>
            </div>
            <div class="page1-line1"></div>
          </div>
          <div class="page1-container05">
            <h1 class="page1-text19"><span>Ideate</span></h1>
            <span class="page1-text21">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br />
              <span></span>
            </span>
          </div>
        </div>
        <div class="page1-step1">
          <div class="page1-container06">
            <div class="page1-line2"></div>
            <div class="page1-container07">
              <svg viewBox="0 0 1024 1024" class="page1-icon12">
                <path
                  d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"
                ></path>
              </svg>
            </div>
            <div class="page1-line3"></div>
          </div>
          <div class="page1-container08">
            <h1 class="page1-text24"><span>Design</span></h1>
            <span class="page1-text26">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br />
              <span></span>
            </span>
          </div>
        </div>
        <div class="page1-step2">
          <div class="page1-container09">
            <div class="page1-line4"></div>
            <div class="page1-container10">
              <svg viewBox="0 0 1024 1024" class="page1-icon14">
                <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
              </svg>
            </div>
            <div class="page1-line5"></div>
          </div>
          <div class="page1-container11">
            <h1 class="page1-text29"><span>Develop</span></h1>
            <span class="page1-text31">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br />
              <span></span>
            </span>
          </div>
        </div>
        <div class="page1-step3">
          <div class="page1-container12">
            <div class="page1-line6"></div>
            <div class="page1-container13">
              <svg viewBox="0 0 1024 1024" class="page1-icon17">
                <path
                  d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"
                ></path>
              </svg>
            </div>
            <div class="page1-line7"></div>
          </div>
          <div class="page1-container14">
            <h1 class="page1-text34"><span>Deploy</span></h1>
            <span class="page1-text36">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br />
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <LiveTender />
    <LiveTender />
    <LiveTender />
    <LiveTender />
    <LiveTender />
    <LiveTender />
    <LiveTender />
  </div>
</div>

  )
}

export default BidTender