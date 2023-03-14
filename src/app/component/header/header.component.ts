import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// when click on add number will increse
export class HeaderComponent implements OnInit {

 public totalItem : number = 0;
constructor(private cartService: CartService){ }

  ngOnInit(): void {
      this.cartService.getProducts()
      .subscribe( res=>{
        this.totalItem = res.length;
      })
  }
}
