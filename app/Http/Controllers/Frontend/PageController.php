<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pages = Page::orderBy('created_at')->paginate(10);
        return response()->json($pages);
    }

    public function show(Request $request, $id)
    {
        $pages = Page::where('id', $id)->first();
        return response()->json($pages);
    }

}
