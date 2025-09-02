import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterConfig {
  property: string | string[];
  transform?: (value: any) => FilterOption;
  includeAll?: boolean;
  allLabel?: string;
}

@Component({
  selector: 'app-filter-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-tab.html',
  styleUrls: ['./filter-tab.scss']
})
export class FilterComponent implements OnChanges {
  @Input() data: any[] = [];
  @Input() config: FilterConfig = {
    property: '',
    includeAll: true,
    allLabel: 'All'
  };
  @Input() selectedFilter: string = 'all';
  @Output() filterChange = new EventEmitter<string>();
  @Output() filteredDataChange = new EventEmitter<any[]>();
  
  filterOptions: FilterOption[] = [];
  filteredData: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['config']) {
      this.generateFilterOptions();
      this.applyFilter(this.selectedFilter);
    }
  }

  generateFilterOptions(): void {
    this.filterOptions = [];
    
    if (this.config.includeAll) {
      this.filterOptions.push({
        label: this.config.allLabel || 'All',
        value: 'all'
      });
    }
    
    const uniqueValues = new Set<string>();
    
    this.data.forEach(item => {
      if (Array.isArray(this.config.property)) {
        this.config.property.forEach(prop => {
          this.extractValues(item, prop, uniqueValues);
        });
      } else {
        this.extractValues(item, this.config.property, uniqueValues);
      }
    });
    
    uniqueValues.forEach(value => {
      if (this.config.transform) {
        const option = this.config.transform(value);
        this.filterOptions.push(option);
      } else {
        this.filterOptions.push({
          label: value,
          value: value.toLowerCase().replace(/\s+/g, '-')
        });
      }
    });
  }
  
  private extractValues(item: any, property: string, uniqueValues: Set<string>): void {
    const value = this.getPropertyValue(item, property);
    
    if (Array.isArray(value)) {
      value.forEach(v => {
        if (v) uniqueValues.add(v);
      });
    } else if (value) {
      uniqueValues.add(value);
    }
  }
  
  private getPropertyValue(item: any, property: string): any {
    const props = property.split('.');
    let value = item;
    
    for (const prop of props) {
      if (value == null) return null;
      value = value[prop];
    }
    
    return value;
  }

  selectFilter(filter: string): void {
    this.selectedFilter = filter;
    this.applyFilter(filter);
    this.filterChange.emit(filter);
  }
  
  applyFilter(filter: string): void {
    if (filter === 'all') {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(item => {
        if (Array.isArray(this.config.property)) {
          // Check if any of the properties match the filter
          return this.config.property.some(prop => {
            const value = this.getPropertyValue(item, prop);
            return this.matchesFilter(value, filter);
          });
        } else {
          // Check if the property matches the filter
          const value = this.getPropertyValue(item, this.config.property);
          return this.matchesFilter(value, filter);
        }
      });
    }
    
    this.filteredDataChange.emit(this.filteredData);
  }
  
  private matchesFilter(value: any, filter: string): boolean {
    if (Array.isArray(value)) {
      return value.some(v => {
        const normalizedValue = v.toLowerCase().replace(/\s+/g, '-');
        return normalizedValue === filter;
      });
    } else if (value) {
      // If value is a scalar, check if it matches
      const normalizedValue = value.toLowerCase().replace(/\s+/g, '-');
      return normalizedValue === filter;
    }
    return false;
  }
}