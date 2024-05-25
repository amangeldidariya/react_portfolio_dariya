import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faTwitter, faGithub, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Cont.css';

const Cont = () => {
    return (
        <div className="contacts" >
            <h2>Мои контакты</h2>
            <div className="social-icons">
                <a href="https://t.me/darriiyal" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a href="https://www.instagram.com/_darriiya?igsh=MWpsdHB3NnV3cjF1dg==" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="ссылка на ваш твиттер" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://github.com/amangeldidariya" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://discord.com/channels/@_darriiya" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDiscord} />
                </a>
                <a href="https://www.linkedin.com/in/dariya-amangeldi-134071257/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
    );
};

export default Cont;
