import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[studentHighlight]'
})
export class StudentHighlight {
  constructor(private el: ElementRef, private renderer2: Renderer2) {
    // this.el.nativeElement.style.background = 'green';
    // this.el.nativeElement.style.color = 'red';
    this.renderer2.setStyle(this.el.nativeElement, 'background', 'yellow');
    this.renderer2.setStyle(this.el.nativeElement, 'color', 'red');
  }

  //di chuyển chuột lên thông tin sinh viên thì chữ đổi sang màu xanh dương
  private colorHighlight(color: String) {
    // this.el.nativeElement.style.background = color;
    this.renderer2.setStyle(this.el.nativeElement, 'color', color);
  }
  //Đưa chuột vào
  @HostListener('mouseenter') onMouseEnter() {
    this.colorHighlight('blue');
  }
  //Đưa chuột ra
  @HostListener('mouseleave') onMouseLeave() {
    this.colorHighlight('red');
  }

}
