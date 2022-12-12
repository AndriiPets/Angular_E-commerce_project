import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/servicies/store.service'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit ,OnDestroy {
  @Output() showCategory = new EventEmitter<string>();

  categories: Array<string> | undefined;
  categorySubscription: Subscription | undefined;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.categorySubscription = this.storeService.getAllCategories()
      .subscribe(response => this.categories = response)
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }

}
