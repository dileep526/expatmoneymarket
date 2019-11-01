import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { CoveragePreferences }             from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-address'
    ,templateUrl: './coveragepreferences.component.html'
})

export class CoveragePreferencesComponent implements OnInit {
    title = 'Coverage preferences';
    coveragepreferences: CoveragePreferences;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.coveragepreferences = this.formDataService.getCoveragePreferences();
        console.log('CoveragePreferences feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setCoveragePreferences(this.coveragepreferences);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the cover page
            this.router.navigate(['/cover']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the ageandoccupation page
            this.router.navigate(['/ageandoccupation']);
        }
    }
}