import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../pages/Desktop.css'
const Footer = () => {
    return (
        <div>
          <div className="div-31">
          Copyrights © CSD India 2020. All Rights Reserved.&nbsp;&nbsp;&nbsp;
          <a
            href="https://csdindia.gov.in/privacypolicy.html"
            className="footer-link"
            target="_blank"
            style={{textDecoration: 'none', color: 'inherit' }}
          >
            Privacy Policy&nbsp;&nbsp;&nbsp;
          </a>
           
          <a
            style={{textDecoration: 'none', color: 'inherit' }}
            href="https://csdindia.gov.in/disclaimer.html"
            className="footer-link"
            
          >
            &nbsp;Disclaimer&nbsp;&nbsp;&nbsp;
          </a>
           
          <a
            href="https://csdindia.gov.in/faq.html"
            className="footer-link"
            target="_blank"
            style={{textDecoration: 'none', color: 'inherit' }}
          >
            FAQ&nbsp;&nbsp;&nbsp;
          </a>
           
          <a
            style={{textDecoration: 'none', color: 'inherit' }}
            href="https://csdindia.gov.in/feedback.aspx"
            className="footer-link"
            target="_blank"
          >
            Feedback&nbsp;&nbsp;&nbsp;
          </a>
        </div>
        </div>
    )
}

export default Footer
