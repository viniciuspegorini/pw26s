import { Categoria } from "src/app/categoria/model/categoria";
import { Marca } from "src/app/marca/model/marca";

export class Produto {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    categoria: Categoria;
    marca: Marca;
}