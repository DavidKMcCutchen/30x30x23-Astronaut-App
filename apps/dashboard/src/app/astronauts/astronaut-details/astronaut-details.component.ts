import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Person } from '@astronaut-app/api-interfaces';

@Component({
  selector: 'astronaut-app-astronaut-details',
  templateUrl: './astronaut-details.component.html',
  styleUrls: ['./astronaut-details.component.scss']
})
export class AstronautDetailsComponent {
  currentAstro: Person;
  originalTitle: string;
  

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set person(value) {
    if (value) this.originalTitle = value.name;
    this.currentAstro = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
