import authService from "../services/auth.service";

export default function () {
  return(
    <div>
      Loading...
    </div>
  )
}

export async function getServerSideProps(context) {

  const token = context.req.universalCookies.get('token');
  const user = await authService.getDataToken(token);
  if (user) {
    context.res.writeHead(302, { Location: '/home' });
    context.res.end();
  } else {
    context.res.writeHead(302, { Location: '/auth' });
    context.res.end();
  }
  return { props: {} };
}
