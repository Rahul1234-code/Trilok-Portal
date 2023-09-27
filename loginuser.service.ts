import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
 private baseUrl="http://localhost:8081/user/";
  constructor(private http: HttpClient) { }

  loginUser(user: User):Observable<any>{
    const headers={'content-type':'application/json'}

    const user1 = JSON.stringify(user);
    console.log(user1)
     return this.http.post(`${this.baseUrl}`+'login',user1,{'headers':headers});

    


  }
}
