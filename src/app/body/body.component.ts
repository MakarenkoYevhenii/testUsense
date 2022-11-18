import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent {
  password="";
  firstCube="";
  secondCube="";
  thirdCube="";
 changeFn(e:any) {
   this.password = e.target.value;
 }
 
 StrongPassword=()=>{
   const strongRegex:any = /(?=.*\d)(?=.*[a-z])(?=.*[a-z])(?=.*[\\\.\*!@#$%^&*(_+=?/>.,<)]).{8,}$/
   const mediumRedex:any = /(?=.*[A-Za-z])(?=.*\d)|(?=.*[\\\.\*!@#$%^&*(_+=?/>.,<)])/
   if(this.password.length===0){
     this.firstCube="notwork"
     this.secondCube="notwork"
     this.thirdCube="notwork"
     return
   }
   if (strongRegex.test(this.password)) {
     this.firstCube="passwordStrong"
     this.secondCube="passwordStrong"
     this.thirdCube="passwordStrong"
     return 
   }
   if (this.password.length<=8&&this.password.length>=1) {
     this.firstCube="passwordLess8Digits"
     this.secondCube="passwordLess8Digits"
     this.thirdCube="passwordLess8Digits"
     return 
   }
   if (mediumRedex.test(this.password)) {
     this.firstCube="mediumPassword"
     this.secondCube="mediumPassword"
     this.thirdCube="notwork"
     return 
   }
   this.firstCube="passwordLess8Digits"
     this.secondCube="notwork"
     this.thirdCube="notwork"

   return 
 }
}
