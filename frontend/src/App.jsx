import {

  BrowserRouter,

  Routes,

  Route

} from "react-router-dom"

import DashboardLayout from "./layouts/DashboardLayout"

import Dashboard from "./pages/Dashboard"

import UserDashboard from "./pages/UserDashboard"

import Books from "./pages/Books"

import AddBook from "./pages/AddBook"

import EditBook from "./pages/EditBook"

import IssueBook from "./pages/IssueBook"

import IssuedBooks from "./pages/IssuedBooks"

import Login from "./pages/Login"

import Register from "./pages/Register"

import ProtectedRoute from "./routes/ProtectedRoute"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* PUBLIC ROUTES */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* PROTECTED ROUTES */}

        <Route

          path="*"

          element={

            <ProtectedRoute>

              <DashboardLayout>

                <Routes>

<Route path="/" element={<Dashboard />} />

                  <Route path="/books" element={<Books />} />

                  <Route path="/add-book" element={<AddBook />} />

                  <Route path="/edit-book/:id" element={<EditBook />} />

                  <Route path="/issue-book" element={<IssueBook />} />

                  <Route path="/issued-books" element={<IssuedBooks />} />

                </Routes>

              </DashboardLayout>

            </ProtectedRoute>

          }

        />

      </Routes>

    </BrowserRouter>
  )
}

export default App