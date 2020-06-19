import authService from "../services/auth.service";

export default function ({ username }) {
  return(
    <div>
      This is the home page. Logged in as {username}
    </div>
  )
}

export async function getServerSideProps(context) {
  const token = context.req.universalCookies.get('token');
  const user = await authService.getDataToken(token);
  let username = null;
  if (user) {
    username = user.username;
  } else {
    context.res.writeHead(302, { Location: '/' });
    context.res.end();
  }

  return {
    props: {
      username
    }
  }
}
