<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    //
    protected $fillable = ["name","phone","ride_type","pickup_date","pickup_address","dropoff_address"];
}
