import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cine-dialog-box',
  imports: [],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.scss',
})
export class DialogBox {
  @Input() message: string = '';
  @Output() confirm = new EventEmitter<boolean>();

  onConfirm() {
    this.confirm.emit(true);
  }

  onCancel() {
    this.confirm.emit(false);
  }
}
