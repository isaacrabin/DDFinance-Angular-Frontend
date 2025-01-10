import { Component } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';

interface Policy {
  policyName: string;
  insuranceType: string;
  policyNo: string;
  premiumAmt: string;
}

@Component({
  standalone: true,
  selector: 'app-basic-table',
  imports: [NzDividerModule, NzTableModule,NzModalModule],
  template: `
    <div class="container mx-auto py-4">
    <nz-table #basicTable [nzData]="listOfData">
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
            <td>{{ data.policyNo }}</td>
            <td>{{ data.premiumAmt}}</td>
            <td>
              <a class="text-[#ff6e00]">
                <span class="material-icons">border_color</span>
              </a>
              <nz-divider nzType="vertical"></nz-divider>
              <a class="text-[#d0312d]" (click)="showConfirm()">
              <span class="material-icons">delete</span>
              </a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
    </div>
  `
})

export class TableComponent {

  confirmModal?: NzModalRef;

  listOfData: Policy[] = [
    {
      policyNo: 'DDF098957',
      policyName: 'Taifa Care',
      premiumAmt: "3100",
      insuranceType: 'Health Insurance',
    },
    {
      policyNo: 'DDF098957',
      policyName: 'Bulk Policy',
      premiumAmt: "3100",
      insuranceType: 'Health Insurance',
    },

  ];

  constructor(private modal: NzModalService){}

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }
}
