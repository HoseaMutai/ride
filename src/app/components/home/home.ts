import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Featured } from '../featured/featured';
import { WhyUs } from '../why-us/why-us';
import { HomeBook } from '../home-book/home-book';
import { HomeAbout } from '../home-about/home-about';


@Component({
  selector: 'app-home',
  imports: [Navbar,Footer,Featured,WhyUs,HomeBook,HomeAbout],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
