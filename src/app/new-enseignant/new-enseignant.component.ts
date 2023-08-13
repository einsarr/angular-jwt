import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnseignantService } from '../services/enseignant.service';
import { Router } from '@angular/router';
import { Enseignant } from '../models/Enseignant.model';
import { Observable } from 'rxjs/internal/Observable';
import { Specialite } from '../models/Specialite.model';
import { HelpersService } from '../services/helpers.service';

@Component({
  selector: 'app-new-enseignant',
  templateUrl: './new-enseignant.component.html',
  styleUrls: ['./new-enseignant.component.css']
})
export class NewEnseignantComponent {
  
  title = "New Enseignant";
  formulaire!:FormGroup;
  specialites$! :Observable<Array<Specialite>>;
  constructor(private fb: FormBuilder,private enseignantService:EnseignantService,private router:Router,public helper:HelpersService){
    this.form();
  }

  ngOnInit(){
    this.getSpecialites();
  }

  form(){
      this.formulaire =  this.fb.group({
        matricule: ['',[Validators.required,Validators.minLength(16)]],
        prenom:['',[Validators.required]],
        nom:['',[Validators.required]],
        cni:['',[Validators.required]],
        specialite:[null,Validators.required],
      });
  }

  saveProduct(){
    let enseignant:Enseignant=this.formulaire.value;
    this.enseignantService.saveEnseignant(enseignant).subscribe({
      next : data =>{
        this.router.navigateByUrl('/enseignants');
      }, error : err =>{
        console.log(err);
      }
    });
  }

  getSpecialites(){
    this.specialites$=this.enseignantService.getSpecialites();
  }
}
