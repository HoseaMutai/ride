<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
       
        $books = Booking::select("id","name","phone","ride_type","pickup_date","pickup_address","dropoff_address")->get();
        return response()->json($books);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
   
        
        $books=Booking::create($request->only(["name","phone","ride_type","pickup_date","pickup_address","dropoff_address"]));
        return response()->json([
            "id"=>$books->id,
            "name"=>$books->name,
            "phone"=>$books->phone,
            "ride_type"=>$books->ride_type,
            "pickup_date"=>$books->pickup_date,
            "pickup_address"=>$books->pickup_address,
            "dropoff_address"=>$books->dropoff_address,

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $books=Booking::find($id);

         return response()->json([
            "id"=>$books->id,
            "name"=>$books->name,
            "ride_type"=>$books->ride_type,
            "phone"=>$books->phone,
            "pickup_date"=>$books->pickup_date,
            "pickup_address"=>$books->pickup_address,
            "dropoff_address"=>$books->dropoff_address,

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
          $books =Booking::find($id);
 

        $books->name =$request->name;
        $books->phone =$request->phone;
        $books->ride_type =$request->ride_type;
        $books->pickup_date =$request->pickup_date;
        $books->pickup_address =$request->pickup_address;
        $books->dropoff_address =$request->dropoff_address;
        $books->save();

          return response()->json([
            "id"=>$books->id,
            "name"=>$books->name,
            "ride_type"=>$books->ride_type,
            "phone"=>$books->phone,
            "pickup_date"=>$books->pickup_date,
            "pickup_address"=>$books->pickup_address,
            "dropoff_address"=>$books->dropoff_address,

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        Booking::destroy($id);
    return response()->json(["message" => "Deleted"]);
    }
}
