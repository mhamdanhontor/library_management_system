import { useState } from "react"

import axios from "axios"

import Swal from "sweetalert2"

import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({

        email: "",
        password: ""

    })

    // HANDLE INPUT

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        })
    }

    // LOGIN

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const response = await axios.post(

                "http://127.0.0.1:8000/api/login",

                formData

            )

            // SAVE USER

            localStorage.setItem(

                "user",

                JSON.stringify(response.data.user)

            )

            Swal.fire({

                title: "Success",

                text: "Login Successful",

                icon: "success"

            })

            navigate("/")

        } catch (error) {

            console.log(error)

            Swal.fire({

                title: "Error",

                text: "Invalid Credentials",

                icon: "error"

            })
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">

                <h1 className="text-3xl font-bold mb-8 text-center">

                    Login

                </h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-5">

                        <label className="block mb-2">

                            Email

                        </label>

                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                    </div>

                    <div className="mb-5">

                        <label className="block mb-2">

                            Password

                        </label>

                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                    >

                        Login

                    </button>

                </form>

<p className="text-center mt-5">

    Don't have an account?

    <a
        href="/register"
        className="text-blue-600 ml-2"
    >

        Register

    </a>

</p>


            </div>

        </div>
    )
}

export default Login