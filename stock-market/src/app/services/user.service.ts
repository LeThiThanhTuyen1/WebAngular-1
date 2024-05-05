import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of, map, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:4000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,
              private router: Router
  ) { }

  checkUsernameExistsById(id: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/accounts/${id}`);
  }   

  getAllAccounts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/accounts`);
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/accounts/`, { username, password }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 409) {
          return throwError('Username already exists');
        } else if (error.status === 400) {
          return throwError('Invalid password');
        } else {
          return throwError('Registration failed');
        }
      })
    );
  }
  
  login(username: string, password: string): Observable<string> {
    return this.http.get<any[]>(`${this.apiUrl}/accounts`).pipe(
      map(data => {
        const matchedAccount = data.find(account => account.username === username);
        if (matchedAccount) {
          if (matchedAccount.password === password) {
            // Trả về mã lỗi 'success' nếu username và password đều đúng
            return 'success';
          } else {
            // Trả về mã lỗi 'invalid_password' nếu password không đúng
            return 'invalid_password';
          }
        } else {
          // Trả về mã lỗi 'invalid_username' nếu username không tồn tại
          return 'invalid_username';
        }
      }),
      catchError(() => {
        // Trả về mã lỗi 'unknown_error' nếu có lỗi xảy ra trong quá trình gọi API
        return of('unknown_error');
      })
    );
  }
  
  
  logout(): void {
    // Xóa token khỏi local storage khi đăng xuất
    localStorage.removeItem('currentUser');
    // Điều hướng đến trang đăng nhập
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
  }  
}
