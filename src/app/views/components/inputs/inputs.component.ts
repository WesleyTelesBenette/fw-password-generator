import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeneratePasswordService } from '../../../services/GeneratePasswordService';

@Component
({
	selector: 'app-inputs',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './inputs.component.html',
	styleUrl: './inputs.component.scss'
})
export class InputsComponent
{
	@Output() action: EventEmitter<string> = new EventEmitter<string>();

	public wordUser: string = '';
	public length: number = 12;
	public securityLevel: number = -1;

	public constructor(private _generatePasswordService: GeneratePasswordService)
		{}

	public limitedLength(event: Event)
	{
		const input = event.target as HTMLInputElement;

		if (input)
		{
			let valueInput = Number(input.value);
			const min = 1;
			const max = 60000;

			if (valueInput < min) valueInput = min;
			if (valueInput > max) valueInput = max;

			this.length = Math.floor(valueInput);
			input.value = valueInput.toString();
		}
	}

	public generatePassword(): void
	{
		const newPassword: string | any =
			this._generatePasswordService.Generate(this.wordUser, this.length, this.securityLevel);

		if (newPassword)
		{
			this.action.emit(newPassword);

			this.wordUser = '';
			this.length = 0;
			this.securityLevel = -1;
		}
	}
}
