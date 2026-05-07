function UserDashboard() {

    const user = JSON.parse(

        localStorage.getItem("user")

    )

    return (

        <div>

            <h1 className="text-4xl font-bold mb-5">

                Welcome {user.name}

            </h1>

            <div className="bg-white p-8 rounded-2xl shadow">

                <h2 className="text-2xl font-semibold mb-4">

                    User Dashboard

                </h2>

                <p className="text-gray-600">

                    Here users can:

                </p>

                <ul className="mt-4 space-y-3">

                    <li>📚 View Books</li>

                    <li>📖 Issue Books</li>

                    <li>🧾 Download Receipts</li>

                    <li>📋 View Issued Books</li>

                </ul>

            </div>

        </div>
    )
}

export default UserDashboard