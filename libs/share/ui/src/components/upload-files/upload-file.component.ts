import { ChangeDetectionStrategy, Component, forwardRef, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor,FormsModule,NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-upload-file',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting:forwardRef(()=> UploadFileComponent), 
      multi: true 
    }
  ]
})
export class UploadFileComponent implements ControlValueAccessor{
  private onChange?: (value: string | File| FileList) => void = ()=> true;
  private onTouched?: () => void;
  inputValue!: string | File;
  isDisabled = false;
  @Input() preloadImage !: string | ArrayBuffer | null

  writeValue(obj: any): void {
    this.inputValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  changeValue(event: any) {
    const fileList = event.target?.files as FileList;
    for(let i = 0; i < fileList.length ; i++){
      this.onChange?.(fileList[i])
    }
    
  }

}
