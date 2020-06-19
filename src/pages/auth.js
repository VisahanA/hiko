import SignUpPage from '../next/pages/SignUpPage'
import authService from '../services/auth.service';
import LoginPage from "../next/pages/LoginPage";

export default function ({ forceSignUp }) {

  return(
    <div>
      {forceSignUp ? <SignUpPage/> : <LoginPage/>}
    </div>
  )
}

export async function getServerSideProps(context) {
  const userCount = await authService.getUserCount();
  return {
    props: {
      forceSignUp: userCount === 0
    }
  }
}
