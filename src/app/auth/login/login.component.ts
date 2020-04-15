import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Keyboard from 'simple-keyboard';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
  ]
})
export class LoginComponent implements OnInit, AfterViewInit {

  keyboard: Keyboard;
  loginForm: FormGroup;
  selectedInput;

  @ViewChild('username') usernameInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    public router: Router
  ) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      terminal_number: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  }

  onInputFocus(event) {
    const inputName = event.target.name;
    this.selectedInput = {selector: `input[name="${inputName}"]`, name: inputName};

    this.keyboard.setOptions({
      inputName: event.target.name
    });
  }

  onChange(val: string) {
    document.querySelector(this.selectedInput.selector).value = val;
    this.loginForm.get(this.selectedInput.name).patchValue(val);
  }

  onKeyPress(button: string) {

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') {
      this.handleShift();
    }
  }

  onInputChange(event: any, controlName: string) {
    this.keyboard.setInput(event.target.value, event.target.name);
  }

  handleShift() {
    const currentLayout = this.keyboard.options.layoutName;
    const shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  }

  authUser() {
    this.router.navigate(['auth/show-actions']);
    if (this.loginForm.valid) {

    }
  }

}
