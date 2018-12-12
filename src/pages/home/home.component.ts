import { Component, OnInit } from '@angular/core';
import { TabelaPeriodicaService } from '../../service/tabela-periodica.service';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'app-home-section',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    periodos: Observable<any[]>;
    items: Observable<any[]>;
    periodo; nivel; subn;

    constructor(private tabelaPeriodica: TabelaPeriodicaService) { }

    ngOnInit() {
        this.items = this.tabelaPeriodica.getInfoList();
        console.log(JSON.stringify(this.items));
    }


}
