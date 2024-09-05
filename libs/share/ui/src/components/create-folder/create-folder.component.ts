import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
export interface DialogData {
  name: string;
}

@Component({
  selector: 'lib-create-folder',
  standalone: true,
  imports: [CommonModule, FormsModule, InputComponent],
  templateUrl: './create-folder.component.html',
  styleUrl: './create-folder.component.css',
})

export class CreateFolderComponent {
  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: DialogData
  ) {}

}
