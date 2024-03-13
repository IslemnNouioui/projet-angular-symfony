// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorService } from '../services/behavior.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  yourName: string ='';
  constructor(private behaviorService:BehaviorService){}
  ngOnInit():void {
  }
  sendName(form:NgForm){
    this.behaviorService.setName(this.yourName)
  }
  
}