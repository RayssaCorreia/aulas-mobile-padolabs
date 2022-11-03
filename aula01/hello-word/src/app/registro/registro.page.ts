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
  public email: string = undefined;
  public password: string = undefined;
  public uf: string = undefined;
  public name: string = undefined;
  public city: string = undefined;


  ngOnInit() {
  }

  onSubmit() {
    const data = {
      email: this.email,
      password: this.password,
      Uf: this.uf,
      Name: this.name,
      City: this.city,
    }
    this.UserService.userRegister(data).subscribe( data => {
      this.router.navigate(['/login']);
    })
  }

  goToPage(URL) {
    this.router.navigate(['/' + URL]);
  }
}
