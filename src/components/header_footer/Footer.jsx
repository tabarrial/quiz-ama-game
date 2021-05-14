import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'100px' }}>
            <Fade delay={500}>
                <div className="footer_copyright">
                    Hecho con 
                <span style={{color : 'crimson'}}>♥</span> by @albertofernandez fork de
                <a href="http://www.github.com/Jatin-8898" target="_blank"           rel="noopener noreferrer"> Jatin Varlyani 
                </a>
                
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
