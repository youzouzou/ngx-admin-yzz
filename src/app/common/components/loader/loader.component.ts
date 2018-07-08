import { Component, ElementRef, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements DoCheck {
  @Input() showStatus = false;

  constructor(public el:ElementRef) {
  }

  ngDoCheck() {
    this.el.nativeElement.style.display = this.showStatus ? 'block' : 'none';
    this.el.nativeElement.style.position = 'fixed';
    this.el.nativeElement.style.top = window.innerHeight * 0.5 - 15 + 'px';
    this.el.nativeElement.style.right = window.innerWidth * 0.5 - 15 + 'px';
  }
}
