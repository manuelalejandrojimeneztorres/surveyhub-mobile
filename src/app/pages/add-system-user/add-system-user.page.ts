import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { SystemUserService } from '../../services/system-user.service';
import { PhotoService } from '../../services/photo.service';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-system-user',
  templateUrl: './add-system-user.page.html',
  styleUrls: ['./add-system-user.page.scss'],
})
export class AddSystemUserPage implements OnInit {

  systemUserForm: FormGroup;
  showPassword = false;
  isLoading = false;
  isFormSubmitted: boolean = false;
  profilePictureUrl: string = ''; // = null

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private systemUserService: SystemUserService,
    private photoService: PhotoService,
    private router: Router,
    private toastController: ToastController) {
    this.systemUserForm = this.formBuilder.group({
      loginName: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      firstName: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      emailAddress: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(100)])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      passwordHash: ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
      status: ['Active', Validators.compose([Validators.required, Validators.maxLength(50)])],
      tokenVersion: ['1', Validators.compose([Validators.required, Validators.min(1)])],
      lastLoginAt: [''],
      lastPasswordChangeAt: ['']
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.systemUserForm.reset();
    this.isFormSubmitted = false;
    this.profilePictureUrl = '';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  takeProfilePicture() {
    this.photoService.takePhoto().then(image => {
      this.profilePictureUrl = image.webPath ? image.webPath : '';
    });
  }

  selectImage() {
    this.photoService.pickImage().then(image => {
      this.profilePictureUrl = image.webPath;
    });
  }

  removeImage() {
    this.profilePictureUrl = '';
  }

  async submitSystemUserForm() {
    this.isFormSubmitted = true;

    if (!this.systemUserForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.systemUserForm.value);
      let profilePictureBlob: Blob | null = null;

      if (this.profilePictureUrl !== '') {
        const response = await fetch(this.profilePictureUrl);
        profilePictureBlob = await response.blob();
      }

      this.systemUserService.createSystemUser(this.systemUserForm.value, profilePictureBlob).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('System user added successfully');
          this.router.navigate(['/system-users']);
          this.systemUserForm.reset();
        },
        error: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission failed. Please try again.',
            color: 'danger',
            duration: 2000,
          });
          toast.present();
        }
      });
    }
  }

  getFormControl(control: string) {
    return this.systemUserForm.get(control);
  }

}
