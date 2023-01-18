import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/ayushya',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/ayushyajaiswal',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/ayushy4',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/ayushyajaiswal',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/ayushya_jaiswal',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://medium.com/@ayushya',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'mailto:ayushyajaiswal@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
