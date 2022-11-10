import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router: Router, private UserService: UserService) { }
  public userName: string = undefined;
  public userEmail: string = undefined;
  public userPassword: string = undefined;
  public userUf: string = undefined;
  public userCity: string = undefined;


  ngOnInit() {
  }

  onSubmit() {
    const data = {
      userName: this.userName,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      userUf: this.userUf,
      userCity: this.userCity,
    }
    this.UserService.userRegister(data).subscribe( data => {
      this.router.navigate(['/login']);
    })
  }

  goToPage(URL) {
    this.router.navigate(['/' + URL]);
  }
}
