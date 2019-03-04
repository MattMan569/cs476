import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    constructor() {}

    //

    genders = ['male', 'female'];
    forbiddenUsernames = ['Chris', 'Anna'];

    signupForm: FormGroup;

    companyNameLabel = 'Search for a company';

    ngOnInit() {
        // Setup the form controls
        this.signupForm = new FormGroup({
            firstname: new FormControl(),
            middlename: new FormControl(),
            lastname: new FormControl(),
            companyoption: new FormControl('existing'),
            companyname: new FormControl(),
        });

        // Subscribe to changes in the form data
        // to update the company nme lebel
        this.signupForm.valueChanges.subscribe(value => {
            if (value.companyoption === 'new') {
                this.companyNameLabel = 'Name of your new company';
            } else {
                this.companyNameLabel = 'Search for a company';
            }
        });

        // Listen to changes in the form's values
        // this.signupForm.valueChanges.subscribe(value => {
        //     console.log(value);
        // });

        // Listen to changes in the form's status (VALID, INVALID, PENDING)
        // this.signupForm.statusChanges.subscribe(status => {
        //     console.log(status);
        // });

        // Override the form's values, eg) provide defaults
        // this.signupForm.setValue({
        //     userData: {
        //         username: 'Max',
        //         email: 'max@test.com'
        //     },
        //     gender: 'male',
        //     hobbies: []
        // });

        // 'hobbies' requires the controls to be prepopulated
        // Must add controls before setting the values
        const defaultHobbies = ['hiking', 'cooking', 'eating'];
        for (let i = 0; i < defaultHobbies.length; ++i) {
            this.onAddHobby();
        }

        // Patch specific form values
        this.signupForm.patchValue({
            userData: {
                username: 'Lucy',
                email: 'lucy@test.com',
            },
            gender: 'female',
            // Must already have controls
            hobbies: defaultHobbies,
        });
    }

    // We already have the form,
    // don't need a local reference
    onSubmit() {
        console.log(this.signupForm);
        console.log(this.signupForm.value.userData.username);

        this.signupForm.reset();
    }

    // Add a new control to the form
    onAddHobby() {
        (this.signupForm.get('hobbies') as FormArray).push(
            new FormControl(null, Validators.required),
        );

        // Or:
        // const control = new FormControl(null, Validators.required);
        // (<FormArray>this.signupForm.get('hobbies')).push(control);
    }

    // Explicity define the type to prevent an error message in the HTML code
    getHobbies() {
        return (this.signupForm.get('hobbies') as FormArray).controls;
    }

    // Create a custom validator
    // Returns a key value pair (key: string, value: bool)
    forbiddenNames(control: FormControl): { [key: string]: boolean } {
        // If the username is a key of the forbidden usernames
        // Returns -1 if it is not found, which is interpretted as true by JS
        if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
            return { nameIsForbidden: true };
        }
        // If validation is successful, you must pass
        // nothing or null, not false.
        return null;

        // Wrong:
        // return { nameIsForbidden: false };
    }

    // Custom asynchronous validator
    // Form will get class ng-pending while the async validator is being resolved
    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            // Simulate a server by waiting 1.5s
            // Send emailIsForbidden if email is test@test.com
            setTimeout(() => {
                if (control.value === 'test@test.com') {
                    resolve({ emailIsForbidden: true });
                } else {
                    resolve(null);
                }
            }, 1500);
        });

        return promise;
    }
}
