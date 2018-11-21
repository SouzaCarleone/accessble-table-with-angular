import { Component } from '@angular/core';

@Component({
moduleId: module.id,
selector: 'app-grupo-details',
templateUrl: './grupo-details.component.html',
styleUrls: ['./table-details.component.scss']
})
export class GrupoDetailsComponent {}

@Component({
  moduleId: module.id,
  selector: 'app-bloco-details',
  templateUrl: './bloco-details.component.html',
  styleUrls: ['./table-details.component.scss']
  })
  export class BlocoDetailsComponent {}

@Component({
  moduleId: module.id,
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
