import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ContactForm {
  @Input() title: string = '';
  @Input() titleColor: string = '';
  @Input() titleIcon: string = '';
  @Input() titleIconClass: string = '';
  @Input() highlightColor: string = '';
  @Input() highlight: string = '';
  @Input() fields: Array<{
    label: string,
    type: string,
    placeholder: string,
    icon: string,
    iconClass: string
  }> = [];
  @Input() belowItems: Array<{
    text: string,
    icon: string,
    iconClass: string
  }> = [];
  getLabel(field: any): string {
  return field.label || '';
}
  getFieldStyles(field: any): { [key: string]: string } {
  // Example: return custom styles based on field properties
  return field.styles ? field.styles : {};
}
}
