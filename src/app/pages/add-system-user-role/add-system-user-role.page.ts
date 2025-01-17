import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { SystemUserRoleService } from '../../services/system-user-role.service';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-system-user-role',
  templateUrl: './add-system-user-role.page.html',
  styleUrls: ['./add-system-user-role.page.scss'],
})
export class AddSystemUserRolePage implements OnInit {

  systemUserRoleForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private systemUserRoleService: SystemUserRoleService,
    private router: Router,
    private toastController: ToastController) {
    this.systemUserRoleForm = this.formBuilder.group({
      systemUserId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      roleId: ['', Validators.compose([Validators.required, Validators.min(1)])]
    })
  }

  ngOnInit() {
  }

  async submitSystemUserRoleForm() {
    if (!this.systemUserRoleForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.systemUserRoleForm.value);

      const token = await this.storage.get('token');
      this.systemUserRoleService.createSystemUserRole(this.systemUserRoleForm.value, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('System user role added successfully');
          this.router.navigate(['/system-user-roles']);
          this.systemUserRoleForm.reset();
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
    return this.systemUserRoleForm.get(control);
  }

}
