import { Component } from '@angular/core';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';

import { TableComponent } from '../../components/table/table.component';


@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    NzButtonModule,
    NzAvatarModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
    NzModalModule,
    ReactiveFormsModule,
    NzFormModule,

    TableComponent,
    StatsCardComponent],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.scss'
})
export class PoliciesComponent {
  isVisible = false;
  isConfirmLoading = false;

  policyForm: FormGroup;

  get f() {
    return this.policyForm.controls;
  }

  constructor(
    public iconService: NzIconService,
    private fb: FormBuilder
  ){


      this.policyForm = this.fb.group({
        policyName: ['', [Validators.required]],
        type: ['', [Validators.required]],
        policyNo: ['', [Validators.required]],
        premium: ['', [Validators.required]]
      });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm(): void {
    if (this.policyForm.valid) {
      console.log('submit', this.policyForm.value);
    } else {
      Object.values(this.policyForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
}

}
