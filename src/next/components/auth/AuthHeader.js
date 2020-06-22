import styles from './AuthHeader.module.scss'

export function AuthHeader() {
  return (
    <>
      <div className={`${styles['auth-header']}`}>
        <div className={`${styles['header-right']}`}/>
      </div>
    </>
  )
}
