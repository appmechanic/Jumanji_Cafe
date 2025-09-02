import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-location-card',
    templateUrl: './location-card.html',
    styleUrls: ['./location-card.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class LocationCard {
    @Input() titleIconClass: string = '';
    @Input() titleIcon: string = '';
    @Input() title: string = '';
    @Input() highlight: string = '';
    @Input() subTitle: string = '';
    @Input() highlightColor: string = '';
    @Input() icon: string = '';
    @Input() iconClass: string = '';
    @Input() label: string = '';
    @Input() Text: string = '';
    @Input() iframeSrc: string = '';
    @Input() buttonLink: string = '';
    @Input() btnText: string = '';
    @Input() content: Array<{ icon: string, iconClass?: string, label: string, Text: string }> = [];

    safeIframeSrc: SafeResourceUrl | null = null;
    staticMapUrl: string = '';

    constructor(private sanitizer: DomSanitizer) {}

    ngOnChanges() {
        if (this.iframeSrc) {
            this.safeIframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeSrc);
        }

        // Replace with your own Google Maps Static API key and coordinates
        this.staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=21.566718769083142,39.15329637600109&zoom=15&size=600x250&markers=color:purple%7Clabel:C%7C21.566718769083142,39.15329637600109&key=YOUR_API_KEY`;
    }

    openLink() {
        if (this.buttonLink) {
            window.open(this.buttonLink, '_blank');
        }
    }
}
