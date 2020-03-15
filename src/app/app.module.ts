import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { FirstComponent } from "./app.component";
import { SqrtPipe } from "./pipes/sqrt.pipe";
import { PercentagePipe } from "./pipes/percentage.pipe";
import { OfferPipe } from "./pipes/offer.pipe";
import { NavComponent } from "./layouts/nav/nav.component";
import { BannerOneComponent } from "./layouts/banner-one/banner-one.component";
import { ProductsComponent } from "./layouts/products/products.component";
import { BannerTwoComponent } from "./layouts/banner-two/banner-two.component";
import { ContainerComponent } from "./layouts/container/container.component";
import { BannerThreeComponent } from "./layouts/banner-three/banner-three.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { MyStyleDirective } from "./dirctives/my-style.directive";
import { StudentComponent } from "./college/student/student.component";
@NgModule({
  declarations: [
    FirstComponent,
    SqrtPipe,
    PercentagePipe,
    OfferPipe,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    ContainerComponent,
    BannerThreeComponent,
    FooterComponent,
    MyStyleDirective,
    StudentComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [FirstComponent]
})
export class FirstModule {}
