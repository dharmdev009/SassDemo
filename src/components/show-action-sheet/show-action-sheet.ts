import { Component } from '@angular/core';

/**
 * Generated class for the ShowActionSheet component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'show-action-sheet',
  templateUrl: 'show-action-sheet.html'
})
export class ShowActionSheet {

  text: string;

  constructor() {
    console.log('Hello ShowActionSheet Component');
    this.text = 'Hello World';
  }

}
