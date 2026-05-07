import { Link } from "react-router-dom"

function DashboardLayout({ children }) {

    return (

        <div className="flex min-h-screen bg-gray-100">

            {/* SIDEBAR */}

            <div className="w-64 bg-slate-900 text-white p-5">

                <h1 className="text-2xl font-bold mb-10 text-center">

                    LMS Admin

                </h1>

<ul className="space-y-4">

    {/* DASHBOARD */}

    <li>

        <Link
            to="/"
            className="block hover:bg-slate-700 p-2 rounded"
        >

            Dashboard

        </Link>

    </li>

    {/* ADMIN ONLY */}

    {
        user?.role === "admin" && (

            <>
                <li>

                    <Link
                        to="/books"
                        className="block hover:bg-slate-700 p-2 rounded"
                    >

                        Manage Books

                    </Link>

                </li>

                <li>

                    <Link
                        to="/add-book"
                        className="block hover:bg-slate-700 p-2 rounded"
                    >

                        Add Book

                    </Link>

                </li>
            </>
        )
    }

    {/* BOTH ADMIN & USER */}

    <li>

        <Link
            to="/issue-book"
            className="block hover:bg-slate-700 p-2 rounded"
        >

            Issue Book

        </Link>

    </li>

    <li>

        <Link
            to="/issued-books"
            className="block hover:bg-slate-700 p-2 rounded"
        >

            Issued Books

        </Link>

    </li>

</ul>
                <button
    onClick={logout}
    className="mt-10 bg-red-600 hover:bg-red-700 w-full py-3 rounded-lg"
>

    Logout

</button>

            </div>

            {/* MAIN CONTENT */}

            <div className="flex-1 p-6">

                {children}

            </div>

        </div>
    )
}

const user = JSON.parse(

    localStorage.getItem("user")

)


const logout = () => {

    localStorage.removeItem("user")

    window.location.href = "/login"
}


export default DashboardLayout