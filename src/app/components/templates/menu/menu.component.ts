import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isHiddenMenu: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  hiddenMenu = () => {
    this.isHiddenMenu = !this.isHiddenMenu;
  };
}
