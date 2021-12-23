import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { InvoiceItem } from "../../invoice-item/entities/invoice-item.entity";
 

@Entity({ tableName: 'AppProduct' })
export class Product {
    @PrimaryKey()
    id:number
    @Property()
    Name:string;
    @Property()
    Description:string;
    @Property()
    Price:number
    
    @OneToMany(() => InvoiceItem, inv => inv.product)
    InvoiceItems = new Collection<InvoiceItem>(this);

}
