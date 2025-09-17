import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingSectionComponent } from '../heading-section/heading-section';

@Component({
    selector: 'adventure-updates-form',
    standalone: true,
    imports: [CommonModule, HeadingSectionComponent],
    templateUrl: './adventure-updates-form.html',
    styleUrls: ['./adventure-updates-form.scss']
})
export class AdventureUpdatesFormComponent {
    
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() placeholderClass: string = '';
    @Input() interestLabel: string = '';
    @Input() interestOptions: { icon: string, text: string }[] = [];
    @Input() listLabel: string = '';
    @Input() listItems: { icon: string, text: string }[] = [];
    @Input() listIconColor: string = 'text-warning';
    @Input() btnText: string = '';
    @Input() btnIcon: string = 'bi-send';
    @Input() btnGradient: string = 'gradient-bg';
    @Input() footertext: string = '';
    @Input() formtitle: string = '';
    @Input() formtitleColor: string = '';
    @Input() formcoloredtitle: string = '';
    @Input() formsubtitle: string = '';
    @Input() formsubtitleColor: string = '';
    @Input() iconLeft: string = '';
    @Input() iconRight: string = '';
    @Input() iconLeftType: 'bootstrap' | 'material' = 'bootstrap';
    @Input() iconRightType: 'bootstrap' | 'material' = 'bootstrap';
    @Input() iconLeftColor: string = '';
    @Input() iconRightColor: string = '';
    @Input() footerIcon: string = '';
    @Input() footerIconType: 'bootstrap' | 'material' = 'bootstrap';

    selectedInterests: string[] = [];

    toggleInterest(option: string) {
        if (this.selectedInterests.includes(option)) {
            this.selectedInterests = this.selectedInterests.filter(o => o !== option);
        } else {
            this.selectedInterests.push(option);
        }
    }
}