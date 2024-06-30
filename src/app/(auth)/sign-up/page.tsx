"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TSignUpSchema, signUpSchema, SignUpServerResponse, CookieData } from "@/lib/types"
import { useRouter } from 'next/navigation'
import { login } from "@/lib/jwt"
import LeftAuth from '@/components/LeftAuth/page'
import React from 'react'

const signup = () => {
  const {
    register,
    handleSubmit,
    formState : { errors, isSubmitting },
    reset,
    setError
  } = useForm<TSignUpSchema>({
    resolver : zodResolver(signUpSchema)
  });

  const router = useRouter();

  const onSubmit = async (data : TSignUpSchema) => {
    const response = await fetch("/api/user/signup", {
      method : "POST",
      body : JSON.stringify({
        username : data.username,
        email : data.email,
        password : data.password,
        cpassword : data.cpassword
      }),
      headers : {
        "Content-Type" : "application/json"
      }
    })

    const responseData : SignUpServerResponse = await response.json();
    if(!response.ok){
      return;
    }

    if(responseData.errors){
      const errors = responseData.errors;
      if(errors.username){
        setError("username", {
          type : "server",
          message : errors.username
        })
      }
      else if(errors.email){
        setError("email", {
          type : "server",
          message : errors.email
        })
      }
      else if(errors.password){
        setError("password", {
          type : "server",
          message : errors.password
        })
      }
      else if(errors.cpassword){
        setError("cpassword", {
          type : "server",
          message : errors.cpassword
        })
      }
      return;
    }

    if(responseData.userData){
      const { username } = responseData.userData.user;
      const cookieData : CookieData = {
        username : username
      }
      login(cookieData);
    }

    reset();
    router.push("/store");
  }

  return (
    <>
      <LeftAuth name="Sign up" salutation="WELCOME"/>
      <div className="right">
        <div className='form'>
          <div className="form-top">
            <div className="form-head">
              <span>YOUR ACCOUNT</span>
              <span className='logo'>FOLIO</span>
            </div>




            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="username">
                USERNAME
                <input
                  {
                    ...register("username")
                  }
                  disabled = {isSubmitting}
                  id='username'
                  type="text"
                />
                {errors.username && (
                  <span className="error">{`${errors.username.message}`}</span>
                )}
              </label>
              <label htmlFor="email">
                EMAIL
                <input
                  {
                    ...register("email")
                  }
                  disabled = {isSubmitting}
                  id='email'
                  type="text"
                />
                {errors.email && (
                  <span className="error">{`${errors.email.message}`}</span>
                )}
              </label>
              <label htmlFor="password">
                PASSWORD
                <input
                  {
                    ...register("password")
                  }
                  disabled = {isSubmitting}
                  id='password'
                  type="password"
                />
                {errors.password && (
                  <span className="error">{`${errors.password.message}`}</span>
                )}
              </label>
              <label htmlFor="cpassword">
                CONFIRM PASSWORD
                <input
                  {
                    ...register("cpassword")
                  }
                  disabled = {isSubmitting}
                  id='cpassword'
                  type="password"
                />
                {errors.cpassword && (
                  <span className="error">{`${errors.cpassword.message}`}</span>
                )}
              </label>
              <button
                disabled = {isSubmitting}
                type="submit">
                  Sign Up
                </button>
            </form>








            
          </div>
          <div className="form-bottom">
            <hr />
            <div className="bottom-data">
              <span>HAVE AN ACCOUNT</span>
              <span className='link'><a href="log-in">Log in</a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default signup