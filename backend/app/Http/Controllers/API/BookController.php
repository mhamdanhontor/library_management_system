<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Book;

class BookController extends Controller
{

    // GET ALL BOOKS

    public function index()
    {
        $books = Book::all();

        return response()->json($books);
    }

    // STORE NEW BOOK

    public function store(Request $request)
    {

        $validated = $request->validate([

            'title' => 'required',
            'author' => 'required',
            'isbn' => 'required|unique:books',
            'quantity' => 'required',
            'category_id' => 'required'

        ]);

        $book = Book::create($validated);

        return response()->json([

            'message' => 'Book Added Successfully',
            'data' => $book

        ]);
    }

    // SHOW SINGLE BOOK

    public function show(string $id)
    {
        $book = Book::find($id);

        return response()->json($book);
    }

    // UPDATE BOOK

    public function update(Request $request, string $id)
    {

        $book = Book::find($id);

        $book->update($request->all());

        return response()->json([

            'message' => 'Book Updated Successfully',
            'data' => $book

        ]);
    }

    // DELETE BOOK

    public function destroy(string $id)
    {

        $book = Book::find($id);

        $book->delete();

        return response()->json([

            'message' => 'Book Deleted Successfully'

        ]);
    }
}