<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\Category;

class CategoryController extends Controller
{

    // GET ALL CATEGORIES

    public function index()
    {
        return response()->json(
            Category::all()
        );
    }

    // STORE CATEGORY

    public function store(Request $request)
    {

        $validated = $request->validate([

            'name' => 'required'

        ]);

        $category = Category::create($validated);

        return response()->json([

            'message' => 'Category Added Successfully',

            'data' => $category

        ]);
    }
}