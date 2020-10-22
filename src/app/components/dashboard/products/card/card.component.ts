import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from '../store/product.action';
import * as productEditActions from '../../../store/action';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() newItemEventId = new EventEmitter<any>();
  @Input() product;

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {

  }
  deleteProduct(id): void{
    this.store.dispatch(new ProductActions.DeleteProduct(id));
  }
  edit(id): void {
    this.newItemEventId.emit(id);
    this.store.dispatch(new productEditActions.ShowEditProductAction());
  }



}