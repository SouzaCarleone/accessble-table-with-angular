import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/Rx';
import * as firebase from 'firebase/app';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTabChangeEvent, MatSnackBar } from '@angular/material';
import { AuthService } from '../../service/auth.service';
import { AuthGuard } from '../../guards/auth-guard';


@Component({
    moduleId: module.id,
    selector: 'app-management-panel',
    templateUrl: './management-panel.component.html',
    styleUrls: ['./management-panel.component.scss'],
  })

  export class ManagementPanelComponent implements OnInit {
    isLinear = false; hide: string; currentTab= 0; conteudo; titulo;
    Dtexto: string; userName: string; urlpictute: any;
    user: Observable<firebase.User>;
    firstFormGroup: FormGroup;
    @ViewChild('tabGroup') tabGroup;


    constructor(private _formBuilder: FormBuilder,
       public snackBar: MatSnackBar, private auth: AuthService, private authGuard: AuthGuard,
      private fdb: AngularFireDatabase) {   }

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        conteudo: new FormControl('', [Validators.required]),
        titulo: new FormControl('', [Validators.required])
         });
         if (this.authGuard.canActivate && this.auth.authenticated) {
         this.snackBar.open('Bem-Vindo ' + this.auth.name, 'Login com Sucesso', { duration: 2000 });
        } else if (!this.auth.authenticated) {
          this.auth.router.navigate(['/']);
          this.snackBar.open('Desculpe tivemos um problema durante a Autenticação ', 'Login Mal-Sucedido', { duration: 2000 });
        } else if (!this.auth.authenticated) {
          this.auth.logOut();
          this.auth.router.navigate(['/']);
        }
    }

    tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
     this.currentTab = tabChangeEvent.index;
     console.log(this.currentTab);
    }

    getErrorMessage() {
      if (this.titulo) {
      return this.titulo.hasError('required') ? 'Você deve digitar algum valor' :
          this.titulo.hasError('título') ? 'Não é um Título' :
              '';
            }
          if (this.conteudo) {
            return this.conteudo.hasError('required') ? 'Você deve digitar algum valor' :
          this.conteudo.hasError('texto') ? 'Não é um Texto' :
              '';
          }
    }

    onSubmit(f) {
      if (f.value.titulo !== null && f.value.conteudo !== null) {
        if (this.currentTab.valueOf() === 0) {
          console.log(f.value.titulo);
        }

      }
    }
    onClick(n: string) {
      if (n === 'A') {
        this.hide = 'A';
      }
      if (n === 'B') {
        this.hide = 'B';
      }
      if (n === 'C') {
        this.hide = 'C';
      }
    }
  }
