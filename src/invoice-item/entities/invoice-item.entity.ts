import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Invoice } from "../../invoice/entities/invoice.entity";
import { Product } from "../../product/entities/product.entity";

@Entity({ tableName: 'AppInvoiceItems' })
export class InvoiceItem {
    @PrimaryKey()
    id:number
    @ManyToOne()
    Invoice!: Invoice;

    @ManyToOne() 
    product!: Product;

    @Property()
    Qty:number

    @Property()
    UnitPrice:number
    
}
