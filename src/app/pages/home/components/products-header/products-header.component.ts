import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnCountChange = new EventEmitter<number>();
  sort:string = 'desc';
  itemsShowCount:number = 12
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdate(newSort:string): void {
    this.sort = newSort;
  }

  onItemsUpdate(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnUpdate(colsNum: number): void {
    this.columnCountChange.emit(colsNum);
  }

}
