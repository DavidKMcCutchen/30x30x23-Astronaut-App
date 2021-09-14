import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emptyPerson, Person } from '@astronaut-app/api-interfaces';
import { AstroFacade } from '@astronaut-app/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'astronaut-app-astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.scss']
})
export class AstronautsComponent implements OnInit {
  allAstros$: Observable<Person[]> = this.astroFacade.allAstros$;
  selectedAstro$: Observable<Person> = this.astroFacade.selectedAstros$;

  form: FormGroup;

  constructor(
    private astroFacade: AstroFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.astroFacade.mutations$.subscribe((_) => this.resetPerson());
  }

  ngOnInit() {
    this.initForm();
    this.astroFacade.loadAstros();
    this.resetPerson()

    const astroRouteId = this.route.snapshot.params['id'];

    if (astroRouteId) {
      this.loadPerson((astroRouteId))
    }
  }

  viewPerson(personId: string) {
    this.router.navigate(["persons", personId])
  }

  loadPerson(personId: string) {
    this.astroFacade.selectAstro(personId);
    this.astroFacade.loadAstro(personId);
  }

  selectPerson(person: Person) {
    this.astroFacade.selectAstro(person.name)
    this.form.patchValue(person);
  }

  savePerson(person: Person) {
    this.astroFacade.saveAstro(person);
  }

  deletePerson(person: Person) {
    this.astroFacade.deleteAstro(person);
  }

  resetPerson() {
    this.form.reset();
    this.selectPerson(emptyPerson)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      name: [''],
      craft: ['']
    })
  }
}
