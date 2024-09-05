import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting:forwardRef(()=> InputComponent), 
      multi: true 
    }
  ]
})
export class InputComponent implements ControlValueAccessor{
  private onChange?: (value: string | File) => void;
  private onTouched?: () => void;

  inputValue!: string | File;
  isDisabled = false;

  @Input() label = '';
  @Input() hint = false;
  @Input() style = '';
  @Input() inputType: 'text' | 'number' | 'email' | 'password' | 'date' | 'time' | 'tel' | 'url' | 'color' | 'file' = 'text';

  writeValue(obj: string): void {
    this.inputValue = obj;
  }

  registerOnChange(fn: (value: string | File) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  changeValue(event: Event) {
    const input = event.target as HTMLInputElement;
    if (this.inputType !== 'file') {
      this.inputValue = input.value;
      this.onChange?.(this.inputValue);
    } 
  }

  onBlur() {
    this.onTouched?.();
  }
}
