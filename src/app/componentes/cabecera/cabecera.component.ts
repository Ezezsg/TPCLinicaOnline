import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthenticateService } from '../../servicios/authenticate.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public userEmail : string = null;

  constructor(
    private authService: AuthenticateService,
  	private router: Router
  ) 
  {

  }

  ngOnInit(): void {
    // this.authService.userDetails().subscribe(res => {
    //   console.log('res', res);
    //   if (res !== null) {
    //     this.userEmail = res.email;
    //   } else {
    //     this.router.navigate(['']);
    //   }
    // }, err => {
    //   console.log('err', err);
    // })
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.router.navigate(['']);
      })
      .catch(error => {
        console.log(error);
      })
  }	 

}
