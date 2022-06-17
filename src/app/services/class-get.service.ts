import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassObject } from '../Models/class-object';

@Injectable({
  providedIn: 'root'
})
export class ClassGetService {

  readonly ApiUrl = 'https://localhost:7015/api/ClassObjects/GetAllClasses'


  public classes!: ClassObject[];// the array to hold the class data from the SQL server

  constructor(private http: HttpClient) { }

  async GetClasses()
  {
    console.log("Getting Class Data From Server...");

      await this.http.get<ClassObject[]>(this.ApiUrl, {responseType: 'json'}).subscribe((response: ClassObject[]) =>{
      //expect the data to be json/plain text -> map to an array of type string data
      console.log(response);

      this.classes = response;
      console.log(this.classes[0].ClassName)
    })
    
  }

}
