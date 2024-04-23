import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../../services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrl: './get-data.component.css'
})
export class GetDataComponent implements OnInit{

  constructor(private httpServerService: HttpServerService) {}

  ngOnInit(): void {
      this.httpServerService.getStocks().subscribe((data) => {
        console.log('stocks', data);
      })
  }
}
