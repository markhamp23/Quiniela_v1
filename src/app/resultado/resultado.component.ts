import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  valorQuinielaNum:Array<number> = [];
  percentage:Array<number> = [];
  quinielaOk = true;

  constructor() { }

  ngOnInit(): void {

    // let valorQuiniela = [];

    let total = 4;

    for (var i = 0; i < total; i++) {
      this.valorQuinielaNum.push(Math.trunc(Math.random()*3)+1)
    }

////////////////////////////////////////////////////////////////

    this.percentage = this.valorQuinielaNum.map(item => item * 100 / total);



    // while(this.quinielaOk===true) {


    //   if (this.percentage[1]==75 && this.percentage[2]==50 && this.percentage[3]==25){
    //     this.quinielaOk=false;


    // }


    console.log(this.percentage);
    console.log(this.valorQuinielaNum)

  //}

}
}
