import { useEffect, useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
function Books() {

    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("")

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
    const filteredBooks = books.filter((book) =>

    book.title.toLowerCase().includes(

        search.toLowerCase()

    ) ||

    book.author.toLowerCase().includes(

        search.toLowerCase()

    )
)

    const deleteBook = async (id) => {

    const result = await Swal.fire({

        title: "Are you sure?",

        text: "This book will be deleted permanently!",

        icon: "warning",

        showCancelButton: true,

        confirmButtonColor: "#2563EB",

        cancelButtonColor: "#EF4444",

        confirmButtonText: "Yes, Delete It"

    })

    if (result.isConfirmed) {

        try {

            await axios.delete(

                `http://127.0.0.1:8000/api/books/${id}`

            )

            Swal.fire({

                title: "Deleted!",

                text: "Book deleted successfully",

                icon: "success"

            })

            fetchBooks()

        } catch (error) {

            console.log(error)

            Swal.fire({

                title: "Error",

                text: "Failed to delete book",

                icon: "error"

            })
        }
    }
}

    return (

    <div>

        <h1 className="text-3xl font-bold mb-5">

            Books List

        </h1>
        <div className="mb-5">

    <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 border p-3 rounded-lg shadow-sm"
    />

</div>

        <div className="bg-white p-5 rounded-xl shadow">

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left p-3">ID</th>
                        <th className="text-left p-3">Title</th>
                        <th className="text-left p-3">Author</th>
                        <th className="text-left p-3">ISBN</th>
                        <th className="text-left p-3">Quantity</th>
                        <th className="text-left p-3">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {
                     filteredBooks.map((book) => (

                            <tr
                                key={book.id}
                                className="border-b hover:bg-gray-100"
                            >

                                <td className="p-3">{book.id}</td>

                                <td className="p-3">{book.title}</td>

                                <td className="p-3">{book.author}</td>

                                <td className="p-3">{book.isbn}</td>

                                <td className="p-3">{book.quantity}</td>
<td className="p-3 flex gap-2">

    <a
        href={`/edit-book/${book.id}`}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
    >

        Edit

    </a>

    <button
        onClick={() => deleteBook(book.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
    >

        Delete

    </button>

</td>

                            </tr>

                        )
                    )
                    }

                </tbody>

            </table>

        </div>

    </div>
)
}

export default Books