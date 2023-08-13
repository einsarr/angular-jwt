import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enseignant } from '../models/Enseignant.model';
import { Observable } from 'rxjs/internal/Observable';
import { Specialite } from '../models/Specialite.model';
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {


  baseUrl:string = "http://localhost:8565";

  constructor(private http:HttpClient) { }

  public getEnseignants():Observable<Array<Enseignant>>{
      return this.http.get<Array<Enseignant>>(this.baseUrl+"/enseignants");
  }

  public deleteEnseignant(enseignant:Enseignant){
    return this.http.delete<Enseignant>(this.baseUrl+"/enseignant/"+enseignant.enseignantId);
  }

  saveEnseignant(enseignant:Enseignant){
    return this.http.post<Enseignant>(this.baseUrl+"/enseignant",enseignant);
  }

  getEnseignantById(enseignantId: number){
    return this.http.get<Enseignant>(this.baseUrl+"/enseignant/"+enseignantId);
  }

  updateEnseignant(enseignant:Enseignant){
    return this.http.put<Enseignant>(this.baseUrl+"/enseignant/"+enseignant.enseignantId,enseignant);
  }

  public getSpecialites():Observable<Array<Specialite>>{
    return this.http.get<Array<Specialite>>(this.baseUrl+"/specialites");
  }

  public getTest(){
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlaW5zYXJyQGdtYWlsLmNvbSIsImlhdCI6MTY5MTg3ODE1MCwiZXhwIjoxNjkxOTY0NTUwfQ.bsMgJkFSRudEgMSwbfywQ6HUuLt5DERbSAwAAaSPiaU";
    let head_obj = new HttpHeaders().set("Authorization","Bearer "+token)
    return this.http.get("http://localhost:8089/api/v1/admin",{headers:head_obj})
  }
}
