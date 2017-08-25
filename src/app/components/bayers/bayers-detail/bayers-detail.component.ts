import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../../shared/services/buyers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bayers-detail',
  templateUrl: './bayers-detail.component.html',
  styleUrls: ['./bayers-detail.component.css']
})
export class BayersDetailComponent implements OnInit {

  public buyer: any = {};

  constructor(private route: ActivatedRoute,
              private buyers: BuyersService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id, 'xxxx',  this.buyers.getBuyer(id));
    this.buyer = this.buyers.getBuyer(id);
    
  }

}
