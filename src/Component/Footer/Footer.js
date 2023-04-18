import React from 'react'

import { RxInstagramLogo } from 'react-icons/rx'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'

export default function Footer() {
    return (
        <footer className="w-100 bg-secondary p-4">
            <div className="container"></div>
            <div className="Footer__body">
            <h5 class= "contact" >Follow us</h5>
                <a href="https//:instagram.com" target='_blank'>
                    <RxInstagramLogo />
                </a>
                <a href="https//:telegram.com" target='_blank'>
                    <FaTelegramPlane />
                </a>
                <a href="https//:Whatsapp.com" target='_blank'>
                    <BsWhatsapp />
                </a>
                <a href="https//:facebook.com" target='_blank'>
                    <ImFacebook />
                </a>
            </div>
        </footer>
    )
}
