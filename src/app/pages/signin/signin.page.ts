import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SystemUserInterface } from '../../interfaces/system-user.interface';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  loginForm: FormGroup;
  showPassword = false;
  isLoading = false;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController) {
    this.loginForm = this.formBuilder.group({
      loginName: ['', [Validators.required, Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  ngOnInit() {
  }

  getFormControl(control: string) {
    return this.loginForm.get(control);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const { loginName, password } = this.loginForm.value;

    const systemUser: SystemUserInterface = {
      loginName: this.loginForm.value.loginName,
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      passwordHash: this.loginForm.value.password,
      status: '',
      tokenVersion: 0
    };

    const loading = await this.loadingController.create({
      message: 'Signing in...',
    });
    await loading.present();

    this.isLoading = true;

    this.authService.signIn(systemUser).subscribe({
      next: async (res) => {
        await loading.dismiss();
        this.isLoading = false;

        if (!res?.access_token) {
          this.presentAlert('Invalid credentials');
          return;
        }

        this.router.navigate(['/dashboard']);
        this.loginForm.reset();
      },
      error: async () => {
        await loading.dismiss();
        this.isLoading = false;
        this.presentAlert('Login failed. Please try again.');
      },
    });
  }

  private async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Login Error',
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
