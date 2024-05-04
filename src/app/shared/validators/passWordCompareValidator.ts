import {AbstractControl, ValidatorFn} from "@angular/forms";

export function passWordCompareValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): {[key: string]: any} | null => {
        const controlValue = formGroup.get(controlName);
        const compareControlValue = formGroup.get(matchingControlName);

        if (controlValue?.value !== compareControlValue?.value) {
            compareControlValue?.setErrors({passwordMismatch: true});
            return {passwordMismatch: true};
        } else {
            compareControlValue?.setErrors(null);
            return null
        }
    }
}
