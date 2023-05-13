import React from 'react';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2023 Mithlesh Patel. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="https://www.instagram.com/mithlesh_patel01/" target='_blank' rel='noreffer' className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://github.com/techiemithlesh" target='_blank' rel='noreffer' className="hover:text-gray-400">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mithlesh-12/" target='_blank' rel='noreffer' className="hover:text-gray-400">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
