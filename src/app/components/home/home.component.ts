import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  volume: number = 0;
  color?: string[] = ['primary', 'secondary', 'danger'];
  constructor() { }

  ngOnInit(): void {
  }
  incrementVolume() {
    this.volume += 1;
  }
  decrementVolume() {
    if (this.volume > 0) {
      this.volume -= 1;
    }

  }

}
