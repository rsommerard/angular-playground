import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  buttonIds: Array<number>;

  constructor() { }

  ngOnInit() {
    this.buttonIds = Array(25).fill(-1).map((x, i) => i);
  }
}
