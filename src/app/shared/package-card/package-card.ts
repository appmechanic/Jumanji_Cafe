import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PackageListItem {
    text: string;
    icon?: string;
    iconClass?: string;
}

@Component({
    selector: 'app-package-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './package-card.html',
    styleUrls: ['./package-card.scss']
})
export class PackageCardComponent {
    @Input() title = '';
    @Input() description = '';
    @Input() price = '';
    @Input() priceClass = '';
    @Input() currency = 'SAR';
    @Input() priceSubtext = '';
    @Input() listItems: PackageListItem[] = [];
    @Input() buttonText = 'Select Package';
    @Input() buttonClass = 'btn-primary';
    @Input() isActive = false;
    @Input() badgeText = 'Most Popular';
    @Input() badgeIcon = 'bi-star-fill';
    @Input() badgeClass = 'bg-warning';
    @Input() cardClass = '';

    isMaterialIcon(icon?: string): boolean {
        return !!icon && !icon.includes('bi-') && !icon.includes('fa-');
    }
}
