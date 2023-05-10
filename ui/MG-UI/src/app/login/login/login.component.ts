import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  
  constructor(private fb: FormBuilder, private router: Router,@Optional() private route : ActivatedRoute) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if(this.route){
      console.log('routing')
    }
  }

  onSubmit() {
    // Your login logic here
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    if (username === 'admin' && password === 'password') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }
  }
}
