import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public myName:string = "Farid";
  public titleStyles:{};
  public counter = 0;

  onSayHello(message){

    console.log(message);
    this.counter++;
    this.updateTitleStyles();

  }

  updateNameClasses(name:string){
    return {
      'error' : name.length <= 3,
      'warning' : name.length > 3 && name.length <= 6,
      'sucess' : name.length > 6,
      'bold' : name.length > 8
    }

  }

  updateTitleStyles(){
    this.titleStyles = {
      'margin-top' : '40px',
      'color' : this.counter < 3 ? 'green' : 'blue'
    }
  }

}
