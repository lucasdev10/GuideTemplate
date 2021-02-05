import { Component, OnInit } from '@angular/core';
import { UserControllerService } from '../../../../../services/controllers/user-controller.service';

@Component({
  selector: 'app-users-read',
  templateUrl: './users-read.component.html',
  styleUrls: ['./users-read.component.scss'],
})
export class UsersReadComponent implements OnInit {
  usersData: any = [
    {
      name: 'Name',
      email: 'email@email.com',
      password: '123456',
      city: 'São Paulo',
      active: true,
    },
    {
      name: 'Name2',
      email: 'email2@email.com',
      password: '654321',
      city: 'São Paulo',
      active: true,
    },
  ];
  constructor(private _userController: UserControllerService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers = () => {
    this.dataTableConfig();
    return this._userController.handlerController('getAll').subscribe((res) => {
      this.usersData = res;
    });
  };

  dataTableConfig = () => {
    $(document).ready(function () {
      $('#dataTable').DataTable({
        pagingType: 'full_numbers',
        // Config options dataTable
        // language: {
        //   lengthMenu: 'Exibindo _MENU_ itens por página',
        //   zeroRecords: 'No momento nenhuma listagem foi encontrada.',
        //   info: 'Mostrando página _PAGE_ de _PAGES_',
        //   infoEmpty: 'Nenhum item disponível',
        //   infoFiltered: '(filtrado de um total de MAX itens)',
        //   search: 'Buscar:',
        //   paginate: {
        //     first: '««',
        //     last: '»»',
        //     next: '»',
        //     previous: '«',
        //   },
        // },
      });
    });
  };
}
