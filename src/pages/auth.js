import SignUpPage from '../next/pages/SignUpPage'

export default function () {
  return(
    <div>
      <SignUpPage/>
    </div>
  )
}

export async function getServerSideProps(context) {
  // context.res.statusCode = 302
  // context.res.setHeader('Location', `/`)
  return {
    props: {} // will be passed to the page component as props
  }
}
