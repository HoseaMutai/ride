import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';
import { HomeBook } from '../home-book/home-book';
import { WhyUs } from '../why-us/why-us';
export interface OfficeLocation {
  country: string;
  address: string;
  phone: string;
  email:string;
}

@Component({
  selector: 'app-contact',
  imports: [Navbar,Footer,CommonModule,HomeBook,WhyUs],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
offices: OfficeLocation[] = [
    {
      country: 'Nairobi',
      address: 'Umoja II, Near Kwa Chief Junction',
      phone: '0723730684',
      email: 'blackseatsprivaterides009@gmail.com'
    },
    // {
    //   country: 'Australia',
    //   address: '333 Collins, Melbourne VIC 3000, Australia',
    //   phone: '+2 (444) 000-0000'
    // }
  ];
}
