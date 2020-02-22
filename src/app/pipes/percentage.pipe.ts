import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "percentage"
})
export class PercentagePipe implements PipeTransform {
  transform(value: any): any {
    if (value > 1 && value < 100) {
      return value;
    } else {
      return value * 100;
    }
  }
}
