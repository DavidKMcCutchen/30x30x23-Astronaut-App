import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '@astronaut-app/api-interfaces';

@Component({
  selector: 'astronaut-app-astronaut-list',
  templateUrl: './astronaut-list.component.html',
  styleUrls: ['./astronaut-list.component.scss']
})
export class AstronautListComponent {
  @Input() persons: Person[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() personViewed = new EventEmitter();
}
