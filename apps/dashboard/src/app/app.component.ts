import { Component } from '@angular/core';

@Component({
  selector: 'astronaut-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Astronauts in Space';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'astros', icon: 'view_list', title: 'Astronauts'}
  ]
}
