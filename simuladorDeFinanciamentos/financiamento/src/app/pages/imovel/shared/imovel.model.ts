export class Imovel {
  constructor(
    public tipo?: string,
    public renda?: string,
    public valorImovel?: string,
    public valorEntrada?: string,
    public parcelas?: string,
    public valorTotalAprovado?:number,
    public parcelaInicial?:number
  ){  }
}
