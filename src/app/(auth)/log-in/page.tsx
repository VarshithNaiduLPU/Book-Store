"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TLogInSchema, logInSchema, LogInServerResponse, CookieData } from "@/lib/types"
import { useRouter } from 'next/navigation'
import { login } from "@/lib/jwt"
import LeftAuth from '@/components/LeftAuth/page'
import React from 'react'

const loginPage = () => {
  const {
    register,
    handleSubmit,
    formState : { errors, isSubmitting },
    reset,
    setError
  } = useForm<TLogInSchema>({
    resolver : zodResolver(logInSchema)
  });

  const router = useRouter();

  const onSubmit = async (data : TLogInSchema) => {
    const response = await fetch("/api/user/login", {
      method : "POST",
      body : JSON.stringify({
        username : data.username,
        password : data.password,
      }),
      headers : {
        "Content-Type" : "application/json"
      }
    })

    const responseData : LogInServerResponse = await response.json();
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
      else if(errors.password){
        setError("password", {
          type : "server",
          message : errors.password
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
      <LeftAuth name="Log in" salutation="WELCOME BACK"/>
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
              <button
                disabled = {isSubmitting}
                type="submit">
                  Log In
                </button>
            </form>




          </div>
          <div className="form-bottom">
            <hr />
            <div className="bottom-data">
              <span>DON'T HAVE AN ACCOUNT</span>
              <span className='link'><a href="sign-up">Sign up</a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default loginPage