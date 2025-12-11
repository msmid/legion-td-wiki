import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'highlightText',
})
export class HighlightTextPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }

    const regex = new RegExp(args, 'gi');
    const match = value.match(regex);

    if (!match) {
      return value;
    }

    return value.replace(regex, `<span class='text-primary'>${match[0]}</span>`);
  }
}
