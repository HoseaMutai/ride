import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Stat {
  label: string;
  value: number;
}

@Component({
  selector: 'app-home-about',
  imports: [CommonModule],
  templateUrl: './home-about.html',
  styleUrl: './home-about.scss',
})
export class HomeAbout {
  stats: Stat[] = [
    { label: 'Experienced', value: 98 },
    { label: 'Punctuality', value: 86 },
    { label: 'Customer Satisfaction', value: 90 },
    { label: 'Flexible', value: 80 }
  ];
}
