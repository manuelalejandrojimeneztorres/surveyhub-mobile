import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { SystemUserRoleService } from '../../services/system-user-role.service';
import { SystemUserRoleInterface } from '../../interfaces/system-user-role.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-update-system-user-role',
  templateUrl: './update-system-user-role.page.html',
  styleUrls: ['./update-system-user-role.page.scss'],
})
export class UpdateSystemUserRolePage implements OnInit {

  systemUserRoleForm: FormGroup;
  isLoading = false;
  systemUserRoleId: any;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private systemUserRoleService: SystemUserRoleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController) {
    this.systemUserRoleForm = this.formBuilder.group({
      systemUserId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      roleId: ['', Validators.compose([Validators.required, Validators.min(1)])]
    })
  }

  async ngOnInit() {
    this.systemUserRoleId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadSystemUserRole();
  }

  async loadSystemUserRole() {
    const token = await this.storage.get('token');
    this.systemUserRoleService.getSystemUserRoleById(this.systemUserRoleId, token).subscribe((response: SystemUserRoleInterface) => {
      this.systemUserRoleForm.patchValue({
        systemUserId: response.systemUserId,
        roleId: response.roleId
      });
    });
  }

  async submitSystemUserRoleForm() {
    if (!this.systemUserRoleForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.systemUserRoleForm.value);

      const updatedSystemUserRole = this.systemUserRoleForm.value;
      const token = await this.storage.get('token');
      this.systemUserRoleService.updateSystemUserRole(this.systemUserRoleId, updatedSystemUserRole, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('System user role updated successfully');
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
