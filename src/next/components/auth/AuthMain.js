import styles from './AuthMain.module.scss'

export function AuthMain() {
  return (
    <>
      <div className={`${styles['auth-main']}`}>
        <div className={`${styles['main-container']}`}>
          <div className={`${styles['main-form']}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="name" ref={register} />
              <input name="email" ref={register({ required: true })} />
              {errors.email && 'Email is required.'}
              <input name="password" ref={register({ required: true })} />
              {errors.password && 'Password is required'}
              <input type="submit" name="sigin"/>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
