import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "offer"
})
export class OfferPipe implements PipeTransform {
  transform(value: any, ...offer): any {
    if (offer[0] > 1 && offer[0] < 100) {
      return value - offer[0] * 100;
    } else {
      return value - offer[0] * 100 * 100;
    }
  }
}
