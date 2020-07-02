import axios from 'axios';
import Router from 'next/router'
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { AuthHeader } from "../components/auth/AuthHeader";
import { AuthMain } from "../components/auth/AuthMain";
import styles from "../components/auth/AuthMain.module.scss";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {AuthRoot} from "../components/auth/Authroot";

export default function () {

  const [, setCookie] = useCookies();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    axios.post('/api/v1/auth/login', {username: data.email, password: data.password})
      .then((response) => {
        if (response.data.success) {
          setCookie('token', response.data.token);
          Router.push('/home').then();
        } else {
          console.log(response.data.error);
          alert(response.data.error);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return(
    <div>
      <AuthRoot>
        <AuthHeader/>
        <div className={`${styles['auth-main']}`}>
          <div className={`${styles['main-container']}`}>
            <div className={`${styles['main-form']}`}>
              <div className={`${styles['main-form-title']}`}>
                Welcome Back !
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`${styles['main-form-row']}`}>
                  <div className={`${styles['main-form-row-label']}`}>Email </div>
                  <div className={`${styles['main-form-icon']}`}>
                    {/*<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">*/}
                    {/*  /!*<path fill-rule="evenodd" clip-rule="evenodd" d="M10.121.878a3 3 0 00-4.242 0L.877 4.88A2.989 2.989 0 000 7v7a2 2 0 002 2h12a2 2 0 002-2V7a2.99 2.99 0 00-.879-2.122l-5-4zm3.042 4.986L8 8.844l-5.164-2.98 4.457-3.565a1 1 0 011.414 0l4.456 3.565zm.838 1.825l-5.49 3.17a.993.993 0 01-1.012.007L2 7.69V14h12V7.69z" fill="#B9BEC7"></path>*!/*/}
                    {/*</svg>*/}
                  </div>
                  <input name="email"  type="text" placeholder="Enter your email" ref={register({ required: true })} />
                  {errors.email && 'Email is required.'}
                </div>
                <div className={`${styles['main-form-row']}`}>
                  <div className={`${styles['main-form-row-label']}`}>Password </div>
                  <div className={`${styles['main-form-icon']}`}>
                    {/*<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">*/}
                    {/*  /!*<path fill-rule="evenodd" clip-rule="evenodd" d="M10.121.878a3 3 0 00-4.242 0L.877 4.88A2.989 2.989 0 000 7v7a2 2 0 002 2h12a2 2 0 002-2V7a2.99 2.99 0 00-.879-2.122l-5-4zm3.042 4.986L8 8.844l-5.164-2.98 4.457-3.565a1 1 0 011.414 0l4.456 3.565zm.838 1.825l-5.49 3.17a.993.993 0 01-1.012.007L2 7.69V14h12V7.69z" fill="#B9BEC7"></path>*!/*/}
                    {/*</svg>*/}
                  </div>
                  <input name="password" type="password" placeholder="Enter your password" ref={register({ required: true })} />
                  {errors.password && 'Password is required'}
                  <br/>
                </div>
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </AuthRoot>
    </div>
  )
}

