import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserControllerService } from '../../../../../services/controllers/user-controller.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss'],
})
export class UsersCreateComponent implements OnInit {
  eventController: string;
  userId: number = 0;
  userData: any = {};

  cities: any = [
    { id: 1, title: 'São Paulo' },
    { id: 2, title: 'Santos' },
  ];

  constructor(
    private _activdatedRoute: ActivatedRoute,
    public _userController: UserControllerService
  ) {}

  async ngOnInit(): Promise<void> {
    this.eventController = await this._activdatedRoute.snapshot.params.option;
    this.userId = await this._activdatedRoute.snapshot.params.id;

    if (this.userId != 0) {
      this.handlerUser('getById', this.userId);
    }
  }

  handlerUser = (event: string, data: any) => {
    return this._userController
      .handlerController(event, data)
      .subscribe((res) => {
        if (res) {
          this.userData = res;
        }
      });
  };
}
