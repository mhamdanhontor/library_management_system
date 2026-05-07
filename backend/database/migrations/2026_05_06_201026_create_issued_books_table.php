<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('issued_books', function (Blueprint $table) {
$table->id();
$table->string('student_name');

$table->string('email');
$table->foreignId('book_id')->constrained();
$table->date('issue_date');
$table->date('return_date')->nullable();
$table->enum('status', ['issued', 'returned']);
$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('issued_books');
    }
};
