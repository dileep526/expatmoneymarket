import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { AgeandOccupation }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component({
  selector: 'app-ageandoccupation',
  templateUrl: './ageandoccupation.component.html'
})
export class AgeandOccupationComponent  implements OnInit {
  title = 'Please tell us about yourself.';
  ageandoccupation: AgeandOccupation;
  form: any;
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.ageandoccupation = this.formDataService.getAgeandOccupation();
      console.log('ageandoccupation feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setAgeandOccupation(this.ageandoccupation);
      return true;
  }

     goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the ageandoccupation page
          this.router.navigate(['/coveragepreferences']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the personal page
          this.router.navigate(['/nationalityandresidence']);
      }
  }
}
