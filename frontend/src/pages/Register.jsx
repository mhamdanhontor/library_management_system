import { useState } from "react"

import axios from "axios"

import Swal from "sweetalert2"

import { useNavigate } from "react-router-dom"

function Register() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({

        name: "",
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

    // REGISTER

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            await axios.post(

                "http://127.0.0.1:8000/api/register",

                formData

            )

            Swal.fire({

                title: "Success",

                text: "Registration Successful",

                icon: "success"

            })

            navigate("/login")

        } catch (error) {

            console.log(error)

            Swal.fire({

                title: "Error",

                text: "Registration Failed",

                icon: "error"

            })
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">

                <h1 className="text-3xl font-bold mb-8 text-center">

                    Register

                </h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-5">

                        <label className="block mb-2">

                            Name

                        </label>

                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                    </div>

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
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
                    >

                        Register

                    </button>

                </form>

<p className="text-center mt-5">

    Already have an account?

    <a
        href="/login"
        className="text-green-600 ml-2"
    >

        Login

    </a>

</p>


            </div>

        </div>
    )
}

export default Register