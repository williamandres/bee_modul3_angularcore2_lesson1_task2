import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form = {
    email:"",
    password:"",
    accept: false,
  }

  constructor() { }

  myfunction(){
    console.log(`Email ${this.form.email }  Password ${this.form.password} Accept ${this.form.accept}`)
  }

  ngOnInit(): void {
  }

}
