import { useEffect, useState } from "react"

import axios from "axios"

import Swal from "sweetalert2"

function IssueBook() {

    const [books, setBooks] = useState([])

    const [formData, setFormData] = useState({

        student_name: "",
        email: "",
        book_id: "",
        issue_date: ""

    })

    useEffect(() => {

        fetchBooks()

    }, [])

    const fetchBooks = async () => {

        try {

            const response = await axios.get(

                "http://127.0.0.1:8000/api/books"

            )

            setBooks(response.data)

        } catch (error) {

            console.log(error)

        }
    }

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            await axios.post(

                "http://127.0.0.1:8000/api/issued-books",

                formData

            )

            Swal.fire({

                title: "Success",

                text: "Book Issued Successfully",

                icon: "success"

            })

        } catch (error) {

            console.log(error)

        }
    }

    return (

        <div className="max-w-3xl mx-auto">

            <div className="bg-white p-8 rounded-2xl shadow">

                <h1 className="text-3xl font-bold mb-8">

                    Issue Book

                </h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-5">

                        <label className="block mb-2">

                            Student Name

                        </label>

                        <input
                            type="text"
                            name="student_name"
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

                            Select Book

                        </label>

                        <select
                            name="book_id"
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        >

                            <option value="">

                                Select Book

                            </option>

                            {
                                books.map((book) => (

                                    <option
                                        key={book.id}
                                        value={book.id}
                                    >

                                        {book.title}

                                    </option>

                                ))
                            }

                        </select>

                    </div>

                    <div className="mb-5">

                        <label className="block mb-2">

                            Issue Date

                        </label>

                        <input
                            type="date"
                            name="issue_date"
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
                    >

                        Issue Book

                    </button>

                </form>

            </div>

        </div>
    )
}

export default IssueBook