<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\IssuedBook;

use App\Models\Book;

class IssuedBookController extends Controller
{

    // GET ISSUED BOOKS

    public function index()
    {

        return response()->json(

            IssuedBook::with('book')->get()

        );
    }

    // ISSUE BOOK

    public function store(Request $request)
    {

        $validated = $request->validate([

            'student_name' => 'required',

            'email' => 'required',

            'book_id' => 'required',

            'issue_date' => 'required'

        ]);

        // FIND BOOK

        $book = Book::find($request->book_id);

        // CHECK STOCK

        if ($book->quantity <= 0) {

            return response()->json([

                'message' => 'Book Out Of Stock'

            ], 400);
        }

        // CREATE ISSUE RECORD

        $issuedBook = IssuedBook::create([

            'student_name' => $request->student_name,

            'email' => $request->email,

            'book_id' => $request->book_id,

            'issue_date' => $request->issue_date,

            'status' => 'issued'

        ]);

        // REDUCE STOCK

        $book->quantity = $book->quantity - 1;

        $book->save();

        return response()->json([

            'message' => 'Book Issued Successfully',

            'data' => $issuedBook

        ]);
    }

public function returnBook($id)
{

    // FIND ISSUED RECORD

    $issuedBook = IssuedBook::find($id);

    // CHECK IF ALREADY RETURNED

    if ($issuedBook->status == 'returned') {

        return response()->json([

            'message' => 'Book Already Returned'

        ], 400);
    }

    // UPDATE STATUS

    $issuedBook->status = 'returned';

    $issuedBook->return_date = now();

    $issuedBook->save();

    // INCREASE BOOK STOCK

    $book = Book::find($issuedBook->book_id);

    $book->quantity = $book->quantity + 1;

    $book->save();

    return response()->json([

        'message' => 'Book Returned Successfully'

    ]);
}

public function generateReceipt($id)
{

    // FIND ISSUED BOOK

    $issuedBook = IssuedBook::with('book')->find($id);

    // LOAD PDF PACKAGE

    $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView(

        'receipt',

        compact('issuedBook')

    );

    // DOWNLOAD PDF

    return $pdf->download('library_receipt.pdf');
}


}