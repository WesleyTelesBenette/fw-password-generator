import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { timeout } from 'rxjs';

@Component
({
	selector: 'app-result',
	standalone: true,
	imports: [AlertComponent],
	templateUrl: './result.component.html',
	styleUrl: './result.component.scss'
})
export class ResultComponent
{
	@Output() action: EventEmitter<any> = new EventEmitter<any>();
	@Input() password: string = '';
	public activeAlert: boolean | any;

	public callAction()
	{
		this.action.emit();
	}

	public async copyPassword()
	{
		navigator['clipboard'].writeText(this.password).then().catch(() => console.error('Erro ao copiar senha...'));
		this.activeAlert = true;
		console.log('Alert');
		await new Promise(r => setTimeout(r, 5000));
		console.log('Close Alert');
		this.activeAlert = false;
	}
}
