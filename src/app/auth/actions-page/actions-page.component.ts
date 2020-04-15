import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-actions-page',
  templateUrl: './actions-page.component.html',
  styleUrls: ['./actions-page.component.scss']
})
export class ActionsPageComponent implements OnInit {

  actions = ['Time In', 'Time Out', 'See Schedule', 'Change Price', 'Remove Product', 'Add Product', 'Give Refund'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
