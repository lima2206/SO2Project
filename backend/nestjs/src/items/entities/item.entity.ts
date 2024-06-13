import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column( {type: 'text'} )
    foto: string ;

    @Column()
    descricao: string;

    @Column()
    valor_compra: number;

    @Column()
    valor_venda: number;
    
    @Column()
    quantidade_estoque:number;

    @Column()
    estoque_min: number;

    @Column()
    categoria: string;

    @Column()
    local_estoque: string;

    @Column()
    info_extra: string;

    constructor (item: Partial<Item> ){
        Object.assign(this, item);
    }


}
