import { MapPinIcon } from '@heroicons/react/24/outline';

export const footer = {
  company: {
    logo: 'FL Real Estate',
    tagline: 'We Deliver Your Dream Home',
  },
  properties: {
    title: 'Properties',
    links: [
      {
        label: 'All Properties',
        link: '/properties',
      },
      {
        label: 'Condominium',
        link: '/property-category/condominium',
      },
      {
        label: 'House and Lot',
        link: '/property-category/house-and-lot',
      },
      {
        label: 'Residential Office',
        link: '/property-category/residential-office',
      },
      {
        label: 'Prime Locations',
        link: '/property-location',
      },
    ],
  },
  contacts: {
    title: 'Company',
    links: [
      {
        label: 'About Us',
        link: '/about-us',
      },
      {
        label: 'Contact Us',
        link: '/contact-us',
      },
    ],
  },
  socials: {
    title: 'Follow us',
    links: [
      {
        link: '/1',
        icon: MapPinIcon,
      },
      {
        link: '/2',
        icon: MapPinIcon,
      },
      {
        link: '/3',
        icon: MapPinIcon,
      },
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    text: 'To promote SMDC Projects and increase Sales and Marketing of SMDC Condominiums, all information stated are intended to give a general overview of the project only and does not constitute any part of an offer or contract. www.smdc.com is the official website of SMDC.',
  },
  copyRight: {
    company: '',
    webDeveloper: '',
  },
};
