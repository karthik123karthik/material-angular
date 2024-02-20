import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

}
