import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit, OnDestroy {
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
