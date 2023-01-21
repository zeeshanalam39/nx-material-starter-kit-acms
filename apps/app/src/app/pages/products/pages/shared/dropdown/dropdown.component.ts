import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { IDropdown } from 'apps/app/src/app/shared/models/product.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})

// Todo - Declared in multiple modules.
export class DropdownComponent {
  @Input() dropdownPlaceholder = '';
  @Input() dropdownOptions: IDropdown[] = [];

  @Output() selected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  change(option: MatSelectChange): void {
    this.selected.emit(option.value);
  }
}
