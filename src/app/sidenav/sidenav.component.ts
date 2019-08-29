import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../model/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }

  public open:boolean = false;
  public toggleButtonName:any = 'Open';

  ngOnInit(): void {
  }
  
  toggleOpenClose() {
    this.open = !this.open;

    // to change the open/close toggle - to show the left sidebar panel
    if(this.open)  
      this.toggleButtonName = "Close";
    else
      this.toggleButtonName = "Open";
  }

  // createEmployee(currentEmployee: Employee) {
  //   if (currentEmployee.id === null) {
  //     console.log('Create');
  //     this.employeeService.createEmployee(currentEmployee).subscribe(
  //       (data) => {
  //         this.employeeService.getAllEmployee();
  //       });
  //   }

  //   else {
  //     console.log('Update');
  //     this.employeeService.updateEmployee(currentEmployee).subscribe(
  //       (data) => {
  //         this.employeeService.getAllEmployee();
  //       });
  //   }

  // }
  
  
  // updateEmployee(employee: Employee) {
  //   this.employeeService.updateEmployee(employee).subscribe(
  //     (data) => {
  //       this.employeeService.currentEmployee = Object.assign({}, employee);
  //     });
  // }
  
}

