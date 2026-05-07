import { useEffect, useState } from "react"

import axios from "axios"

import {

    BarChart,

    Bar,

    XAxis,

    YAxis,

    Tooltip,

    ResponsiveContainer

} from "recharts"

function Dashboard() {

    const user = JSON.parse(

        localStorage.getItem("user")

    )

    const [stats, setStats] = useState({

        total_books: 0,

        issued_books: 0,

        total_users: 0

    })

    useEffect(() => {

        fetchStats()

    }, [])

    const fetchStats = async () => {

        try {

            const response = await axios.get(

                "http://127.0.0.1:8000/api/dashboard-stats"

            )

            setStats(response.data)

        } catch (error) {

            console.log(error)

        }
    }

    // CHART DATA

    const chartData = [

        {
            name: "Books",
            total: stats.total_books
        },

        {
            name: "Issued",
            total: stats.issued_books
        },

        {
            name: "Users",
            total: stats.total_users
        }

    ]

    // ================= ADMIN DASHBOARD =================

    if (user?.role === "admin") {

        return (

            <div>

                <h1 className="text-4xl font-bold mb-8">

                    Admin Dashboard

                </h1>

                {/* STATS */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-lg">

                        <h2 className="text-xl font-semibold">

                            Total Books

                        </h2>

                        <p className="text-5xl font-bold mt-4">

                            {stats.total_books}

                        </p>

                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-2xl shadow-lg">

                        <h2 className="text-xl font-semibold">

                            Issued Books

                        </h2>

                        <p className="text-5xl font-bold mt-4">

                            {stats.issued_books}

                        </p>

                    </div>

                    <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-2xl shadow-lg">

                        <h2 className="text-xl font-semibold">

                            Users

                        </h2>

                        <p className="text-5xl font-bold mt-4">

                            {stats.total_users}

                        </p>

                    </div>

                </div>

                {/* CHART */}

                <div className="bg-white mt-10 p-6 rounded-2xl shadow-lg">

                    <h2 className="text-2xl font-bold mb-6">

                        Library Analytics

                    </h2>

                    <ResponsiveContainer width="100%" height={350}>

                        <BarChart data={chartData}>

                            <XAxis dataKey="name" />

                            <YAxis />

                            <Tooltip />

                            <Bar dataKey="total" fill="#2563EB" />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>
        )
    }

    // ================= USER DASHBOARD =================

    return (

        <div>

            <h1 className="text-4xl font-bold mb-8">

                Welcome {user?.name}

            </h1>

            {/* USER CARDS */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 text-white p-6 rounded-2xl shadow-lg">

                    <h2 className="text-xl font-semibold">

                        Available Books

                    </h2>

                    <p className="text-5xl font-bold mt-4">

                        {stats.total_books}

                    </p>

                </div>

                <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white p-6 rounded-2xl shadow-lg">

                    <h2 className="text-xl font-semibold">

                        Books Issued

                    </h2>

                    <p className="text-5xl font-bold mt-4">

                        {stats.issued_books}

                    </p>

                </div>

                <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white p-6 rounded-2xl shadow-lg">

                    <h2 className="text-xl font-semibold">

                        Library Members

                    </h2>

                    <p className="text-5xl font-bold mt-4">

                        {stats.total_users}

                    </p>

                </div>

            </div>

            {/* USER INFO SECTION */}

            <div className="bg-white mt-10 p-8 rounded-2xl shadow-lg">

                <h2 className="text-2xl font-bold mb-5">

                    User Activity

                </h2>

                <div className="space-y-4 text-lg">

                    <p>

                        📚 Browse all available books

                    </p>

                    <p>

                        📖 Issue books directly from dashboard

                    </p>

                    <p>

                        🧾 Download issue receipts anytime

                    </p>

                    <p>

                        🔄 Track returned books

                    </p>

                    <p>

                        🔍 Search books quickly

                    </p>

                </div>

            </div>

        </div>
    )
}

export default Dashboard