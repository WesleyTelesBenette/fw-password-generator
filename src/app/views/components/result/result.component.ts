import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component
({
	selector: 'app-result',
	standalone: true,
	imports: [],
	templateUrl: './result.component.html',
	styleUrl: './result.component.scss'
})
export class ResultComponent
{
	@Output() action: EventEmitter<any> = new EventEmitter<any>();
	@Input() password: string = '';

	public callAction()
	{
		this.action.emit();
	}

	public copyPassword()
	{
		navigator['clipboard'].writeText(this.password).then().catch(() => console.error('Erro ao copiar senha...'));
	}
}
