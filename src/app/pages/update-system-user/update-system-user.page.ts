import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { SystemUserService } from '../../services/system-user.service';
import { PhotoService } from '../../services/photo.service';
import { SystemUserInterface } from '../../interfaces/system-user.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-update-system-user',
  templateUrl: './update-system-user.page.html',
  styleUrls: ['./update-system-user.page.scss'],
})
export class UpdateSystemUserPage implements OnInit {

  systemUserForm: FormGroup;
  showPassword = false;
  isLoading = false;
  systemUserId: any;
  profilePictureUrl: string = ''; // = null
  isFormSubmitted: boolean = false;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private systemUserService: SystemUserService,
    private photoService: PhotoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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

  async ngOnInit() {
    // this.systemUserId = this.activatedRoute.snapshot.paramMap.get('id');
    this.systemUserId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.loadSystemUser();
  }

  ionViewWillEnter() {
    this.isFormSubmitted = false;
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

  async loadSystemUser() { // loadUserData
    const token = await this.storage.get('token');
    this.systemUserService.getSystemUserById(this.systemUserId, token).subscribe((response: SystemUserInterface) => {
      this.systemUserForm.patchValue({
        loginName: response.loginName,
        firstName: response.firstName,
        lastName: response.lastName,
        emailAddress: response.emailAddress,
        phoneNumber: response.phoneNumber,
        passwordHash: response.passwordHash,
        status: response.status,
        tokenVersion: response.tokenVersion,
        lastLoginAt: response.lastLoginAt,
        lastPasswordChangeAt: response.lastPasswordChangeAt
      });

      this.profilePictureUrl = response.profilePicture ? `http://localhost:8080/images/${response.profilePicture}` : '';
    });
  }

  /*   updateSurvey() {
      const updatedSurvey = this.systemUserForm.value;
      this.systemUserService.updateSystemUser(this.systemUserId, updatedSurvey).subscribe(() => {
        this.router.navigate(['/system-users']);
      });
    } */

  /*   // Método submitSystemUserForm
    if(this.profilePictureUrl && !this.profilePictureUrl.startsWith('http')) {
    const response = await fetch(this.profilePictureUrl);
    profilePictureBlob = await response.blob();
  }
  
  const formData = new FormData();
  formData.append('loginName', this.systemUserForm.value.loginName);
  formData.append('firstName', this.systemUserForm.value.firstName);
  formData.append('lastName', this.systemUserForm.value.lastName);
  formData.append('emailAddress', this.systemUserForm.value.emailAddress);
  // Otros campos...
  
  // Solo añadir la imagen si hay una nueva seleccionada
  if (profilePictureBlob) {
    formData.append('profilePicture', profilePictureBlob, 'profilePicture.png');
  }
  
  this.systemUserService.updateSystemUser(this.systemUserId, formData).subscribe(response => {
    console.log('Usuario actualizado con éxito');
    this.router.navigate(['/system-users']);
  }); */

  /* const formData = new FormData();
  formData.append('loginName', this.systemUserForm.value.loginName);
  formData.append('firstName', this.systemUserForm.value.firstName);
  formData.append('lastName', this.systemUserForm.value.lastName);
  formData.append('emailAddress', this.systemUserForm.value.emailAddress);
  // Otros campos...
  
  // Añadir la imagen solo si se seleccionó una nueva
  if (profilePictureBlob) {
    formData.append('profilePicture', profilePictureBlob, 'profilePicture.png');
  }
  
  this.systemUserService.updateSystemUser(this.systemUserId, formData).subscribe(response => {
    console.log('Usuario actualizado con éxito');
    this.router.navigate(['/system-users']);
  }); */

  async submitSystemUserForm() {
    this.isFormSubmitted = true;

    if (!this.systemUserForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.systemUserForm.value);

      let profilePictureBlob: Blob | undefined = undefined;
      if (this.profilePictureUrl && !this.profilePictureUrl.startsWith('http')) {
        const response = await fetch(this.profilePictureUrl);
        profilePictureBlob = await response.blob();
      }

      const token = await this.storage.get('token');
      this.systemUserService.updateSystemUser(this.systemUserId, this.systemUserForm.value, token, profilePictureBlob).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('System user updated successfully');
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
