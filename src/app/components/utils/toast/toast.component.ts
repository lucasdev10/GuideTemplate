import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';

export interface ConfigToast {
  open: boolean;
  message: string;
  timer: number;
}

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnChanges {
  @Input() configToast: ConfigToast;

  constructor() {}

  OnInit() {
    this.configToast.open = false;
  }

  ngOnChanges() {
    if (this.configToast) {
      this.configToast.open = true;
      setTimeout(() => {
        this.configToast.open = false;
        this.configToast.message = null;
      }, this.configToast.timer);
    }
  }
}
