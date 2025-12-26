import { Component } from '@angular/core';
import { DialogService } from '../../../services/dialog-service';

@Component({
  selector: 'cine-tamil',
  imports: [],
  templateUrl: './tamil.html',
  styleUrl: './tamil.scss',
})
export class Tamil {
  constructor(private dialogBoxService: DialogService) {}
  openDialog() {
    this.dialogBoxService.open('Are you sure you want to proceed?').then((result) => {
      if (result) {
        console.log('Confirmed');
      } else {
        console.log('Cancelled');
      }
    });
  }
}
