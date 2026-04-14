import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../service/book-service';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-home-book',
  imports: [FormsModule,RouterModule],
  templateUrl: './home-book.html',
  styleUrls: ['./home-book.scss']
})
export class HomeBook{
  name='';
  phone='';
  ride_type='';
  pickup_date='';
  pickup_address='';
  dropoff_address='';
  error='';
  
  constructor (private bookService: BookService,private router:Router){}
  submit(){
  
    if(!this.name || !this.phone || !this.ride_type || !this.pickup_date || !this.pickup_address || !this.dropoff_address){
      this.error = "All fields are required";
      return;
    }
    const input = {
      name:this.name,
      phone:this.phone,
      ride_type:this.ride_type,
      pickup_date:this.pickup_date,
      pickup_address:this.pickup_address,
      dropoff_address:this.dropoff_address,
      id:1
    };
     this.bookService.createBook(input).subscribe();

      alert("Booking created successfully");
        this.name = '';
      this.phone = '';
      this.ride_type = '';
      this.pickup_date = '';
      this.pickup_address = '';
      this.dropoff_address = '';
      this.error = '';
      this.router.navigate(['home']);
  
  }

}

