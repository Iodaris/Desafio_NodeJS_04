/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

class aluno {
	nome: string;
	idade: number;
	nota: number;

	constructor(nome: string, idade: number, nota: number) {
		this.nome = nome;
		this.idade = idade;
		this.nota = nota;
	}
}
const aluno1 = new aluno("Guilherme", 15, 8);
const aluno2 = new aluno("Maria", 16, 9);
const aluno3 = new aluno("Gabriel", 17, 6);

const alunos = [aluno1, aluno2, aluno3];

const somaNotas = alunos.reduce((soma, aluno) => soma + aluno.nota, 0);
console.log(`A soma das notas é ${somaNotas}`);
});