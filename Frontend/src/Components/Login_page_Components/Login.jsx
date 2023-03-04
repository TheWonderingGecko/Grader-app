import { useRef, useState, useEffect } from 'react';
import "./../../CSS/loginPage.css"
const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }




    useEffect(() => console.log("logging here"), [])

    return (
        <>
            <h2>lOGIN sCREEN TEST</h2>
            {success ? (
                <div className='centered-aligned-sections'>
                    <section>
                        <h1> Welcome! </h1>
                        <br />
                        <p>
                            <a href="#" > Go to Homepage </a>
                        </p>
                    </section>
                </div>

            ) : (
                <div className='centered-aligned-sections'>
                    <section>
                        <p ref={errRef} className={errMsg ? "errmsg" :
                            "offscreen"} aria-live="assertive" > {errMsg} </p>

                        <h1> Login In </h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username" > Username:</label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                            <label htmlFor="password" > Password:</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                            <button> Log In </button>
                        </form>


                    </section>
                </div>
            )}
        </>
    )
}
export default Login