import { Component } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';

@Component
({
	selector: 'app-help-modal',
	standalone: true,
	imports: [ModalComponent],
	templateUrl: './help-modal.component.html',
	styleUrl: '../../modal/modal-children.component.scss'
})
export class HelpModalComponent
{}
