import React from 'react'

const FooterSection = () => {
  return (
    <footer className="footer-section">
        <div className="footer-container">
            <div className="footer-link-collection">
                <a href="https://facebook.com" className="footer-link"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="footer-link"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="footer-link"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="footer-link"><i className="fa-brands fa-google"></i></a>
                <a href="#" className="footer-link"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <p className="footer-copyright">© 2022 Fixxo. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default FooterSection