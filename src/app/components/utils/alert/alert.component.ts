import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface AlertConfig {
  open: boolean;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() alertConfig: AlertConfig;
  @Output() responseButton = new EventEmitter<boolean>();

  constructor() {}

  ngOnChanges() {
    if (this.alertConfig?.icon !== 'alert') {
      setTimeout(() => {
        if (this.alertConfig?.open) {
          this.alertConfig.open = false;
          this.alertConfig = null;
        }
      }, 2500);
    }
  }

  handlerButton = (event: any) => {
    this.responseButton.emit(event);
    this.alertConfig.open = false;
  };
}
