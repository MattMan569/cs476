import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    private signupForm: FormGroup;
    private companyNameLabel = 'Search for a company';
    private lastValue = 'existing';

    constructor(private router: Router) {}

    ngOnInit() {
        // Setup the form controls
        // Arg 1: default, arg 2: validators
        this.signupForm = new FormGroup({
            firstname: new FormControl(null, Validators.required),
            middlename: new FormControl(),
            lastname: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            phonenumber: new FormControl(null, Validators.required),
            companyoption: new FormControl('existing', Validators.required),
            companyname: new FormControl(null, null),
            companyjoincode: new FormControl(null, Validators.required),
        });

        // Subscribe to changes in the form data
        // to update the company name label.
        // New companies require a name to be input, existing ones do not.
        this.signupForm.valueChanges.subscribe(value => {
            if (value.companyoption !== this.lastValue) {
                if (value.companyoption === 'new') {
                    this.lastValue = 'new';
                    this.companyNameLabel = 'Name of your new company';
                    this.signupForm.patchValue({ companyjoincode: this.randomString(6) });
                    this.signupForm.get('companyname').setValidators([Validators.required]);
                    this.signupForm.get('companyname').updateValueAndValidity();
                } else {
                    this.lastValue = 'existing';
                    this.companyNameLabel = 'Search for a company';
                    this.signupForm.patchValue({ companyjoincode: null });
                    this.signupForm.get('companyname').setValidators(null);
                    this.signupForm.get('companyname').updateValueAndValidity();
                }
            }
        });
    }

    // Form submission
    onSubmit() {
        console.log(this.signupForm);
        this.router.navigate(['/signin']);
    }

    // Form cancelation
    // Redirect back to landing page
    onCancel() {
        this.router.navigate(['/']);
    }

    getCompanyNameLabel() {
        return this.companyNameLabel;
    }

    getForm() {
        return this.signupForm;
    }

    // Generate a random string
    private randomString(length: number) {
        let randomString = '';
        const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            randomString += possibleCharacters.charAt(
                Math.floor(Math.random() * possibleCharacters.length),
            );
        }

        return randomString;
    }
}
