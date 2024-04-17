import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/service/validators.service';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    private fb = inject(FormBuilder);
    private validatorsService = inject(ValidatorService);

    public myForm: FormGroup = this.fb.group({
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
        mobileNumber: [''],
        city: [''],
        message: ['', [Validators.required]]
    })




    isValidField(field: string): boolean | null {
        return this.validatorsService.isValidField(this.myForm, field);
    }

    getFieldError(field: string): string | null {
        const a = this.validatorsService.getFieldError(this.myForm, field);
        return this.validatorsService.getFieldError(this.myForm, field);

    }

    async onSend() {
        emailjs.init('eRQWGUL-UDCB5xOBx');

        if (this.myForm.invalid) {
            this.myForm.markAllAsTouched();
            Swal.fire('Error', 'Correct the errors in the form', 'error');
            return;
        }

        const { fullName, email, mobileNumber, city, message } = this.myForm.value;

        await emailjs.send("service_82htfmc", "template_ke12abt", {
            from_name: fullName,
            to_name: "Julio Jimenez Portofolio",
            fullName: fullName,
            email: email,
            mobileNumber: mobileNumber,
            city: city,
            message: message

        }).then((send) => {
            Swal.fire('Your message has been sent', '', 'success');
        }).catch((error) =>{
            Swal.fire('Error', message, 'error');
        })

    }



}
