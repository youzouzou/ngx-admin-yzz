import { Component } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  screenWidth:number = window.innerWidth;

  //constructor() {
  //  //document.body.style.overflow = 'hidden';
  //  console.log('modal');
  //}

  closeModal() {
    //document.body.style.overflow = 'auto';
    //document.getElementById('modalScreen').style.display = 'none';
    //document.body.remove(document.getElementById('modalScreen'));
  }
}
