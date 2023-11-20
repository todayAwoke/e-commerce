import React from 'react'
import Container from '../Container'
import FooterList from './FooterList'
import Link from 'next/link'
import { MdFacebook } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className='bg-slate-700 text-slate-200 text-sm '>
            {/* <Container> */}
                <div className='flex flex-col md:flex-row justify-between pt-16 pb-8 '>
                    
                    <FooterList>
                        <h3 className='text-base font-bold mb-2  '>customer service</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Rule and Policy</Link>
                        <Link href="#">FAQs</Link>
                    </FooterList>
                    <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                        <h3 className='text-base font-bold mb-2  '>About Us</h3>
                        <p className='mb-2'> Our hasab provide anoymomity and ...  </p>
                       <p className='justify-center mt-20'>&copy;{new Date().getFullYear()} Hasab </p>
                    </div>
                    <FooterList>
                        <h3 className='text-base font-bold'>Follow Us</h3>
                        <div className='flex gap-2'>
                            <Link href="#"><MdFacebook size={24} /> </Link>
                            <Link href="#">< FaLinkedin size={24} /></Link>
                            <Link href="#">< FaTelegram size={24} /></Link>
                        </div>
                </FooterList>
                
            </div>
         
                 
            {/* </Container> */}
        </footer>
    )
}

export default Footer
