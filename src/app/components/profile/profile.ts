import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  firstname: string = 'Vin Chrysler';
  lastname: string = 'Sabela';
  age: number = 19;
  email:string='20243818@s.ubaguio.edu';
  location:string='Phillipines';
  bio:string='Life is Good';
}
