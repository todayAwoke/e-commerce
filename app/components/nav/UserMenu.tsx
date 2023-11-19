'use client'
import { Avatar } from '@mui/material'
import Link from 'next/link'
import React, { useCallback,useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import MenuItem from './MenuItem'
import { signOut } from 'next-auth/react'
import BackDrop from './BackDrop'

const UserMenu = () => {
    const [isOpen,setIsOpen] =useState(false)
    const toggoleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    },[])
  return (
      <>
          <div className='relative z-3 '>
              <div onClick={toggoleOpen} className='p-2 border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700 ' >
                <Avatar/>
              <AiFillCaretDown/>
              </div> 
              {isOpen && (
                  <div className='absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer'>
                      <div> 
                          <Link href="/orders">
                          <MenuItem onClick={()=>{toggoleOpen}}>Your Orders</MenuItem>
                          </Link>
                          <Link href="/admin">
                          <MenuItem onClick={()=>{toggoleOpen}}>Admin Dashboard</MenuItem>
                          </Link>
                          <MenuItem onClick={() => {
                              toggoleOpen();
                              signOut();
                          }}>Logout</MenuItem>
                      </div>  
                      <div>
                          <Link href="/login">
                          <MenuItem onClick={()=>{toggoleOpen}}>Login</MenuItem>
                          </Link>
                          <Link href="/register">
                          <MenuItem onClick={()=>{toggoleOpen}}>Register</MenuItem>
                          </Link>
                      </div>
                  </div>
              )}
          </div>
          {isOpen? <BackDrop onClick={toggoleOpen}/>:null}
      </>
  )
}

export default UserMenu