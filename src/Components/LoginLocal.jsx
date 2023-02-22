import React, { useRef } from "react";

function LoginLocal() {



    const email = useRef()
    const password = useRef()
    const handleSubmit = () => {

        if (email.current.value == "abc@gmail.com" && password.current.value == "12345") {
            localStorage.setItem("emailData", "abc@gmail.com")
            localStorage.setItem("passwordData", "12345")

        }

        return (
            <div className='login'>
                <form onSubmit={handleSubmit}>
                    <div className='loginScreen'>
                        <input type="text" ref={email} />
                        <input type="text" ref={password} />

                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>

        );
    }
}


export default LoginLocal