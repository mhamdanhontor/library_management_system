import { useEffect, useState } from "react"

import axios from "axios"
import Swal from "sweetalert2"
function IssuedBooks() {

    const [issuedBooks, setIssuedBooks] = useState([])

    useEffect(() => {

        fetchIssuedBooks()

    }, [])

    const fetchIssuedBooks = async () => {

        try {

            const response = await axios.get(

                "http://127.0.0.1:8000/api/issued-books"

            )

            setIssuedBooks(response.data)

        } catch (error) {

            console.log(error)

        }
    }

const returnBook = async (id) => {

    try {

        await axios.put(

            `http://127.0.0.1:8000/api/return-book/${id}`

        )

        Swal.fire({

            title: "Success",

            text: "Book Returned Successfully",

            icon: "success"

        })

        fetchIssuedBooks()

    } catch (error) {

        console.log(error)

        Swal.fire({

            title: "Error",

            text: "Failed To Return Book",

            icon: "error"

        })
    }
}


    return (

        <div>

            <h1 className="text-3xl font-bold mb-5">

                Issued Books

            </h1>

            <div className="bg-white p-5 rounded-xl shadow">

                <table className="w-full">

                    <thead>

                        <tr className="border-b">

                            <th className="text-left p-3">

                                Student Name

                            </th>

                            <th className="text-left p-3">

                                Email

                            </th>

                            <th className="text-left p-3">

                                Book

                            </th>

                            <th className="text-left p-3">

                                Issue Date

                            </th>

                            <th className="text-left p-3">

                                Status

                            </th>

                            <th className="text-left p-3">

    Actions

</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            issuedBooks.map((item) => (

                                <tr
                                    key={item.id}
                                    className="border-b hover:bg-gray-100"
                                >

                                    <td className="p-3">

                                        {item.student_name}

                                    </td>

                                    <td className="p-3">

                                        {item.email}

                                    </td>

                                    <td className="p-3">

                                        {item.book?.title}

                                    </td>

                                    <td className="p-3">

                                        {item.issue_date}

                                    </td>

<td className="p-3">

    <span className={`px-3 py-1 rounded-full text-sm

        ${item.status === 'issued'

            ? 'bg-yellow-100 text-yellow-700'

            : 'bg-green-100 text-green-700'
        }`}>

        {item.status}

    </span>

</td>

<td className="p-3">

    {
        item.status === 'issued' && (

            <div className="flex gap-2">

    {
        item.status === 'issued' && (

            <button
                onClick={() => returnBook(item.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >

                Return

            </button>

        )
    }

    <a
        href={`http://127.0.0.1:8000/api/receipt/${item.id}`}
        target="_blank"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
    >

        Receipt

    </a>

</div>

        )
    }

</td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default IssuedBooks