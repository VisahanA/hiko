import SignUpPage from '../next/pages/SignUpPage'
import userServices from '../services/user.service';

export default function ({ userCount }) {
  return(
    <div>
      {userCount}
      <SignUpPage/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const userCount = await userServices.getUserCount();
  console.log(userCount);
  return {
    props: {
      userCount
    }
  }
}
