import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import GeneratePasswordService from '../../../services/GeneratePasswordService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResultComponent } from '../../components/result/result.component';

@Component
({
	selector: 'app-home-page',
	standalone: true,
	imports: [FooterComponent, HeaderComponent, FormsModule, CommonModule, ResultComponent],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss'
})
export class HomePageComponent
{
	@ViewChild('containerInputs') containerInputs!: ElementRef<HTMLDivElement>;
	@ViewChild('containerResult') containerResult!: ElementRef<HTMLDivElement>;

	public wordUser: string = '';
	public length: number = 0;
	public securityLevel: number = -1;

	public passwordResult = '';

	public generatePassword(): void
	{
		const newPassword: string | any = GeneratePasswordService.Generate(this.wordUser, this.length, this.securityLevel);

		if (newPassword)
		{
			this.passwordResult = newPassword;
			this.toogleVisibility();
			console.log(newPassword);
		}
	}

	private toogleVisibility(): void
	{
		const elementInputs =  this.containerInputs.nativeElement;
		const elementResult = this.containerResult.nativeElement;

		if ((elementInputs) && (elementResult))
		{
			const elementHidden = elementInputs.classList.contains('hidden') ? elementResult : elementInputs;
			const elementShow = elementInputs.classList.contains('hidden') ? elementInputs : elementResult;

			elementHidden.classList.remove('show');
			elementHidden.classList.add('hidden');
			elementHidden.addEventListener('animationend', () =>
			{
				elementShow.classList.add('show');
			});

		}
	}
}
