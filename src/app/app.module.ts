import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteMaterialModule } from './../site-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as Hammer from 'hammerjs';
import {
  RouterModule} from '@angular/router';

import { APP_ROUTES } from './routes';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { DetailsComponent, DialogComponent } from './../pages/element-details/details.component';
import { TableDetailsComponent, GrupoDetailsComponent, BlocoDetailsComponent } from './../pages/table-details/table-details.component';
import { ManagementPanelComponent } from '../pages/contents/management-panel.component';
import { SpinNerComponent } from './spin-ner.component';
import { NotFoundComponent } from './notfound.component';
import { Table } from './../models/table';
import { HelpComponent } from '../pages/help/help.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { MenuChangeDirective } from './menu-change.directive';
import { AuthService } from '../service/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment.prod';
import { AuthGuard } from '../guards/auth-guard';
import { TabelaPeriodicaService } from '../service/tabela-periodica.service';
export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      // override hammerjs default configuration
      'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableDetailsComponent,
    DetailsComponent,
    NotFoundComponent,
    ManagementPanelComponent,
    DialogComponent,
    HelpComponent,
    FooterComponent,
    GrupoDetailsComponent,
    BlocoDetailsComponent,
    MenuChangeDirective,
    SpinNerComponent

  ],
  imports: [
    BrowserModule,
    HttpModule, JsonpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SiteMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment),
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
  ,
  entryComponents: [
    AppComponent,
    DialogComponent,
    SpinNerComponent
],
  providers: [Table, AuthService, AuthGuard, TabelaPeriodicaService,
    {provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
