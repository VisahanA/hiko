import SignUpPage from '../next/pages/SignUpPage'
import FullHeightPage from "../next/components/FullHeightPage";

export default function () {
  return <div>
    <FullHeightPage>
      <SignUpPage/>
    </FullHeightPage>
  </div>
}

export async function getServerSideProps(context) {
  // context.res.statusCode = 302
  // context.res.setHeader('Location', `/`)
  return {
    props: {} // will be passed to the page component as props
  }
}
