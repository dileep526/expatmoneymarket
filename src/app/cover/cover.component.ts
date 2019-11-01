import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-cover'
    ,templateUrl: './cover.component.html'
})

export class CoverComponent implements OnInit {
    question1 = 'Cover Required For';
    question2 = 'Do you currently have private health cover';
    coverType: string;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.coverType = this.formDataService.getCover();
        console.log('Cover feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setCover(this.coverType);
        return true;
    }


    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the coveragepreferences page
            this.router.navigate(['/coveragepreferences']);
        }
    }
}