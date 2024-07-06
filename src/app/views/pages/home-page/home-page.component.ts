import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import GeneratePasswordService from '../../../services/GeneratePasswordService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component
({
	selector: 'app-home-page',
	standalone: true,
	imports: [FooterComponent, HeaderComponent, FormsModule, CommonModule],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss'
})
export class HomePageComponent
{
	public wordUser: string = '';
	public length: number = 0;
	public securityLevel: number = -1;


	public generatePassword(): void
	{
		const newPassword: string | any = GeneratePasswordService.Generate(this.wordUser, this.length, this.securityLevel);

		if (newPassword)
		{
			console.log(newPassword);
		}
	}
}
