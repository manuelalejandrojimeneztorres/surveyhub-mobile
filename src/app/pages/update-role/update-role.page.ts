import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { RoleService } from '../../services/role.service';
import { RoleInterface } from '../../interfaces/role.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.page.html',
  styleUrls: ['./update-role.page.scss'],
})
export class UpdateRolePage implements OnInit {

  roleForm: FormGroup;
  isLoading = false;
  roleId: any;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController) {
    this.roleForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      description: ['', Validators.compose([Validators.required, Validators.maxLength(255)])]
    })
  }

  async ngOnInit() {
    this.roleId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadRole();
  }

  async loadRole() {
    const token = await this.storage.get('token');
    this.roleService.getRoleById(this.roleId, token).subscribe((response: RoleInterface) => {
      this.roleForm.patchValue({
        name: response.name,
        description: response.description
      });
    });
  }

  async submitRoleForm() {
    if (!this.roleForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.roleForm.value);

      const updatedRole = this.roleForm.value;
      const token = await this.storage.get('token');
      this.roleService.updateRole(this.roleId, updatedRole, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Role updated successfully');
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
