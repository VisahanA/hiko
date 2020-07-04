import styles from './AuthHeader.module.scss'

export function AuthHeader() {
  //
  // onSubmit = () => {
  //   if(userFound){
  //     this.props.history.push('/posts/');
  //   }
  // }
  return (
    <>
      <div className={`${styles['auth-header']} ${styles['testing1']}`}>
        <div className={`${styles['header-right']}`}>
          <div className={`${styles['header-right-text']}`}>
               Don't have an account?
          </div>
          <div className={`${styles['header-right-button']} ${styles['testing1']}`} >
           <a href="/SignUp">  <b>Sign Up</b> </a>
          </div>
        </div>
      </div>
    </>
  )
}
