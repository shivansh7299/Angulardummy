import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FirstComponent } from "./app.component";
import { SqrtPipe } from "./pipes/sqrt.pipe";
import { PercentagePipe } from './pipes/percentage.pipe';
import { OfferPipe } from './pipes/offer.pipe';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ContainerComponent } from './layouts/container/container.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FooterComponent } from './layouts/footer/footer.component';
@NgModule({
  declarations: [FirstComponent, SqrtPipe, PercentagePipe, OfferPipe, NavComponent, BannerOneComponent, ProductsComponent, BannerTwoComponent, ContainerComponent, BannerThreeComponent, FooterComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent]
})
export class FirstModule {}
