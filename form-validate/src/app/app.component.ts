import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <!--
    <form #userForm="ngForm" ngForm action="" method="" (ngSubmit)="formSubmit(userForm)">
      <fieldset>
        <legend>Template-driven forms Exam</legend>
        <div>
          <label>user id</label>
          <input type="text" name="userid" value="" placeholder="example@main.com"
            pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$"
            required ngModel #userid="ngModel">
          <em *ngIf="userid.errors?.pattern && userid.touched">입력 형식이 올바르지 않습니다.</em>
          <em *ngIf="userid.errors?.required && userid.touched">반드시 입력해 주세요.</em>
          <pre>(touched: {{ userid.touched }} | pristine: {{ userid.pristine }} | invalid: {{ userid.invalid }})</pre>
        </div>
        <div>
          <label>password</label>
          <input type="password" name="password" value=""
          pattern="^[a-zA-Z0-9]{4,10}$"
          required ngModel #password="ngModel">
          <em *ngIf="password.errors?.pattern && password.touched">입력 형식이 올바르지 않습니다.</em>
          <em *ngIf="password.errors?.required && password.touched">반드시 입력해 주세요.</em>
          <pre>(touched: {{ password.touched }} | pristine: {{ password.pristine }} | invalid: {{ password.invalid }})</pre>
        </div>
        <div>
          <label>role</label>
          <select name="userlevel" ngModel>
            <option value="Admin" selected>Admin</option>
            <option value="Developer">Developer</option>
            <option value="Guest">Guest</option>
          </select>
        </div>
        <div>
          <label>user name</label>
          <input type="text" name="username" value="" ngModel>
        </div>
        <br>
        <input type="submit" [disabled]="userForm.invalid">

        <pre>{{ userForm.value | json }}</pre>
        <pre>{{ userForm.valid }}</pre>
      </fieldset>
    </form>
    -->
    <form [formGroup]="userForm" novalidate>
      <fieldset>
        <legend>Template-driven forms Exam</legend>
        <div>
          <label>user id</label>
          <input FormControlName="userid" type="text" name="userid" value="" placeholder="example@main.com">
        </div>
        <div>
          <label>password</label>
          <input FormControlName="password1" type="password1" name="password1" value="">
        </div>
        <div>
          <label>confirm password</label>
          <input FormControlName="password2" type="password2" name="password2" value="">
        </div>
        <div>
          <label>user name</label>
          <input type="text" name="username" value="">
        </div>
        <br>
        <input type="submit">
      </fieldset>
    </form>
  `,
  styles: [`
    legend {
      font-weight: bold;
    }
    label {
      display: block;
      font-weight: bold;
    }
    .ng-touched.ng-invalid {
      border-color: #f00;
    }
  `]
})
export class AppComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit() {
    this.userForm = new FormGroup({
      
    })
  }
  // formSubmit(userForm) {
  //   console.log(userForm);
  //   console.log(userForm.value);
  // }
}
