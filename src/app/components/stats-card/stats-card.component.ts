import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';



@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule, NzGridModule,

    NzButtonModule,
    NzAvatarModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
  ],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss'
})
export class StatsCardComponent {

}
