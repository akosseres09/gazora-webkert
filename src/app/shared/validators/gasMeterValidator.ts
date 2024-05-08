import {AbstractControl, ValidatorFn} from "@angular/forms";

export function gasMeterValidator(control: string, lastPosition: number): ValidatorFn {
    return (formGroup: AbstractControl): {[key: string]: any} | null => {
        const value = formGroup.get(control);
        if (value?.value < lastPosition) {
            value?.setErrors({lowerPosition: true});
            return {lowerPosition: true};
        } else {
            value?.setErrors(null);
            return null;
        }
    }
}
