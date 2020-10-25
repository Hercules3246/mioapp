import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MIO App';

  public nombre: string;
  public edad: number;
  public cantidad: number;
  public ocupacion: string;
  public descuento: string;
  public pago: number;

  calcular_descuento(){
    if(this.edad<4){
      this.descuento='Pasaje gratis';
      this.pago=0;
    }
    else if(this.cantidad > 3){
      this.descuento='Descuento del 70%';
      this.pago=2100-2100*0.70;
    }
    else {
      if(this.edad>=4 && this.edad<=7){
      this.descuento='Descuento del 50%';
      this.pago=2100-2100*0.50;
      }
      else if(this.edad>7 && this.edad <= 35 && this.ocupacion == 'estudiante'){
        this.descuento='Descuento del 40%';
        this.pago=2100-2100*0.40;
      }
      else if(this.edad >= 65){
        this.descuento='Descuento del 40%';
        this.pago=2100-2100*0.40;
      } 
    }
  }
  
}
