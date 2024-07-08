import { Component, EventEmitter, Output } from '@angular/core';
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
	public length: number = 0;
	public securityLevel: number = -1;

	public constructor(private _generatePasswordService: GeneratePasswordService)
		{}

	public generatePassword(): void
	{
		const newPassword: string | any =
			this._generatePasswordService.Generate(this.wordUser, this.length, this.securityLevel);

		if (newPassword)
		{
			this.action.emit(newPassword);
			console.log(newPassword);
		}
	}
}
