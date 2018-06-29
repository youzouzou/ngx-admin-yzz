import {Component} from '@angular/core';

@Component({
  selector: 'animation-page',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.css']
})

export class AnimationPage {
  boxList = ['linear-show', 'bounce-show', 'rotateY-show'];

  showAgain(event, index) {
    let dom = event.target;
    let parent = dom.parentElement;
    let parent2 = dom.parentElement.parentElement;
    parent2.removeChild(parent);
    parent2.appendChild(parent);
  }
}
