import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-filter.html',
  //   styleUrls: ['./sidebar-filter.scss']
})
export class SidebarFilterComponent {
  @Input() filters: any[] = []; 
  @Output() filterChange = new EventEmitter<{ label: string; value: string }>(); 

  selectedOption: { [key: string]: string } = {}; 

  onFilterSelect(label: string, value: string) {
    if (this.selectedOption[label] === value) {
      delete this.selectedOption[label];
      console.log(`Filter reset for ${label}`);
      this.filterChange.emit({ label, value: 'all' }); 
    } else {
      this.selectedOption[label] = value; 
      console.log(`Filter selected: ${label} = ${value}`);
      this.filterChange.emit({ label, value }); 
    }
  }
}