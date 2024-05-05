import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  password: string = '';
  message: string = '';
  id: string = '';
  formSubmitted: boolean = false;
  usernameExists: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  checkUsername() {
    this.message = '';

    this.userService.getAllAccounts()
      .subscribe(accounts => {
        this.usernameExists = accounts.some(account => account.username === this.username);
      });
  }
  
  register(): void {
    this.formSubmitted = true;
    if(this.username && this.password) {
      // Kiểm tra nếu username đã tồn tại trước khi đăng ký
    if (this.usernameExists) {
      this.message = 'Username already exists';
      return;
    }

    // Nếu username chưa tồn tại, thực hiện đăng ký
    this.userService.register(this.username, this.password)
      .subscribe(
        response => {
          console.log('Registration successful', response);
          this.message = 'Registration successful';
          this.router.navigate(['login']);
        },
        error => {
          console.error('Registration failed', error);
          this.message = error;
        }
      );
    } else {
      this.message = 'Please fill in all required fields';
    }
  }
}
