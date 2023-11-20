'use client'
import Heading from '@/app/components/Heading'
import Input from '@/app/components/input/Input';
import Button from '../components/Button';
import { register } from 'module';
import {AiOutlineGoogle} from 'react-icons/ai'
import React, { useState } from 'react'
import { FieldValues,SubmitHandler,useForm  } from 'react-hook-form';
//import { FieldValues } from 'react-hook-form';
import Avater from '../components/Avater';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
const LoginForm = () => {
    const router = useRouter();
    const [isloading,setIsLoading] =useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            username: '',
            password:''
            
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        
    
                        router.push('/profile')
                        router.refresh()
                        toast.success("login success")                
       
    }
   // console.log(email,password);    

    return (
        <> 
            <Heading title='Sign in for hasab' />
           
            <hr className='bg-slate-300 w-full h-px' />
            
            <Input
                id="username"
                label="username"
                disabled={isloading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                disabled={isloading}
                register={register}
                errors={errors}
                required
                type='password'
            />
            <Button label={isloading ? "Loading" : "Login"}
            onClick={handleSubmit(onSubmit)}
            />
            <p className='text-sm '>Do not  have an account?
                <Link
                    className='underline'
                    href={'/register'}>
                        Sign up
                </Link>
            </p>
        </>
    );
}

export default LoginForm