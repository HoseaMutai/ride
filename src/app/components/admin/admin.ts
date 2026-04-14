import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { BookService } from '../../service/book-service';
import { BookInterface } from '../../interface/book-interface';


@Component({
  selector: 'app-admin',
  imports: [Navbar,Footer],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
books: BookInterface[]=[];

 constructor(private service: BookService) {}

    ngOnInit(): void{
      this.service.getBooks().subscribe((data: BookInterface[])=>{
        this.books=data;
      })
    }
    
  }
