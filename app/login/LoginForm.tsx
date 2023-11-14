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
const LoginForm = () => {
    const [isloading,setIsLoading] =useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password:''
            
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
    }
        

    return (
        <> 
            <Heading title='Sign in for E-commerce' />
            <Button
                
                outline
                label='Countinue with Google'
                icon={AiOutlineGoogle}
                onClick={()=>{}}
            />
            <hr className='bg-slate-300 w-full h-px' />
            
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