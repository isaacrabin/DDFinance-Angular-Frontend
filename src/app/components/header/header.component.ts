import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Router } from '@angular/router';
import { SearchService } from '../../_core/services/search.service';




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
    private router: Router,
    private searchService: SearchService
  ){}

  onSearch(e: any): void {
    console.log('onSearch', e.target.value);
    this.searchService.setSearchQuery(e.target.value); // Update the search query in the service
  }

  logout(){
    this.router.navigate(['/login'])
  }
}
