import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';
import { TableComponent } from '../../components/table/table.component';
import { ApiService } from '../../_core/services/api.service';
import { Policy } from '../../_core/models/policy.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    NzButtonModule,
    NzAvatarModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,

    TableComponent,
    StatsCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  policies: Policy[] = []

  constructor(
    private service: ApiService
  ){}
  ngOnInit(): void {
    this.getPolicies();
  }


 getPolicies(): void {
  this.service.getPolicies().subscribe({
    next: (res) => {
      this.policies = res;
    },
    error: (err) => {

    }
  })
 }
}
