import React, { useState } from 'react';
import mapFallback from '../../assets/map.png';
import { ReactComponent as InstagramIconSVG } from '../../assets/instagram.svg';
import { ReactComponent as WhatsappIconSVG } from '../../assets/whatsapp.svg';
import './style.css';

function Footer() {
    const [mapLoaded, setMapLoaded] = useState(true);

    return (
        <footer className="footer">
            <div className="container">
                <div className="contact-section">
                    <h2>Contact</h2>
                    <span>+49 999 999 99 99</span>
                    <div className="social-links">
                        <a href="https://www.instagram.com/" className="instagram-icon">
                            <InstagramIconSVG />
                            <span>instagram</span>
                        </a>
                        <a href="https://web.whatsapp.com/" className="whatsapp-icon">
                            <WhatsappIconSVG />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>

                <div className="address-section">
                    <h2>Address</h2>
                    <address>
                        <a href="https://g.page/telranDE?share" target="_blank" rel="noreferrer">
                            <span>Linkstraße 2, 8 OG, 10785,</span>
                            <span>Berlin, Deutschland</span>
                        </a>
                    </address>
                    <p>
                        <span className="hours-label">Working Hours:</span>
                        <span className="hours-value">24 hours a day</span>
                    </p>

                </div>
            </div>

            <div className="map-section">
                {mapLoaded ? (
                    <div className="map-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.410459266542!2d13.375101599999999!3d52.5079105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1698834408776!5m2!1sru!2sde"
                    title="Your descriptive title"
                    width="95.9vw"
                    height="36.47vw"
                     style={{border:0}}
                     allowFullScreen={true}
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"
                     onLoad={() => {setMapLoaded(true)}}
                     onError={() => {setMapLoaded(false)}}
                 ></iframe>
                 </div>
                ) : (
                    <img src={mapFallback} alt="Map" width="100%" height="300" />
                )}
            </div>
        </footer>
    );
}

export default Footer;
