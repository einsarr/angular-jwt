import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignantService } from '../services/enseignant.service';
import { Enseignant } from '../models/Enseignant.model';
import { Observable } from 'rxjs/internal/Observable';
import { Specialite } from '../models/Specialite.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.css']
})
export class EditEnseignantComponent {
  title="Edit Enseignant";
  enseignantId!:number;
  enseignantFormGroup!: FormGroup;
  specialites$! :Observable<Array<Specialite>>;

  selected:any;
  filtered :any;
  constructor(private activeRoute : ActivatedRoute,private enseignantService:EnseignantService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.getSpecialites();
    this.enseignantId = this.activeRoute.snapshot.params['id'];
    this.enseignantService.getEnseignantById(this.enseignantId).subscribe({
      next : (enseignant)=>{
        this.enseignantFormGroup = this.fb.group({
          enseignantId : this.fb.control(enseignant.enseignantId),
          matricule : this.fb.control(enseignant.matricule),
          prenom : this.fb.control(enseignant.prenom),
          nom : this.fb.control(enseignant.nom),
          cni : this.fb.control(enseignant.cni),
          specialite : this.fb.control(enseignant.specialite),
        });
      },error : error=>{
        console.log(error);
      }
    });
  }

  updateEnseignant(){
    let enseignant: Enseignant = this.enseignantFormGroup.value;
    this.enseignantService.updateEnseignant(enseignant).subscribe({
      next : data=>{
        this.router.navigateByUrl('/admin/enseignants');
      }
    });
  }

  getSpecialites(){
    this.specialites$=this.enseignantService.getSpecialites();
  }

}
