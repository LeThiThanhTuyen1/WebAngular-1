import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public message: string ='';
  public formSubmitted: boolean = false;

  constructor(private userService: UserService,
              private router: Router
  ) {}

  login(): void {
    this.formSubmitted = true;
  
    if (this.username && this.password) {
      this.userService.login(this.username, this.password)
        .subscribe(
          response => {
            switch(response) {
              case 'success':
                console.log('Login successful');
                // Đăng nhập thành công, điều hướng đến trang khác
                this.router.navigate(['/stocks/list']);
                break;
              case 'invalid_username':
                console.error('Invalid username');
                this.message = 'Username does not exist'; // Hiển thị thông báo lỗi
                break;
              case 'invalid_password':
                console.error('Invalid password');
                this.message = 'Invalid password'; // Hiển thị thông báo lỗi
                break;
              case 'unknown_error':
                console.error('Unknown error');
                this.message = 'An unknown error occurred during login'; // Hiển thị thông báo lỗi
                break;
              default:
                console.error('Unknown response');
                this.message = 'An unknown response was received during login'; // Hiển thị thông báo lỗi
            }
          },
          error => {
            console.error('Login failed', error);
            this.message = 'An error occurred during login'; // Hiển thị thông báo lỗi
          }
        );
    } else {
      this.message = 'Please fill in all required fields';
    }
  }
  
}
