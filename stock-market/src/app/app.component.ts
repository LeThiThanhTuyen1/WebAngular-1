import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from './services/message.service';
import { MatMenuListItem } from './model/matMenuListItem';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Stock Market App';
  menuListItems: MatMenuListItem[] = [];
  @ViewChild(MatMenuTrigger) triggerBtn!: MatMenuTrigger;
  isMenuOpen = false;
  stockMarket: any;
  isLoggedIn: boolean = false;
  
  constructor(public messageService: MessageService,
              private router: Router
  ) {}
  
  ngOnInit(): void {
    this.messageService.message = 'Hello Message Service!';
    this.fetchMenuListItem();
  }

  openMatMenuProgrammatically() {
    this.triggerBtn.openMenu();
    this.isMenuOpen = true;
  }
  
  closeMenu() {
    this.isMenuOpen = false;
  }

  fetchMenuListItem(): void {
    this.menuListItems = [
      {menuLinkText: 'Home',
        menuIcon: 'home',
        isDisabled: false
      },
      {menuLinkText: 'Create Stock',
        menuIcon: '',
        isDisabled: false
      },
      {menuLinkText: 'Post Data',
        menuIcon: '',
        isDisabled: false
      },
      {menuLinkText: 'Get Data',
        menuIcon: '',
        isDisabled: false
      },
      {menuLinkText: 'Close',
        menuIcon: 'close',
        isDisabled: false
      }
    ]
  }

  clickMenuItem(menuItem: MatMenuListItem) {
    switch(menuItem.menuLinkText) 
    {
      case 'Home':
        this.router.navigate(['/stocks/list']);
        break;
      case 'Post Data':
        this.router.navigate(['post']);
        break;
      case 'Get Data':
        this.router.navigate(['get']);
        break;
      case 'Create Stock':
        this.router.navigate(['/stocks/create']);
        break;
    }
    // Ẩn thanh menu ngang sau khi thực hiện thao tác với các menu dọc
    this.isMenuOpen = false;
}


}
