import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from './data.service';
import { Todo } from './types';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'fetching-data';
  array: Todo[] = [];
  constructor(public service: DataService) {

  }
  ngOnInit(): void {
    this.service.getarraydata().subscribe((value) => {
      this.array = value;
      console.warn("value" ,value)

    })

  }
} 
