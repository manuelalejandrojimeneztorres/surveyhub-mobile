import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star, moon, sunny } from 'ionicons/icons';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { SystemUserService } from './services/system-user.service';
import { SystemUserInterface } from './interfaces/system-user.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  systemUser: SystemUserInterface | null = null;

  public appPages = [
    {
      title: 'Profile',
      url: null,
      icon: 'person',
      action: () => this.navigateToEditProfile()
    },
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Statistics', url: '/statistics', icon: 'bar-chart' },
    { title: 'Analytics', url: '/analytics', icon: 'analytics' },
    { title: 'Reports', url: '/reports', icon: 'document' },
    { title: 'Issues', url: '/issues', icon: 'bug' },
    { title: 'Support', url: '/support', icon: 'help-buoy' }
  ];
  public labels = ['Coming soon', 'Coming soon', 'Coming soon', 'Coming soon', 'Coming soon', 'Coming soon'];
  public isDarkMode = false;
  public darkModeIcon = 'moon';

  constructor(
    private authService: AuthService,
    private systemUserService: SystemUserService,
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

  async ngOnInit() {
    await this.loadSystemUser();
  }

  ionViewWillEnter() {
    this.loadSystemUser();
  }

  async navigateToEditProfile() {
    const systemUserId = await this.authService.getSystemUserIdFromToken();
    if (systemUserId) {
      this.router.navigate(['/edit-profile', systemUserId]);
    } else {
      console.error('SystemUser ID not found in token');
    }
  }

  private async loadSystemUser() {
    try {
      const token = await this.authService.getToken();
      if (!token || this.authService.isTokenExpired(token)) {
        console.error('Token not found or expired.');
        return;
      }

      const systemUserId = await this.authService.getSystemUserIdFromToken();
      if (!systemUserId) {
        console.error('SystemUser ID not found in token.');
        return;
      }

      this.systemUserService.getSystemUserById(systemUserId, token).subscribe({
        next: (user: SystemUserInterface) => {
          this.systemUser = user;
        },
        error: (error) => {
          console.error('Error fetching user data:', error);
        },
      });
    } catch (error) {
      console.error('Error loading user data:', error);
    }
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
