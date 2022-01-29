<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
       /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::orderBy('created_at')->paginate(10);
        return response()->json($posts);
    }

    public function show(Request $request, $id)
    {
        $posts = Post::where('id', $id)->first();
        return response()->json($posts);
    }
}
