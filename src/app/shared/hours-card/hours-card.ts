import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-hours-card',
    templateUrl: './hours-card.html',
    styleUrls: ['./hours-card.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class HoursCard {
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
    @Input() notesClass: string = '';
    @Input() notesIconClass: string = '';
    @Input() notesIcon: string = '';
    @Input() notesTitle: string = '';
    @Input() content: Array<{ icon: string, iconClass?: string, label: string, Text: string }> = [];
      @Input() notes: any[] = [];
    // notes?: Array<{ icon: string; iconClass?: string; color?: string; title: string }> = [];
}
