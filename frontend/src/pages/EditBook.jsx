import { useEffect, useState } from "react"

import axios from "axios"

import { useNavigate, useParams } from "react-router-dom"

import Swal from "sweetalert2"

function EditBook() {

    const { id } = useParams()

    const navigate = useNavigate()

    const [categories, setCategories] = useState([])

    const [formData, setFormData] = useState({

        title: "",
        author: "",
        isbn: "",
        quantity: "",
        category_id: ""

    })

    // FETCH BOOK DATA

    useEffect(() => {

        fetchBook()

        fetchCategories()

    }, [])

    // FETCH SINGLE BOOK

    const fetchBook = async () => {

        try {

            const response = await axios.get(

                `http://127.0.0.1:8000/api/books/${id}`

            )

            setFormData(response.data)

        } catch (error) {

            console.log(error)

        }
    }

    // FETCH CATEGORIES

    const fetchCategories = async () => {

        try {

            const response = await axios.get(

                "http://127.0.0.1:8000/api/categories"

            )

            setCategories(response.data)

        } catch (error) {

            console.log(error)

        }
    }

    // HANDLE INPUT

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        })
    }

    // UPDATE BOOK

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            await axios.put(

                `http://127.0.0.1:8000/api/books/${id}`,

                formData

            )

            Swal.fire({

                title: "Success",

                text: "Book Updated Successfully",

                icon: "success"

            })

            navigate("/books")

        } catch (error) {

            console.log(error)

            Swal.fire({

                title: "Error",

                text: "Failed To Update Book",

                icon: "error"

            })
        }
    }

    return (

        <div className="max-w-3xl mx-auto">

            <div className="bg-white p-8 rounded-2xl shadow">

                <h1 className="text-3xl font-bold mb-8">

                    Edit Book

                </h1>

                <form onSubmit={handleSubmit}>

                    {/* TITLE */}

                    <div className="mb-5">

                        <label className="block mb-2 font-semibold">

                            Book Title

                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                    </div>

                    {/* AUTHOR */}

                    <div className="mb-5">

                        <label className="block mb-2 font-semibold">

                            Author Name

                        </label>

                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                    </div>

                    {/* ISBN */}

                    <div className="mb-5">

                        <label className="block mb-2 font-semibold">

                            ISBN

                        </label>

                        <input
                            type="text"
                            name="isbn"
                            value={formData.isbn}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                    </div>

                    {/* QUANTITY */}

                    <div className="mb-5">

                        <label className="block mb-2 font-semibold">

                            Quantity

                        </label>

                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                    </div>

                    {/* CATEGORY */}

                    <div className="mb-5">

                        <label className="block mb-2 font-semibold">

                            Category

                        </label>

                        <select
                            name="category_id"
                            value={formData.category_id}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        >

                            <option value="">

                                Select Category

                            </option>

                            {
                                categories.map((category) => (

                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >

                                        {category.name}

                                    </option>

                                ))
                            }

                        </select>

                    </div>

                    {/* BUTTON */}

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                    >

                        Update Book

                    </button>

                </form>

            </div>

        </div>
    )
}

export default EditBook