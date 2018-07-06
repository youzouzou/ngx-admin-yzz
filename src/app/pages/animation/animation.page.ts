import {Component} from '@angular/core';

@Component({
  selector: 'animation-page',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.css']
})

export class AnimationPage {
  boxList = ['linear-show', 'bounce-show', 'rotate-x-show', 'rotate-y-show', 'rotate-z-show', 'thomas-show'];

  showAgain(event, index) {
    let dom = event.target;
    let parent = dom.parentElement;
    parent.removeChild(dom);
    parent.appendChild(dom);
  }
}
