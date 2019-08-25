import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recomendacao',
  templateUrl: './recomendacao.page.html',
  styleUrls: ['./recomendacao.page.scss'],
})
export class RecomendacaoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  clickOnLogin(){
    console.log("aaaaaa");
    // alert("Go");
    this.router.navigate(['./../tab1']);
  }

}
