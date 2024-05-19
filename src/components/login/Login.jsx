import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import '../login/login.css'

export default function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSub = (event) => {
        event.preventDefault()
        alert("enviando os dados" +" "+ userName + " " + password)
    }

    return (
        <div className='container'>
            <form onSubmit={handleSub}>
                <h1>Acesse o sistema</h1>
                <div className='div'>
                    <input className='first' 
                    onChange={(e) => setUserName(e.target.value)}
                    type="E-mail"
                    placeholder='E-mail'
                    required
                    />
                    {/* < FaUser className='icon'/> */}
                </div>

                <div>
                    <input  className='second'
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder='Senha'
                    required
                    />
                    {/* < FaUser className='icon' /> */}
                </div>

                <div className='recall-forget'>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Lembrar de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button>Login</button>

                <div className="signup-link">
                    <p>Não tem uma senha? </p>
                    <a href="#">Registrar</a>
                </div>
            </form>
        </div>
    )
}
