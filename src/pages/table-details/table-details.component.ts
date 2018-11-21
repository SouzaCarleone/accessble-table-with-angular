import { Component, OnInit } from '@angular/core';
import { TabelaPeriodicaService } from '../../service/tabela-periodica.service';


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
export class TableDetailsComponent implements OnInit {
  step = 0;
  tableArray = [];


  constructor (private tableDetails: TabelaPeriodicaService) { }

  ngOnInit() {
      this.tableDetails.getInfoList().subscribe(
        list => {
            this.tableArray = list.map(item => {
              return {
                  key: item.key,
                ...item.payload.val()
              };
            });
        }
      );
  }

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
