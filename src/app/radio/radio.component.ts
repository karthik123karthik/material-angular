import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {

}
