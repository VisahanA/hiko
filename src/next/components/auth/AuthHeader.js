import styles from './AuthHeader.module.scss'

export function AuthHeader() {
  return (
    <>
      <div className={`${styles['auth-header']} ${styles['testing1']}`}>
        <div className={`${styles['header-right']}`}>
          <div className={`${styles['header-right-text']}`}>
               Do u have any account?
          </div>
          <div className={`${styles['header-right-button']} ${styles['testing1']}`}>
           <b>Sign Up</b>
          </div>
        </div>
      </div>
    </>
  )
}
