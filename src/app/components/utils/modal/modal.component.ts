import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Config {
  open: boolean;
  title: string;
  configInputs: any[];
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() dataResult = new EventEmitter<any>();
  @Input() config: Config;
  data: any = {};

  constructor() {}

  ngOnInit(): void {
    console.log(this.config);
    this.config.configInputs.map((config, index) => {
      this.data[config.title] = null;
    });
  }

  clickEventHandler = () => {
    return this.dataResult.emit(this.data);
  };

  closeModal = () => {
    return (this.config.open = false);
  };
}
