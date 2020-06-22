import axios from 'axios';
import Router from "next/router";
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { AuthHeader } from "../components/auth/AuthHeader";

export default function () {

  const [, setCookie] = useCookies();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    axios.post('/api/v1/auth/sign_up', {name: data.name, username: data.email, password: data.password})
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
      <AuthHeader/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" ref={register} />
        <input name="email" ref={register({ required: true })} />
        {errors.email && 'Email is required.'}
        <input name="password" ref={register({ required: true })} />
        {errors.password && 'Password is required'}
        <input type="submit" />
      </form>
    </div>
  )
}
