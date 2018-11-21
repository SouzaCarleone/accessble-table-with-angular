import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class TabelaPeriodicaService {
	tabelaPeriodica: AngularFireList<any>;
	constructor(private firebase: AngularFireDatabase) {
	}
	getInfoList() {
		this.tabelaPeriodica = this.firebase.list('tabela-periodica');
		return this.tabelaPeriodica.snapshotChanges();
	}
}
