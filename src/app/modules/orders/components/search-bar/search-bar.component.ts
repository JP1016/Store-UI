import {
  Component,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";

import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent{
  @ViewChild('searchText') searchTextRef;

  @Output() 
  searchTrigger = new EventEmitter();

  constructor() {}

  ngAfterViewInit() {
    if (this.searchTextRef) {
      fromEvent(this.searchTextRef.nativeElement, 'keyup')
        .pipe(
            debounceTime(550),
            distinctUntilChanged()
        ).subscribe(
          value=>this.searchTrigger.emit(value)
        )
    }
  }
}
