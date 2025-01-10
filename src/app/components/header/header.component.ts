import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,

    NzButtonModule,
    NzAvatarModule,
    NzInputModule,
    NzMenuModule,
    NzIconModule,
    NzDropDownModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private router: Router
  ){}

  logout(){
    this.router.navigate(['/login'])
  }
}
