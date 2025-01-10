import { FaFacebook,FaInstagram,FaTwitter,FaPinterest } from "react-icons/fa";


export const navbarLinks = [
    {
        id: 1,
        title: 'Inicio',
        href: '/'
    },
    {
        id: 2,
        title: 'Zapatos',
        href: '/zapatos'
    },
    {
        id: 3,
        title: 'Nosotros',
        href: '/nosotros'
    }
]
    export const socialLinks = [
        {
            id: 1,
            href: 'https://www.facebook.com',
            icon: <FaFacebook size={20}/>
        },
        {
            id: 2,
            href: 'https://www.instagram.com',
            icon: <FaInstagram size={20}/>
        },
        {
            id: 3,
            href: 'https://www.twitter.com',
            icon: <FaTwitter size={20}/>
        },
        {
            id: 4,
            href: 'https://www.pinterest.com',
            icon: <FaPinterest size={20}/>
        }
]