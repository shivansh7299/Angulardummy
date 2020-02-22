import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-container",
  template: `
    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s12 center">
            <h3><i class="mdi-content-send brown-text"></i></h3>
            <h4>Contact Us</h4>
            <div class="carousel">
              <a class="carousel-item" href="#one!"
                ><img src="./../assets/img/1.jpeg"
              /></a>
              <a class="carousel-item" href="#two!"
                ><img src="./../assets/img/2.jpeg"
              /></a>
              <a class="carousel-item" href="#three!"
                ><img src="./../assets/img/3.jpeg"
              /></a>
              <a class="carousel-item" href="#four!"
                ><img src="./../assets/img/4.jpeg"
              /></a>
              <a class="carousel-item" href="#five!"
                ><img src="https://lorempixel.com/250/250/nature/5"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
