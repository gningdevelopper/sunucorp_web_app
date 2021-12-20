import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/_services/auth.service';
import { TokenStorageService } from 'app/_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;
    form: any = {
        username: null,
        password: null
      };
      isLoggedIn = false;
      isLoginFailed = false;
      errorMessage = '';
      roles: string[] = [];

    constructor(private authService:AuthService, private tokenStorage: TokenStorageService,
                private router:Router) { }

    ngOnInit() {
        if (this.tokenStorage.getToken()){
            this.isLoggedIn=true
            this.roles=this.tokenStorage.getUser().roles;
            this.router.navigateByUrl('mycompany')
        }
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    onSubmit():void{
        const { username, password}=this.form

        this.authService.login(username, password).subscribe(
            data=>{
                this.tokenStorage.saveToken(data.accessToken)
                this.tokenStorage.saveUser(data)

                this.isLoginFailed=false
                this.isLoggedIn=true
                this.roles=this.tokenStorage.getUser().roles;
                //this.reloadPage()
                this.router.navigateByUrl('profile')
            },
            err=>{
                this.errorMessage=err.error.message;
                this.isLoginFailed=true
            }
        )
    }
    reloadPage(): void {
        window.location.reload();
      }

}
