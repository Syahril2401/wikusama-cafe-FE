import { error } from "jquery"
import React, { useState } from "react"
import axios from "axios"
import { Modal } from 'bootstrap'


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = event => {
        event.preventDefault()
        let payload = { username, password }

        let url = `http://localhost:7000/auth`

        axios.post(url, payload)
            .then(response => {
                if (response.data.status == true) {
                    /**login success */
                    /**grab token  */
                    let token = response.data.token
                    /**grab data user */
                    let user = response.data.data

                    /**store to local storage */
                    localStorage.setItem('token', token)
                    localStorage.setItem('user', JSON.stringify(user))

                    window.alert(`Login Berhasil`)
                    window.location.href = "/transaksi/chart"
                } else {
                    /**wrong username/password */
                    window.alert(`Username or password maybe wrong`)
                }
            })
            .catch(error => {
                window.alert(error)
            })
    }
    return (



        <div style={{backgroundImage:"url(/bg-cafe-wikusama.jpg)", backgroundRepeat: false, backgroundSize:'cover', }}
         className="vw-100 vh-100 d-flex justify-content-center align-items-center ">

            <div className="col-md-4 p-3 border rounded-2 ">
                <h2 className="text-center text-success">
                    WIKUSAMA
                    <span className="text-danger">
                        CAFE
                    </span>
                </h2>
                <form className="mt-4" onSubmit={handleLogin}>
                    <input type="username"
                        className="form-control mb-2"
                        required={true}
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />

                    <input type="password"
                        className="form-control mb-2"
                        required={true}
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit"
                        className="btn btn-success w-100 mb-2">
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login