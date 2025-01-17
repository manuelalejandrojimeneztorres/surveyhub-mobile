import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { RoleService } from '../../services/role.service';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.page.html',
  styleUrls: ['./add-role.page.scss'],
})
export class AddRolePage implements OnInit {

  roleForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private router: Router,
    private toastController: ToastController) {
    this.roleForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      description: ['', Validators.compose([Validators.required, Validators.maxLength(255)])]
    })
  }

  ngOnInit() {
  }

  async submitRoleForm() {
    if (!this.roleForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.roleForm.value);

      const token = await this.storage.get('token');
      this.roleService.createRole(this.roleForm.value, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Role added successfully');
          this.router.navigate(['/roles']);
          this.roleForm.reset();
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
    return this.roleForm.get(control);
  }

}
