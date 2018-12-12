import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { keyValuesToMap } from '@angular/flex-layout/extended/typings/style/style-transforms';



@Injectable()
export class TabelaPeriodicaService {
	constructor(private fbs: AngularFireDatabase) {
	}
	getInfoList() {
		return this.fbs.list('tabela-periodica').valueChanges();
	}
}
