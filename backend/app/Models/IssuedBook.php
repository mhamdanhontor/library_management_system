<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Book;
class IssuedBook extends Model
{
    use HasFactory;

    protected $fillable = [

        'student_name',
        'email',
        'book_id',
        'issue_date',
        'return_date',
        'status'

    ];
    public function book()
{
    return $this->belongsTo(Book::class);
}
}