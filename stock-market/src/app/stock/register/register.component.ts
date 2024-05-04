import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public username: string = '';
  public password: string = '';

  public message: string = '';
  constructor(private userService: UserService,
              private router: Router) {}

  regiter() {
    this.userService.register(this.username, this.password)
      .subscribe((resp: any) => {
        console.log('Successfully registered');
        this.message = resp.msg;
        this.router.navigate(['login']);
      }, (err: any) => {
        console.error('Error registering', err);
        this.message = err.error.msg;
      });
  }  
}
