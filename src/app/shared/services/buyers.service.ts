import { Injectable } from '@angular/core';

@Injectable()
export class BuyersService {

  private bayers = [
    {
      id :1,
      firstName: "Jovan",
      lastName: "Micanov",
      email: "jovos@gmail.com",
    },
    {
      id :2,
      firstName: "Gedza",
      lastName: "Retardov",
      email: "gedzinov@yahoo.com",
    },
    {
      id :3,
      firstName: "Kica",
      lastName: "Pusic",
      email: "kipusic@hotmail.com",
    },
    {
      id :4,
      firstName: "Sinisa",
      lastName: "Todorovic",
      email: "siki@mail.com",
    },
  ]

  constructor() { }

  public getBuyers(){
    return this.bayers;
  }


  public delBuyers(bayer){
    const index = this.bayers.indexOf(bayer);
		this.bayers.splice(index, 1);
  }
  
   public addBuyers(newBuyer){
		this.bayers.push(newBuyer);
}
 
 public getBuyer(id){
	  return this.bayers.find((bayer) => {
      return bayer['id'] == id;
    })
}


}

