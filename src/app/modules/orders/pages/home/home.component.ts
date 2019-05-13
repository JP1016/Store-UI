import { Component, OnInit, ViewChild } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Order, OrderResponse } from "../../../../shared";
import { HttpClientService } from "src/app/core/services/http-client.service";
import { AppConstants } from "src/app/configs/app-constants";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  //Table Attributes
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = [
    "orderProduct",
    "orderDescription",
    "firstName",
    "lastName"
  ];
  dataSource: MatTableDataSource<Order>;
  products: Array<Order> = [];

  //Pagination Attributes
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 15];
  pageNumber = 0;
  searchTerm: String = "";
  sortValue = "orderProduct";
  sortOrder = "ASC";
  pageEvent: PageEvent;

  constructor(private httpClient: HttpClientService) {
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.refreshTable();
  }

  refreshTable() {
    this.httpClient
      .listOrders(
        this.pageNumber,
        this.pageSize,
        this.sortValue,
        this.sortOrder,
        this.searchTerm
      )
      .subscribe((data: OrderResponse) => {
        this.products = data.content;
        this.dataSource = new MatTableDataSource(this.products);
        this.length = data.totalElements;
      });
  }

  pageChangeEvent(event) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.refreshTable();
  }

  sortData(event) {
    if (AppConstants.USER_TABLE_ENTRIES.includes(event.active)) {
      this.sortValue = AppConstants.USER_TABLE_PREFIX + event.active;
    } else {
      this.sortValue = event.active;
    }
    this.sortOrder = event.direction;
    this.refreshTable();
  }

  searchInput(searchTerm: String) {
    this.searchTerm = searchTerm;
    this.refreshTable();
  }
}
