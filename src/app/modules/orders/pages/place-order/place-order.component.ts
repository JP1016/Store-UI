import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map, distinctUntilChanged, debounceTime, filter } from 'rxjs/operators';
import { User } from 'src/app/shared';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  private durationInSeconds=5;
  private userId = new FormControl('',Validators.required);
  public users: User[] = [];
  public selectUserId=null;

  orderForm = new FormGroup({
    userId: this.userId,
    orderCode: new FormControl('',Validators.required),
    orderProduct: new FormControl('',Validators.required),
    orderDescription: new FormControl(''),
  });
  filteredOptions: Observable<User[]>;

  constructor(private httpClient: HttpClientService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.filteredOptions = this.userId.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      distinctUntilChanged(),
      filter(value=>value.length>0),
      map(value => this._filter(value))
    );
  }

  onSubmit(){    
    this.httpClient.placeOrder(this.orderForm.value).subscribe(data=>{
      this.snackBar.open('Order Placed successfully', 'OK', {
        duration: this.durationInSeconds * 1000,
      });
      this.orderForm.reset();
    })

  }

  private _filter(value: string): User[] {
    const filterValue = value.toLowerCase();
    this.httpClient.getUsersByName(filterValue).subscribe((data:User[])=>{
      this.users=[]
        data.map(user=>{
          this.users.push(user)
        })
    })
    return this.users.filter(user => user.firstName.toLowerCase().indexOf(filterValue) === 0);
  }

}
