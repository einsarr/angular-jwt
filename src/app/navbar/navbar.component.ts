import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  actions : Array<any> = [
    {title :"Home","route":"/admin/home",icon: "house"},
    {title :"Products","route":"/admin/products",icon: "search"},
    {title :"New Product","route":"/admin/newproduct",icon: "minecart"},
    {title :"Enseignants","route":"/admin/enseignants",icon: "person-vcard"},
    {title :"New Enseignant","route":"/admin/newenseignant",icon: "arrow-down-up"}
  ];

  currentAction:any;

  constructor(public appState:AppStateService,private router:Router){}

  setCurrentAction(action:any){
    this.currentAction = action;
  }


  login(){
    this.router.navigateByUrl("/login");
  }

  logout(){
    this.appState.authState={};
    this.router.navigateByUrl("/login");
  }


}
