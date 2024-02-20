import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import {AutocompleteComponent} from './autocomplete/autocomplete.component';
import { BadgesComponent } from './badges/badges.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ChipsComponent } from './chips/chips.component';
import { CardsComponent } from './cards/cards.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { DialogComponent } from './dialog/dialog.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { FormComponent } from './form/form.component';
import { IconsComponent } from './icons/icons.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RadioComponent } from './radio/radio.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { SliderComponent } from './slider/slider.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabComponent } from './tab/tab.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ButtonComponent,
    AutocompleteComponent,
    BadgesComponent,
    DatePickerComponent,
    ChipsComponent,
    CardsComponent,
    ButtonToggleComponent,
    DialogComponent,
    CheckboxComponent,
    DividerComponent,
    ExpansionComponent,
    FormComponent,
    IconsComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressComponent,
    SpinnerComponent,
    RadioComponent,
    SidenavComponent,
    SlidetoggleComponent,
    SliderComponent,
    StepperComponent,
    TableComponent,
    TabComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent,
    SnackbarComponent,
    BottomsheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
