import { Category } from "../../categories/shared/category.model"

export class Entry {
  constructor(
    public user_id:string = "anderson_ferreira",
    public id?: string,
    public name?: string,
    public description?: string,
    public type?: string,
    public amount?: string,
    public date?: string,
    public paid?: string,
    public categoryId?: number,
    public category?: Category
  ){}

  static types = {
    expense: 'Despesa',
    revenue: 'Receita'
  };

  get paidText(): string {
    return this.paid ? 'Pago' : ' Pendente';
  }

}
