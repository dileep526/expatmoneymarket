import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoverComponent }       from './cover/cover.component';
import { CoveragePreferencesComponent }     from './coveragepreferences/coveragepreferences.component';
import { AgeandOccupationComponent }  from './ageandoccupation/ageandoccupation.component';
import { NationalityandResidenceComponent } from './nationalityandresidence/nationalityandresidence.component';
import { PersonalComponent }    from './personal/personal.component';
import { ResultComponent }      from './result/result.component';

import { WorkflowGuard }        from './workflow/workflow-guard.service';
import { WorkflowService }      from './workflow/workflow.service';
import { AgeandOccupation } from './data/formData.model';


export const appRoutes: Routes = [
    // 1st Route
    { path: 'cover',  component: CoverComponent }, 
    // 2nd Route
    { path: 'coveragepreferences',  component: CoveragePreferencesComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'ageandoccupation',  component: AgeandOccupationComponent, canActivate: [WorkflowGuard] },
    // 4th Route
    { path: 'nationalityandresidence',  component: NationalityandResidenceComponent, canActivate: [WorkflowGuard] },
    // 5th Route
    { path: 'personal',  component: PersonalComponent, canActivate: [WorkflowGuard] },
    // 6th Route
    { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
    // 5th Route
    { path: '',   redirectTo: '/cover', pathMatch: 'full' },
    // 6th Route
    { path: '**', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule {}