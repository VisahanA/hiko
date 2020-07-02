import styles from './AuthRoot.module.scss'

export function AuthRoot(props) {
  console.log(props);
  return (
    <>
      <div className={`${styles['testing-style']}`}>
        {props.children}
      </div>
    </>
  )
}
