import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { CoverComponent }      from './cover/cover.component';
import { CoveragePreferencesComponent }      from './coveragepreferences/coveragepreferences.component';
import { NationalityandResidenceComponent } from './nationalityandresidence/nationalityandresidence.component';
import { AgeandOccupationComponent } from './ageandoccupation/ageandoccupation.component';
import { PersonalComponent }  from './personal/personal.component';
import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';


@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent, NavbarComponent, CoverComponent,CoveragePreferencesComponent, AgeandOccupationComponent, NationalityandResidenceComponent, PersonalComponent, ResultComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}