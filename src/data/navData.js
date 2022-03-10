import React from 'react'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'random',
    ref: '#random'
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    ref: '#about'
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    ref: '#projects'
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
    ref: '#contact'
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
    ref: '#profile'
  },

]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
]