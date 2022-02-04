import { Component, Input, OnInit } from '@angular/core';
import studentData from 'src/assets/Student.json';
import { HttpClient } from '@angular/common/http';




interface Student {
  id:Number,
  name:String,
  email:String,
  gender:String
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  name!:any;
  students: Student[] = studentData;
  var!:number;

  // private _url:String = 'assets/Student.json'
  // id:Number = 0;
  // students:any =[];
  //  name:String = "";
  //  email:String = "";
  //  gender:String ="";

  

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.var=JSON.parse(JSON.stringify(localStorage.getItem("id")))
    // console.log(this.students);
    this.name=this.students[this.var-1]
    console.log(this.name.name);
// students:student[] = studentData



}

 
}
