import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'
import './../../CSS/loginPage.css'
const Login_content = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const { login, success, error } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(user, pwd)
  }

  return (
    <>
      <h2>lOGIN sCREEN TEST</h2>
      {success ? (
        <div className="centered-aligned-sections">
          <section>
            <h1> Welcome! </h1>
            <br />
            <p>
              <Link to="/">
                <strong>Return to Homepage</strong>
              </Link>
            </p>

            <p>
              <Link to="/app_form">
                <strong>Go to application page</strong>
              </Link>
            </p>
          </section>
        </div>
      ) : (
        <div className="centered-aligned-sections">
          <section>
            <p
              ref={errRef}
              className={errMsg ? 'errmsg' : 'offscreen'}
              aria-live="assertive"
            >
              {' '}
              {errMsg}{' '}
            </p>

            <h1> Login In </h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username"> Username:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <label htmlFor="password"> Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button> Log In </button>
              {error && <div className="error">{error}</div>}
            </form>
          </section>
        </div>
      )}
    </>
  )
}
export default Login_content
