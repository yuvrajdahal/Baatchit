import { Link } from "react-router-dom"
import Button from "../components/Button"
import { useState } from "react"

function ForgotPassword() {
    const [forgetInput, setForgetInput] =   useState("");
    return (
        <div className="bg-dark h-dvh flex justify-center items-center ">
                <form className="flex flex-col  w-full max-w-lg border-2 border-light px-8 py-10 gap-5 backdrop-blur-md" action="">
                    <p className="font-bold text-xl text-center text-light">Trouble loggin in?</p>
                    <span className="text-light text-center">Enter your email, phone, or username and well send you a link to get back into your account.</span>
                    <input value={forgetInput} onChange={e => setForgetInput(e.target.value)} className="block w-full p-3 rounded-lg" type="text" placeholder="Phone, number, username or email" />
                    <Button disabled={forgetInput.length === 0} variant="btn">{forgetInput ? "Send Login Link": "Please Input Your Username"}</Button>

                    <span className="text-light text-center">or</span>
                    <span className="text-xl text-light text-center">Dont have an Account? <Link className="text-accent text-xl inline" to="/signup">Sign up</Link></span>
                </form>
        </div>
    )
}

export default ForgotPassword
