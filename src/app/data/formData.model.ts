export class FormData {
    cover: string = '';
    currentHealthCover: string = '';
    coveragePreferences: string = '';
    age: string = '';
    occupation: string = '';
    nationality: string = '';
    countryOfResidence: string = '';
    fullName: string = '';  
    email: string = '';
    phone: string = '';

    clear() {
        this.cover = '';
        this.currentHealthCover = '';
        this.coveragePreferences = '';
        this.age = '';
        this.occupation = '';
        this.nationality = '';
        this.countryOfResidence = '';
        this.fullName = '';
        this.email = '';
        this.phone = '';
    }
}

export class CoveragePreferences {
    coveragePreferences: string = '';
}

export class AgeandOccupation {
    age: string = '';
    occupation: string = '';
}
export class NationalityandResidence {
    nationality: string = '';
    countryOfResidence: string = '';

}

export class Personal {
    fullName: string = '';
    email: string = '';
    phone: string = '';
}

