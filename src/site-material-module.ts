import {NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule




} from '@angular/material';
import { ObserversModule } from '@angular/cdk/observers';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
    exports: [
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
        MatCardModule,
        MatListModule,
        MatGridListModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatTooltipModule,
        MatChipsModule,
        MatStepperModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        ObserversModule,

    ]

})
export class SiteMaterialModule {}
