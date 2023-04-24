import { useRef, useState, useEffect } from 'react'
import logo from '../../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'

import { useLogin } from '../../hooks/useLogin'

const Login_content = () => {
  const userRef = useRef()
  const errRef = useRef()
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const { login, success, error, user_value } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(user, pwd)
  }

  useEffect(() => {
    if (success) {
      if (user_value.position === 'Student') {
        navigate('/app_form')
      } else if (user_value.position === 'Admin') {
        navigate('/admin')
      }
    }
  }, [success, navigate])

  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className="w-5/6 p-8 pt-0 rounded-md bg-umkc_light_blue text-umkc_yellow lg:w-1/2 lg:shadow-xl mt-[5vh]">
        <div className="items-center justify-center p-4 md:flex">
          <img src={logo} className="" />
        </div>

        <section className="flex flex-col gap-3">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 text-left"
          >
            <label
              htmlFor="username"
              className="text-2xl font-bold tracking-wider "
            >
              {' '}
              Username:
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              className={
                'p-2 text-lg font-semibold text-black bg-white border-2 rounded-md shadow-md border-umkc_dark_blue focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ' +
                (error && error.includes('email') ? 'border-red-500' : '')
              }
              required
            />
            <label
              htmlFor="password"
              className="text-2xl font-bold tracking-wider "
            >
              {' '}
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              className={
                'p-2 text-lg font-semibold text-black bg-white border-2 rounded-md shadow-md border-umkc_dark_blue focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ' +
                (error && error.includes('password') ? 'border-red-500' : '')
              }
              required
            />
            <button className="p-2 font-bold rounded-lg shadow-md bg-umkc_yellow text-umkc_light_blue">
              Log In
            </button>
            {error && (
              <div className="p-2 font-bold bg-red-100 border rounded-md error text-error border-error">
                {error}
              </div>
            )}
          </form>
        </section>
      </div>
    </div>
  )
}
export default Login_content
