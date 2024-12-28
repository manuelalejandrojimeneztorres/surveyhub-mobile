import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { SystemUserService } from '../../services/system-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  systemUserForm: FormGroup;
  showPassword = false;
  isLoading = false;

  constructor(private formBuilder: FormBuilder,
    private systemUserService: SystemUserService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController) {
    this.systemUserForm = this.formBuilder.group({
      loginName: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      firstName: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      emailAddress: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(100)])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      passwordHash: ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
      status: ['Active', Validators.compose([Validators.required, Validators.maxLength(50)])],
      tokenVersion: ['1', Validators.compose([Validators.required, Validators.min(1)])]
    })
  }

  ngOnInit() {
  }

  getFormControl(name: string) {
    return this.systemUserForm.get(name);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async onSubmit() {
    if (this.systemUserForm.invalid) return;

    const loading = await this.loadingController.create({
      message: 'Signing up...',
    });
    await loading.present();

    this.isLoading = true;

    this.systemUserService.createSystemUser(this.systemUserForm.value, null).subscribe({
      next: async () => {
        await loading.dismiss();
        this.isLoading = false;
        const toast = await this.toastController.create({
          message: 'Registration successful! Please sign in.',
          color: 'success',
          duration: 2000,
        });
        toast.present();

        this.router.navigate(['/signin']);
        this.systemUserForm.reset();
      },
      error: async () => {
        await loading.dismiss();
        this.isLoading = false;
        const toast = await this.toastController.create({
          message: 'Registration failed. Please try again.',
          color: 'danger',
          duration: 2000,
        });
        toast.present();
      }
    });
  }

}
