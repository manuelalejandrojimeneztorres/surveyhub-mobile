import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.page.html',
  styleUrls: ['./forbidden.page.scss'],
})
export class ForbiddenPage implements OnInit, OnDestroy {
  countdown = 30;
  intervalId: any;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.intervalId);
        this.goBack();
      }
    }, 1000);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
