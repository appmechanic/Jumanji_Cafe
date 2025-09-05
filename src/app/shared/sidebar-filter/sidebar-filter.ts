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
  @Input() filters: any[] = []; 
  @Output() filterChange = new EventEmitter<ActiveFilters>(); 

  // Track active filters by category
  activeFilters: ActiveFilters = {};

  ngOnInit() {
    // Initialize active filters structure based on input filters
    this.filters.forEach(category => {
      if (category.options && Array.isArray(category.options)) {
        this.activeFilters[category.label] = [];
      }
    });
  }

  onFilterSelect(category: string, value: string) {
    // Initialize the category array if it doesn't exist
    if (!this.activeFilters[category]) {
      this.activeFilters[category] = [];
    }

    const index = this.activeFilters[category].indexOf(value);
    
    // Toggle filter selection
    if (index !== -1) {
      // Remove filter if already selected
      this.activeFilters[category].splice(index, 1);
    } else {
      // Add the new filter
      this.activeFilters[category].push(value);
    }
    
    console.log(`Filter updated: ${category}`, this.activeFilters[category]);
    
    // Emit all active filters for parent component to apply filtering
    this.filterChange.emit({...this.activeFilters});
  }

  isFilterActive(category: string, value: string): boolean {
    return this.activeFilters[category]?.includes(value) || false;
  }

  // Add methods for better filter management
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