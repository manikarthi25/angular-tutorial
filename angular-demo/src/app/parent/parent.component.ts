import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: []
})
export class ParentComponent implements OnInit {

  public name = "Mani - From Parent Class";
  public message = "";
  constructor() { }

  ngOnInit(): void {
  }

}
