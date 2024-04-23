import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../../services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrl: './post-data.component.css'
})
export class PostDataComponent implements OnInit{

  constructor(private httpServerService: HttpServerService) {}

  ngOnInit(): void {
      const body={
        "name": "Last Stock Company",
        "code": "LSC",
        "price": "876",
        "previousPrice": "765",
        "exchange": "NYSE",
        "favorite": "false"};
      this.httpServerService.postStock(body).subscribe((data) => {
        console.log('postStock', data);
      })
  }
}
