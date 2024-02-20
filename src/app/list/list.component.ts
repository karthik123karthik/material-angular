import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgFor} from '@angular/common';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatListModule, NgFor],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
