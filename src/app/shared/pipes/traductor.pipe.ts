import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traductor'
})
export class TraductorPipe implements PipeTransform {

  transform(value: string, args?: string): any {
    console.log("Valor: "+ value);
    if(value == 'E' && args == 'ESP') {
        return 'Electronico';
    }else if(value == 'A' && args == 'ESP') {
       return 'Abarrotes'; 
    } else if (value == 'E' && args == 'ENG') {
       return 'Electronics';
    } else if (value == 'A' && args == 'ENG') {
       return 'Groceries';
    }
     
      return null;
  }

}
