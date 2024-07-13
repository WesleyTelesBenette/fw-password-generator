import { Component } from '@angular/core';
import { HelpModalComponent } from './help-modal/help-modal.component';

@Component
({
	selector: 'app-header',
	standalone: true,
	imports: [HelpModalComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent
{}
