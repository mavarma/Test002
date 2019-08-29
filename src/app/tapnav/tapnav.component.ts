import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../model/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tapnav',
  templateUrl: './tapnav.component.html',
  styleUrls: ['./tapnav.component.css']
})
export class TapnavComponent implements OnInit {

  constructor(private employeeService: EmployeeService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  this.getAllEmployee();
  }
getAllEmployee() {
    this.employeeService.getAllEmployee();
  }
}
