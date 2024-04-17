import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidatorService {

    constructor() { }

    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    public isValidField(form: FormGroup, field: string): boolean | null {
        return form.controls[field].errors && form.controls[field].touched
    }

    getFieldError(form: FormGroup, field: string): string | null {
        if (!form.controls[field]) return null;

        const errors = form.controls[field].errors || {};

        if (Object.keys(errors).includes('pattern') && field === 'email') return `* Formato de email incorrecto`

        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return 'This field is required'
                case 'minlength':
                    return `Enter at least ${errors['minlength'].requiredLength} characters`
            }
        }
        return null;
    }

}
