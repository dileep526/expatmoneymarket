import { Injectable }             from '@angular/core';

import { FormData, CoveragePreferences, AgeandOccupation, NationalityandResidence, Personal}      from './formData.model';
import { WorkflowService }        from '../workflow/workflow.service';
import { STEPS }                  from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();

    private iscoverFormValid: boolean = false;
    private iscoveragePreferencesFormValid: boolean = false;
    private isAgeandOccupationFormValid: boolean = false;
    private isNationalityandResidence: boolean = false;
    private isPersonalFormValid: boolean = false;


    constructor(private workflowService: WorkflowService) { 
    }

    getCover() : string {
        // Return the cover type
        return this.formData.cover;
    }
    
    setCover(data: string) {
        // Update the cover type only when the cover Form had been validated successfully
        this.iscoverFormValid = true;
        this.formData.cover = data;
        // Validate cover Step in coverflow
        this.workflowService.validateStep(STEPS.cover);
    }

    getCoveragePreferences() : CoveragePreferences {
        // Return the CoveragePreferences data
        var coveragepreferences: CoveragePreferences = {
            coveragePreferences: this.formData.coveragePreferences
        };
        return coveragepreferences;
    }

    setCoveragePreferences(data: CoveragePreferences) {
        // Update the coveragePreferences data only when the coveragePreferences Form had been validated successfully
        this.iscoveragePreferencesFormValid = true;
        this.formData.coveragePreferences  = data.coveragePreferences;
        // Validate coveragePreferences Step in coverflow
        this.workflowService.validateStep(STEPS.coveragepreferences);
    }


    getAgeandOccupation() : AgeandOccupation {
        // Return the AgeandOccupation data
        var ageandOccupation: AgeandOccupation = {
            age: this.formData.age,
            occupation: this.formData.occupation
        };
        return ageandOccupation;
    }

    setAgeandOccupation(data: AgeandOccupation) {
        // Update the AgeandOccupation data only when the AgeandOccupation Form had been validated successfully
        this.isAgeandOccupationFormValid = true;
        this.formData.age  = data.age;
        this.formData.occupation = data.occupation;
        // Validate AgeandOccupation Step in workflow
        this.workflowService.validateStep(STEPS.AgeandOccupation);
    }

    
    getNationalityandResidence() : NationalityandResidence {
        // Return the NationalityandResidence data
        var nationalityandResidence: NationalityandResidence = {
            nationality: this.formData.nationality,
            countryOfResidence: this.formData.countryOfResidence
        };
        return nationalityandResidence;
    }

    setNationalityandResidence(data: NationalityandResidence) {
        // Update the NationalityandResidence data only when the NationalityandResidence Form had been validated successfully
        this.isNationalityandResidence = true;
        this.formData.nationality  = data.nationality;
        this.formData.countryOfResidence = data.countryOfResidence;
        // Validate NationalityandResidence Step in workflow
        this.workflowService.validateStep(STEPS.NationalityandResidence);
    }

    
    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            fullName: this.formData.fullName,
            email: this.formData.email,
            phone: this.formData.phone
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.fullName = data.fullName;
        this.formData.email = data.email;
        this.formData.phone = data.phone;
        // Validate Personal Step in workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the coverflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.iscoverFormValid = this.iscoveragePreferencesFormValid = this.isAgeandOccupationFormValid = this.isNationalityandResidence = this.isPersonalFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.iscoverFormValid &&
                this.iscoveragePreferencesFormValid && 
                this.isAgeandOccupationFormValid &&
                this.isNationalityandResidence &&
                this.isPersonalFormValid ;
    }
}