import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(control : AbstractControl) : {[key : string] : any } | null {

    const forbidden = /admin/.test(control.value);
    return forbidden ? {"forbiddenName" : {value : control.value}} : null;
}

export function passwordValidator(control : AbstractControl) :  {[key:string] : boolean} | null {

    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");

    if(password.pristine && confirmPassword.pristine) {
        return null;
    }

    return password && confirmPassword && password.value != confirmPassword.value ? {'misMatch' : true} : null;

}