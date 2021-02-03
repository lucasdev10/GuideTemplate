import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss'],
})
export class UsersCreateComponent implements OnInit {
  cities: any = [
    { id: 1, title: 'São Paulo' },
    { id: 2, title: 'Santos' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
