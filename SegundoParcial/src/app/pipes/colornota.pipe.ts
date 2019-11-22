import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'colornota'
})
export class ColornotaPipe implements PipeTransform {

  
  transform(value: any, ...args: any[]): any {
    if(value >= 7){
      return value + " - Promocionado";
    }else if(value < 7 && value > 3) {
      return value + "- Aprobado";
    }else{
      return value + " - Desaprobado";
    }

    return null;
  }
  

}
