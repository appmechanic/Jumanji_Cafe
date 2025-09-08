import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


interface ActiveFilters {
  [category: string]: string[];
}

@Component({
  selector: 'app-sidebar-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-filter.html',
  styleUrls: ['./sidebar-filter.scss']
})
export class SidebarFilterComponent implements OnInit {
  @Input() title: string = '';
  @Input() filters: any[] = []; 
  @Output() filterChange = new EventEmitter<ActiveFilters>(); 

  activeFilters: ActiveFilters = {};

  ngOnInit() {
    this.filters.forEach(category => {
      if (category.options && Array.isArray(category.options)) {
        this.activeFilters[category.label] = [];
      }
    });
  }

  onFilterSelect(category: string, value: string) {
    if (!this.activeFilters[category]) {
      this.activeFilters[category] = [];
    }

    const index = this.activeFilters[category].indexOf(value);
    
    if (index !== -1) {
      this.activeFilters[category].splice(index, 1);
    } else {
      this.activeFilters[category].push(value);
    }
    
    this.filterChange.emit({...this.activeFilters});
  }

  isFilterActive(category: string, value: string): boolean {
    return this.activeFilters[category]?.includes(value) || false;
  }

  hasActiveFilters(): boolean {
    return Object.values(this.activeFilters).some(values => values && values.length > 0);
  }

  clearAllFilters() {
    this.activeFilters = {};
    Object.keys(this.activeFilters).forEach(category => {
      this.activeFilters[category] = [];
    });
    this.filterChange.emit({...this.activeFilters});
  }
}