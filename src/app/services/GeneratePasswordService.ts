
export default class GeneratePasswordService
{
	private static caracters: string[] =
	[
		'0123456789',
		'abcedfghijklmnopqrstuvwxyz',
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		'*+!@#$%&*()-_={}/:;,.\\^~`[]|'
	];

	public static Generate(wordUser: string = '', length: number, security: number): string | any
	{
		//Checa parâmetros
		if ((length <= 0) || (wordUser.length > length) || ((security < 1) || (security > this.caracters.length)))
		{
			return undefined;
		}

		let password: string = '';

		//Gera senha
		for (let c = 0; c < length ; c++)
		{
			//Index do "caracters" que será pego esse caractér
			const index: number =  Math.floor(Math.random() * (security));

			//Caracter escolhido aleatóriamente
			const charIndex = Math.floor(Math.random() * this.caracters[index].length);
			const char: string = this.caracters[index][charIndex];

			if (char)
				password += char;
		}

		//Substitui uma substring pela palavra do usuário
		if (wordUser.length > 0)
		{
			//Index para ser substituído
			const indexWordUser =  Math.floor(Math.random() * (password.length-wordUser.length+1));

			if (indexWordUser > 0)
			{
				return password.slice(0, indexWordUser)
					+ wordUser
					+ password.slice(indexWordUser+wordUser.length, password.length);
			}
		}

		return password;
	}
}
