import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { firstValueFrom } from 'rxjs';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private appState:AppStateService) { }


  async login(username : string, password : string){
    let user:any = await firstValueFrom(this.http.post( "http://localhost:8089/api/v1/auth/authenticate",{username,password}));
    if(password==atob(user.password)){
      let decodeJwt:any = jwtDecode(user.token);
      this.appState.setAuthState({
          isAuthenticated : true,
          username : decodeJwt.sub,
          roles : decodeJwt.roles,
          token : user.token
      });
      return Promise.resolve(true);
    }else{
      return Promise.reject("Bad credentials");
    }
  }

  authenticateUser(user:any){

  }
}
