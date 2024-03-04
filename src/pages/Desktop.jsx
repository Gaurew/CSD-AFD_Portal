import HeaderContainer from "../components/HeaderContainer";
import GroupComponent from "../components/GroupComponent";
import "./Desktop.css";
import play_button from '../Assets/play.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Desktop = () => {
  return (
    <div className="desktop-1">
      <HeaderContainer />
      <img className="desktop-1-child" alt="" src="/group-329@2x.png" />
      <div className="sign-in">
        signin
      </div>
      <b className="message-from-chairman">Message from Chairman</b>
      <div className="desktop-1-item" />
      <div className="desktop-1-inner" />
      <div className="rectangle-div" />
      <div className="hero">
        <div className="title">
          <b className="csd-afd-portal-container">
            <p className="csd-afd">CSD AFD</p>
            <p className="csd-afd">PORTAL</p>
          </b>
          <div className="the-canteen-stores">
            The Canteen Stores Department of Ministry of Defence provides
            consumer goods of high quality to the Indian Armed Forces at a price
            cheaper than the prevailing market rates.
          </div>
        </div>
        <div className="search-bar">
          <div className="button">
            <Link to ='/login' style={{textDecoration: 'none', color: 'inherit' }} ><div className="shop-now">Shop Now</div></Link>
          </div>
          <div className="video-wrapper">
            <div className="video">
              <img className="icon" src={play_button} />
              <div className="watch-video">Watch Video</div>
            </div>
          </div>
          <div className="button1">
            <div className="shop-now">See More</div>
          </div>
        </div>
        <img className="hero-child" alt="" src="/rectangle-93@2x.png" />
      </div>
      <GroupComponent />
      <img className="image-28-icon" alt="" src="/image-28@2x.png" />
      <div className="attention-esteemed-beneficiar-container">
        <p className="attention-esteemed-beneficiar">{`ATTENTION: ESTEEMED BENEFICIARIES & BUSINESS PARTNERS`}</p>
        <p className="attention-esteemed-beneficiar">&nbsp;</p>
        <p className="attention-esteemed-beneficiar">&nbsp;</p>
        <p className="it-has-come-to-our-notice-that">
          <span className="it-has-come-to-our-notice-that1">
            <span className="i">I</span>
            <span className="t-has-come">{`T HAS COME TO OUR NOTICE THAT FEW THIRD PARTY FIRMS POSE THEMSELVES AS AGENTS AND MIDDLEMEN FOR FACILITATING VARIOUS WORKS IN THE DEPARTMENT. `}</span>
            <span className="i">A</span>
            <span className="t-has-come">{` FEW FAKE WEBSITES OF CSD AND AFD PORTAL HAVE BEEN CREATED BY SUCH UNAUTHORISED PERSONS TO MISGUIDE STAKEHOLDERS OF THE CSD. `}</span>
            <span className="i">I</span>
            <span className="t-has-come">
              T IS CLARIFIED THAT CANTEEN STORES DEPARTMENT IS A GOVERNMENT OF
              INDIA ORGANIZATION UNDER THE MINISTRY OF DEFENCE.
            </span>
            <span className="w"> W</span>
            <span className="t-has-come">{`E DO NOT DEAL WITH THE AGENTS/MIDDLEMEN AND/OR THEIR REPRESENTATIVES, IN ANY WAY. `}</span>
            <span className="i">U</span>
            <span className="t-has-come">{`TILIZING THE SERVICES OF SUCH UNAUTHORIZED PERSONS BY ANY FIRM, IF ESTABLISHED MAY LEAD TO UNILATERAL DELETION OF THEIR PRODUCTS AND POSSIBLE BLACKLISTING. `}</span>
            <span className="i">A</span>
            <span className="t-has-come">
              LL BENEFICIARIES ARE ADVISED TO EXERCISE CAUTION AND LOG INTO THE
              AFD PORTAL BY VISITING OUR OFFICIAL WEBSITE WWW.CSDINDIA.GOV.IN
            </span>
          </span>
        </p>
      </div>
      <div className="maj-gen-satinder-container">
        <p className="csd-afd">MAJ GEN SATINDER SINGH,SM</p>
        <p className="csd-afd">{`CHAIRMAN, BOARD OF ADMINISTRATION & GENERAL MANAGERCANTEEN STORES DEPARTMENT`}</p>
      </div>
      <div className="desktop-1-child1" />
      <div className="copyrights-csd-container">
        Copyrights © CSD India 2020. All Rights Reserved.
        <a
          className="privacy-policy"
          href="https://csdindia.gov.in/privacypolicy.html"
          target="_blank"
        >
          <span className="privacy-policy1">Privacy Policy</span>
        </a>
        
        <a
          className="privacy-policy"
          href="https://csdindia.gov.in/disclaimer.html"
          target="_blank"
        >
          <span className="privacy-policy1">Disclaimer</span>
        </a>
        
        <a
          className="privacy-policy"
          href="https://csdindia.gov.in/faq.html"
          target="_blank"
        >
          <span className="privacy-policy1">FAQ</span>
        </a>
        
        <a
          className="privacy-policy"
          href="https://csdindia.gov.in/feedback.aspx"
          target="_blank"
        >
          <span className="privacy-policy1">Feedback</span>
        </a>
      </div>
      <img className="rectangle-icon" alt="" src="/rectangle-94@2x.png" />
      <div className="brand" />
      <b className="explore-our-latest">Explore Our Latest Inventory</b>
    </div>
  );
};

export default Desktop;
