'use client'
import Heading from '@/app/components/Heading'
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';

import React, { useState } from 'react'
import { FieldValues,SubmitHandler,useForm  } from 'react-hook-form';
//import { FieldValues } from 'react-hook-form';

import Link from 'next/link';
import Router from 'next/navigation';
const LoginForm = () => {
    //const router = new Router();
    const [isloading,setIsLoading] =useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            username: '',
            password:''
            
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        // if (username === "awoke" && password === 1212) {
        //    router.push('./profile')
        // }
    }
        

    return (
        <> 
            <Heading title='Sign in for hasab' />
           
            <hr className='bg-slate-300 w-full h-px' />
            
            <Input
                id="username"
                label="Username"
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