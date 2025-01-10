import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  logoURL = 'assets/dd_logo.png';
  isExpanded = localStorage.getItem('is_expanded') === 'true';

  constructor(public router: Router){}

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
    localStorage.setItem('is_expanded', this.isExpanded.toString());
  }

}
