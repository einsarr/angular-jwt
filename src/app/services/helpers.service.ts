import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  getErrorMessage(fieldName : string, error : ValidationErrors){
    if(error['required']){
      return fieldName + " is Required";
    }else if(error['minlength']){
      return fieldName+ " should have at least "+error['minlength']['requiredLength']+" Characters";
    }else return "";
  }
}
