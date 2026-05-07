<!DOCTYPE html>

<html>

<head>

    <title>Library Receipt</title>

    <style>

        body {

            font-family: Arial, sans-serif;

            padding: 40px;
        }

        .container {

            border: 2px solid #000;

            padding: 30px;
        }

        h1 {

            text-align: center;

            margin-bottom: 30px;
        }

        table {

            width: 100%;

            border-collapse: collapse;
        }

        td {

            padding: 12px;

            border: 1px solid #000;
        }

    </style>

</head>

<body>

    <div class="container">

        <h1>Library Receipt</h1>

        <table>

            <tr>

                <td><strong>Student Name</strong></td>

                <td>{{ $issuedBook->student_name }}</td>

            </tr>

            <tr>

                <td><strong>Email</strong></td>

                <td>{{ $issuedBook->email }}</td>

            </tr>

            <tr>

                <td><strong>Book Name</strong></td>

                <td>{{ $issuedBook->book->title }}</td>

            </tr>

            <tr>

                <td><strong>Author</strong></td>

                <td>{{ $issuedBook->book->author }}</td>

            </tr>

            <tr>

                <td><strong>Issue Date</strong></td>

                <td>{{ $issuedBook->issue_date }}</td>

            </tr>

            <tr>

                <td><strong>Status</strong></td>

                <td>{{ $issuedBook->status }}</td>

            </tr>

        </table>

    </div>

</body>

</html>