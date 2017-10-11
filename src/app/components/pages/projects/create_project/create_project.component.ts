import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/services/login.service";
import { Router } from "@angular/router";
import { ProjectCreationFormService, FormLocation } from "app/services/project-creation-form.service";

@Component({
  selector: 'app-create-project-page',
  templateUrl: './create_project.component.html',
  styleUrls: ['./create_project.component.css']
})
export class CreateProjectPageComponent implements OnInit {
  private formLocation = FormLocation;

  constructor(private loginService: LoginService, private router: Router, private projectCreationFormService: ProjectCreationFormService) { }

  ngOnInit() {
    if (!this.loginService.isLoggedIn()){
      this.loginService.setPostLoginRedirect('./create');
      this.loginService.redirectToLogin();
    }

    this.projectCreationFormService.reset();
  }

}
