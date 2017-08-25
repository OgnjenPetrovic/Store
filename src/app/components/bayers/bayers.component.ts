import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../shared/services/buyers.service';
import { Bayer } from '../../components/bayers/bayer'; 

@Component({
  selector: 'app-bayers',
  templateUrl: './bayers.component.html',
  styleUrls: ['./bayers.component.css']
})
export class BayersComponent implements OnInit {

  allBayers: any[]= [];
  newBuyer: Bayer = new Bayer('','','','');


  constructor(private bayers: BuyersService) {

   }

  ngOnInit() {
    this.allBayers = this.bayers.getBuyers();
  }

  delBuyers(bayer)
  {
    this.bayers.delBuyers(bayer)
  }

  // addBuyer(newBuyer){
  //   this.bayers.addBuyers(newBuyer);
  // }

  addBuyer(){
    this.bayers.addBuyers(this.newBuyer);
    this.newBuyer = new Bayer('','','','');
  }

}