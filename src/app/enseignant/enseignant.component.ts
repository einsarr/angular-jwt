import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../models/Enseignant.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { EnseignantService } from '../services/enseignant.service';
import { AppStateService } from '../services/app-state.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  title="List of enseignants";
  enseignants$! :Observable<Array<Enseignant>>;
  datas:any;
  constructor(private enseignantService:EnseignantService,private router:Router,public appState:AppStateService,private http:HttpClient){}
  ngOnInit() {
   // this.getEnseignants();
    this.getTest();
  }

  getTest(){
    this.enseignantService.getTest().subscribe(resp=>{
      this.datas = resp
    });
  }

  getEnseignants(){
      this.enseignants$=this.enseignantService.getEnseignants();
  }

  handleDelete(enseignant:Enseignant){
    if(confirm("Do you sure to delete ?"))
      this.enseignantService.deleteEnseignant(enseignant).subscribe({
        next:value =>{
          this.getEnseignants();
        }
      });
  }

  handleEdit(enseignant:Enseignant){
    return this.router.navigateByUrl('/admin/editenseignant/'+enseignant.enseignantId);
  }

  
}
