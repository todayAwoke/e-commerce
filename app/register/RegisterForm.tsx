'use client'
import Heading from '@/app/components/Heading'
import Input from '@/app/components/input/Input';
import Button from '../components/Button'
import { register } from 'module';
import React, { useState } from 'react'
import { FieldValues,SubmitHandler,useForm  } from 'react-hook-form';
//import { FieldValues } from 'react-hook-form';
import Avater from '../components/Avater';
import Link from 'next/link';
const RegisterForm = () => {
    const [isloading,setIsLoading] =useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name:'',
            email: '',
            password:''
            
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
    }
        

    return (
        <> 
            <Heading title='Sign up for E-commerce' />
            <hr className='bg-slate-300 w-full h-px'/>
            <Input
                id="name"
                label="Name"
                disabled={isloading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="email"
                label="Email"
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
            <Button lable={isloading ? "Loading" : "Sign up"}
            onClick={handleSubmit(onSubmit)}
            />
            <p>Already have an account?Avater
                <Link
                    className='underline'
                    href={'/login'}>
                    Login
                </Link>
            </p>
        </>
    );
}

export default RegisterForm