import {
  Directive,
  ElementRef,
  Renderer,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: ".appMyStyle"
})
export class MyStyleDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer) {}
  // @HostListener("mouseover") onMouseOver() {
  //   this.changeBgColor("red");
  // }
  @HostBinding("style.textShadow") textshadow: string;

  @HostListener("click") onClick() {
    window.alert("Host Element Clicked");
  }
  @HostListener("mouseover") onMouseOver() {
    this.textshadow = "2px 2px 3px green";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.changeBgColor("black");
    this.textshadow = "2px 2px 4px red";
  }

  changeBgColor(color: string) {
    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      "color",
      color
    );
  }
}
