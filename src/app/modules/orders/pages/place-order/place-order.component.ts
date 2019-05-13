import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  private durationInSeconds=5;
  orderForm = new FormGroup({
    userId: new FormControl('',Validators.required),
    orderCode: new FormControl('',Validators.required),
    orderProduct: new FormControl('',Validators.required),
    orderDescription: new FormControl(''),
  });
  constructor(private httpClient: HttpClientService,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.orderForm.value)


    this.httpClient.placeOrder(this.orderForm.value).subscribe(data=>{
      this.snackBar.open('Order Placed successfully', 'OK', {
        duration: this.durationInSeconds * 1000,
      });
      this.orderForm.reset();
    })
  }

}
