import { Component, OnInit } from '@angular/core';
import { Regalos } from 'src/app/api/models';
import { RegalosControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-regalos',
  templateUrl: './regalos.component.html'
})
export class RegalosComponent implements OnInit {
  listOfData: Regalos[] = [];
  constructor(
    private regalosService:RegalosControllerService
  ){}

  ngOnInit():void{
    this.getData();
  }

  getData():void{
    this.regalosService.find().subscribe(data=>this.listOfData=data);
  }
}
