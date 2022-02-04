import { Component, OnInit } from '@angular/core';
import studentData from 'src/assets/Student.json';
interface Student {
  id:Number,
  name:String,
  email:String,
  gender:String
}

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }
  
  students: Student[] = studentData;
  // console.log(studentData);
  func(id:any){
    localStorage.setItem("id",JSON.stringify(id));
  }
}
