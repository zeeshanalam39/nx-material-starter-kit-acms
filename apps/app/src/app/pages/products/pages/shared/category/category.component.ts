import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() categories$!: Observable<string[]>;
  @Output() selectedCategory: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getSelectedCategory(category: string): void {
    this.selectedCategory.emit(category);
  }
}
