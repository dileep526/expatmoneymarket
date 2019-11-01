import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { NationalityandResidence }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component({
  selector: 'app-nationalityandresidence',
  templateUrl: './nationalityandresidence.component.html'

})
export class NationalityandResidenceComponent implements OnInit {
  title = 'Please tell us about yourself.';
  nationalityandresidence: NationalityandResidence;
  form: any;
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.nationalityandresidence = this.formDataService.getNationalityandResidence();
      console.log('NationalityAndResidence feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setNationalityandResidence(this.nationalityandresidence);
      return true;
  }

     goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the ageandoccupation page
          this.router.navigate(['/ageandoccupation']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the personal page
          this.router.navigate(['/personal']);
      }
  }
}
