import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from './.service';





@Component({
  selector: 'app-',
  templateUrl: './.component.html',
  styleUrls: ['./.component.scss'],
})

export class Component implements OnInit {
    public student:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        rollno: '',
        cls: '',
    }




    constructor (
        private Service: Service,
    ) { }

    ngOnInit() {
        this.student.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}