import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'case'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, args?: string): any {

    
  } 

}
