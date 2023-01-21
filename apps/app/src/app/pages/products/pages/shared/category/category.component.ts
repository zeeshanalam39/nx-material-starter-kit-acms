import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() categories$!: Observable<string[]>;
  @Output() selectedCategory: EventEmitter<string> = new EventEmitter();

  constructor() {}

  getSelectedCategory(category: string): void {
    this.selectedCategory.emit(category);
  }
}
