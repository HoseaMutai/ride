import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  isActive?: boolean;
}
@Component({
  selector: 'app-work',
  imports: [CommonModule],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  steps: ProcessStep[] = [
    { id: '01', title: 'Book Your Ride', description: 'it can be via the website, phone call or WhatssApp.' },
    { id: '02', title: 'Half payment', description: 'Based on the destination and pickup address the price is determined and the client pay half the price', isActive: true },
    { id: '03', title: 'Driver Assigned', description: 'The trip details are shared with the client.' },
    { id: '04', title: 'Service delivered', description: 'As scheduled the service is delivered and final balance paid at the beginning of the trip.' }
  ];

}
