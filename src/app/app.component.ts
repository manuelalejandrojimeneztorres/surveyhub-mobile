import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star, moon, sunny } from 'ionicons/icons';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Coming soon', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Coming soon', url: '/folder/favorites', icon: 'heart' },
    { title: 'Coming soon', url: '/folder/archived', icon: 'archive' },
    { title: 'Coming soon', url: '/folder/trash', icon: 'trash' },
    { title: 'Coming soon', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Coming soon', 'Coming soon', 'Coming soon', 'Coming soon', 'Coming soon', 'Coming soon'];
  public isDarkMode = false;
  public darkModeIcon = 'moon';

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star, moon, sunny });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
    this.darkModeIcon = this.isDarkMode ? 'sunny' : 'moon';
  }

  async presentLogoutAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Logout',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Logout',
          handler: async () => {
            await this.logout();
          },
        },
      ],
    });

    await alert.present();
  }

  private async logout() {
    try {
      await this.authService.signOut();
      this.router.navigate(['/signin']);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

}
