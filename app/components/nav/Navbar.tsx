import Link from 'next/link'
import Container from '../Container'
import { Redressed } from 'next/font/google'
import CartCount from './CartCount'
import LoginForm from '@/app/login/LoginForm'
import UserMenu from './UserMenu'
const redressed =Redressed({subsets:['latin'],weight:["400"]})
const Navbar = () => {
    return (
        <div className=' sticky
        top-0
        w-full
      bg-slate-700 text-slate-200
        z-30
        shadow-sm' >
            <div className='py-2 border-b-[1px]'>
                {/* <Container> */}
                    <div className='flex items-center justify-between gap-3 md:gap-0'>
                        <Link href={'/'} className={`${redressed.className} font-bold text-2xl`}>Hasab</Link>
                        <div className=' justify-end flex flex-row items-center 
                             gap-8
                            md:gap-12'>
                           <Link href={'/'} >Home</Link>
                            <Link href={'/'} >About</Link>
                            <Link href={'/'} >Contact</Link>
                            <Link href={'./register'}>Signup</Link>
                            <Link href={'./login'}>login</Link>
                          
                            <div>
                                <UserMenu/>
                            </div>
                        </div>
                        </div> 
               {/* </Container> */}
            </div>
        </div>
    )
}

export default Navbar
