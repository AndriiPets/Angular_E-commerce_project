import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();


  sort:string = 'desc';
  itemsShowCount:number = 12
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdate(newSort:string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdate(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnUpdate(colsNum: number): void {
    this.columnCountChange.emit(colsNum);
  }

}
