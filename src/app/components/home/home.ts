import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  appDescription: string = "A simple Angular application to register users and view their profiles. Manage your account, explore features, and get started in seconds.";
  appTitle: string = "Hello! Welcome to our Website";
  welcomeMessage: string = "Thanks for using our Website!";
  
  stringExample: string = "Hello World";
  numberExample: number = 5;
  booleanExample: boolean = true;
}
