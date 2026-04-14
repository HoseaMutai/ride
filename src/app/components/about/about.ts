import { Component,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';
import { Mission } from '../mission/mission';
import { HomeAbout } from '../home-about/home-about';
export interface StatCounter {
  label: string;
  suffix: string;
  targetValue: number;
  currentValue: number;
}

@Component({
  selector: 'app-about',
  imports: [Navbar,Footer,CommonModule,Mission,HomeAbout],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit {

@ViewChild('statsSection') statsSection!: ElementRef;

  stats: StatCounter[] = [
    { label: 'Happy Passengers', suffix: 'M', targetValue: 10, currentValue: 0 },
    { label: 'On-Time Arrival Rate', suffix: '%', targetValue: 99, currentValue: 0 },
    { label: 'Positive Reviews', suffix: 'K', targetValue: 15, currentValue: 0 }
  ];

  hasAnimated = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.hasAnimated) {
        this.startCounting();
        this.hasAnimated = true;
      }
    }, { threshold: 0.5 });

    observer.observe(this.statsSection.nativeElement);
  }

  startCounting() {
    this.stats.forEach(stat => {
      const duration = 2000; // 2 seconds
      const steps = 50;
      const increment = stat.targetValue / steps;
      let current = 0;
      
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.targetValue) {
          stat.currentValue = stat.targetValue;
          clearInterval(interval);
        } else {
          stat.currentValue = Math.floor(current);
        }
      }, duration / steps);
    });
  }
}

