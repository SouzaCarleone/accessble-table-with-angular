import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { TableDetailsComponent, GrupoDetailsComponent, BlocoDetailsComponent } from '../pages/table-details/table-details.component';
import { DetailsComponent } from '../pages/element-details/details.component';
import { ManagementPanelComponent } from '../pages/contents/management-panel.component';
import { NotFoundComponent } from './notfound.component';
import { AuthGuard } from '../guards/auth-guard';
import { HelpComponent } from '../pages/help/help.component';



export const APP_ROUTES: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'conceitos', component: TableDetailsComponent },
{ path: 'elemento', component: DetailsComponent },
{ path: 'gerenciador', component: ManagementPanelComponent, canActivate: [AuthGuard] },
{ path: 'grupo', component: GrupoDetailsComponent },
{ path: 'ajuda', component: HelpComponent},
{ path: 'bloco', component: BlocoDetailsComponent },
{ path: '404', component: NotFoundComponent },
{ path: '**', redirectTo: '/404' }
];


