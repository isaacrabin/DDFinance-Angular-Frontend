import { Component, Input } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Policy } from '../../_core/models/policy.model';
import { ApiService } from '../../_core/services/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpinModule } from 'ng-zorro-antd/spin';


@Component({
  standalone: true,
  selector: 'app-basic-table',
  imports: [
    NzButtonModule,
    NzAvatarModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
    ReactiveFormsModule,
    NzFormModule,
    NzDividerModule,
    NzTableModule,
    NzSpinModule,
    NzModalModule],

  template: `
    <div class="container mx-auto py-4">
    <nz-spin [nzSpinning]="isLoading" nzTip="Loading...">
    <nz-table #basicTable [nzData]="data" [nzLoading]="isLoading">
      <thead>
        <tr>
          <th>Policy Name</th>
          <th>Insurance Type</th>
          <th>Policy No.</th>
          <th>Premium Amt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        @for (data of basicTable.data; track data) {
          <tr>
            <td>{{ data.policyName }}</td>
            <td>{{ data.insuranceType }}</td>
            <td>{{ data.policyNumber }}</td>
            <td>{{ data.premiumAmount}}</td>
            <td>
              <a class="text-[#ff6e00]" (click)="showModal(data)">
                <span class="material-icons">border_color</span>
              </a>
              <nz-divider nzType="vertical"></nz-divider>
              <a class="text-[#d0312d]" (click)="showConfirm(data)">
              <span class="material-icons">delete</span>
              </a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
    </nz-spin>

    <section>
    <nz-modal
    [(nzVisible)]="isVisible"
    [nzTitle]="modalTitle"
    [nzContent]="modalContent"
    [nzFooter]="modalFooter"
    (nzOnCancel)="handleCancel()"
    nzWidth="45rem"
  >
    <ng-template #modalTitle>Add New Insurance Policy</ng-template>

    <ng-template #modalContent>
      <form nz-form [formGroup]="policyForm" class="login-form">
        <nz-form-item>
          <nz-form-control nzErrorTip="Please input your username!">
            <nz-input-group nzPrefixIcon="file-add">
              <input type="text" class="p-1" nz-input formControlName="policyName" placeholder="Policy Name" />
            </nz-input-group>
          </nz-form-control>
        </nz-form-item>

        <nz-form-item>
          <nz-form-control nzErrorTip="Please input your username!">
            <nz-input-group nzPrefixIcon="file-text">
              <input type="text" class="p-1" nz-input formControlName="type" placeholder="Insurance Type" />
            </nz-input-group>
          </nz-form-control>
        </nz-form-item>

        <nz-form-item>
          <nz-form-control nzErrorTip="Please input your username!">
            <nz-input-group nzPrefixIcon="number">
              <input type="text" class="p-1" nz-input formControlName="policyNo" placeholder="Policy Number" />
            </nz-input-group>
          </nz-form-control>
        </nz-form-item>

        <nz-form-item>
          <nz-form-control nzErrorTip="Please input your username!">
            <nz-input-group nzPrefixIcon="dollar">
              <input type="text" class="p-1" nz-input formControlName="premium" placeholder="Premium Amount" />
            </nz-input-group>
          </nz-form-control>
        </nz-form-item>
      </form>
    </ng-template>

    <ng-template #modalFooter>
      <button nz-button nzType="default" nzSize="large" (click)="handleCancel()">Cancel</button>
      <button nz-button nzType="primary" class="bg-primaryBlue-300" nzSize="large" (click)="updatePolicy()" [nzLoading]="isConfirmLoading">Create Policy</button>
    </ng-template>
  </nz-modal>
  </section>
    </div>



  `
})

export class TableComponent {

  confirmModal?: NzModalRef;
  @Input() data: Policy[] = [];
  @Input() isLoading: boolean = false;

  filteredData: Policy[] = [];

  isVisible = false;
  isConfirmLoading = false;
  selectedPolicyId: number = 0;

    policyForm: FormGroup;

    get f() {
      return this.policyForm.controls;
    }



  constructor(
    private modal: NzModalService,
    private service: ApiService,
    private fb: FormBuilder
  ){
    this.policyForm = this.fb.group({
      policyName: ['', [Validators.required]],
      type: ['', [Validators.required]],
      policyNo: ['', [Validators.required]],
      premium: ['', [Validators.required]]
    });
  }



  showConfirm(policy: Policy): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete this policy?',
      nzContent: `This ${policy.policyName} policy will be deleted and removed from the database`,
      nzOnOk: () =>

          setTimeout(()=>{
            this.service.deletePolicy(policy.id as number).subscribe(
              {
                next: () =>{
                  this.getPolicies();
                },
                error: () =>{}
              }
            )
            this.modal.closeAll();
          }, 1000)
    });
  }


  getPolicies(): void {
    this.service.getPolicies().subscribe({
      next: (res) => {
        this.data = res;
        this.filteredData = res;
      },
      error: (err) => {

      }
    })
   }

  showModal(data: Policy): void {
    this.isVisible = true;
    this.selectedPolicyId = data.id as number;

    this.policyForm.patchValue({
      policyName: data.policyName,
      type: data.insuranceType,
      policyNo: data.policyNumber,
      premium: data.premiumAmount
    })
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

  updatePolicy(): void {
    this.isConfirmLoading = true;

    const {policyName, type,policyNo,premium} = this.policyForm.value
    if (this.policyForm.valid) {

      const payload = {
        id:this.selectedPolicyId,
        policyName: policyName,
        insuranceType: type,
        policyNumber: policyNo,
        premiumAmount: parseInt(premium)
      }

      this.service.updatePolicy(this.selectedPolicyId,payload).subscribe({
        next: () => {
          this.isVisible = false;
          this.isConfirmLoading = false;
          this.getPolicies();
        },
        error: () => {
          this.isConfirmLoading = false;
        }
      });
    } else {
      this.isConfirmLoading = false;
      Object.values(this.policyForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
}

}
