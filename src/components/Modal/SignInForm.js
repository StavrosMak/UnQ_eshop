

export default function SignInForm(props) {

    const {changeAuthMode, handleLogin } = props;
    return(
    <>
        <div className='changeAuthFormBtn'>
            <p>Not registered yet?</p>
            <button onClick={changeAuthMode}>Sign Up</button>
        </div>
        <form autoComplete="off" onSubmit={handleLogin}>
            <label>
                <p>Name:</p>
                <input type="text" name="name" placeholder='username' />
            </label>
            <label>
               <p>Password:</p>
                <input type="password" placeholder="password" required />
            </label>

            <button className="submitBtn" type="submit">Sign In</button>
        </form>
    </>
    
    )
}