import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Featured } from '../featured/featured';
import { Work } from '../work/work';


@Component({
  selector: 'app-service',
  imports: [Navbar,Footer,Featured,Work],
  templateUrl: './service.html',
  styleUrl: './service.scss',
})
export class Service {

}
