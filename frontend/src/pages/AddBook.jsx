import { useEffect, useState } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"

function AddBook() {

    const navigate = useNavigate()

    const [categories, setCategories] = useState([])

    const [formData, setFormData] = useState({

        title: "",
        author: "",
        isbn: "",
        quantity: "",
        category_id: ""

    })

    // FETCH CATEGORIES

    useEffect(() => {

        fetchCategories()

    }, [])

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

    // SUBMIT FORM

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            await axios.post(
                "http://127.0.0.1:8000/api/books",
                formData
            )

            alert("Book Added Successfully")

            navigate("/books")

        } catch (error) {

            console.log(error)

            alert("Error Adding Book")
        }
    }

    return (

        <div className="max-w-3xl mx-auto">

            <div className="bg-white p-8 rounded-2xl shadow">

                <h1 className="text-3xl font-bold mb-8">

                    Add New Book

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

                        Add Book

                    </button>

                </form>

            </div>

        </div>
    )
}

export default AddBook