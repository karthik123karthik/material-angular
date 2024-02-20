import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, NgIf, MatButtonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  showFiller = false;
}
