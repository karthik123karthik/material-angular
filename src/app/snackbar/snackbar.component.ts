import { Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'snack-bar-annotated-component-example-snack',
  templateUrl: 'snack-bar-annotated-component-example-snack.html',
  styles: [
    `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = Inject(MatSnackBarRef);
}


@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, MatSnackBarModule ],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  styles: [
    `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})
export class SnackbarComponent {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
}
}
