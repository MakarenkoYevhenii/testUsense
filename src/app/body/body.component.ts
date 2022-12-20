import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass'],
})
export class BodyComponent {
  password = '';
  firstCube = 'notwork';
  secondCube = 'notwork';
  thirdCube = 'notwork';

  strongRegex: RegExp =
    /(?=.*\d)(?=.*[a-z])(?=.*[a-z])(?=.*[\\\.\*!@#$%^&*(_+=?/>.,<)]).{8,}$/;
  mediumRedex: RegExp =
    /(?=.*[A-Za-z])(?=.*\d).{8,}$|(?=.*[\\\.\*!@#$%^&*(_+=?/>.,<)]).{8,}$/;

  ChangeFn(e: Event) {
    this.password = (e.target as HTMLInputElement).value;
  }

  StrongPassword = () => {
    // if (this.password.length <= 8 && this.password.length >= 1) {
    //   this.firstCube = 'passwordLess8Digits';
    //   this.secondCube = 'passwordLess8Digits';
    //   this.thirdCube = 'passwordLess8Digits';
    //   return;
    // }
    if (this.strongRegex.test(this.password)) {
      this.firstCube = 'passwordStrong';
      this.secondCube = 'passwordStrong';
      this.thirdCube = 'passwordStrong';
      return;
    }

    if (this.mediumRedex.test(this.password)) {
      this.firstCube = 'mediumPassword';
      this.secondCube = 'mediumPassword';
      this.thirdCube = 'notwork';
      return;
    }
    this.firstCube =
      this.password.length === 0 ? 'notwork' : 'passwordLess8Digits';
    this.secondCube =
      this.password.length <= 8 && this.password.length >= 1
        ? 'passwordLess8Digits'
        : 'notwork';
    this.thirdCube =
      this.password.length <= 8 && this.password.length >= 1
        ? 'passwordLess8Digits'
        : 'notwork';
    return;
  };
}
