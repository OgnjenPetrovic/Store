import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../shared/services/buyers.service';

@Component({
  selector: 'app-bayers',
  templateUrl: './bayers.component.html',
  styleUrls: ['./bayers.component.css']
})
export class BayersComponent implements OnInit {

  allBayers: any[]= [];

  constructor(private bayers: BuyersService) { }

  ngOnInit() {
  		this.allBayers = this.bayers.getBuyers();
  }


  delBuyers(bayer)
  {
    this.bayers.delBuyers(bayer);
  }

}

