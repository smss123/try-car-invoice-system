import { Collection, Entity, Enum, ManyToOne, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Customer } from "../../customer/entities/customer.entity"
import { InvoiceItem } from "../../invoice-item/entities/invoice-item.entity";
import { InvoiceStatus } from "./InvoiceStatus";

@Entity({ tableName: 'AppInvoice' })
export class Invoice {
    @PrimaryKey()
    id:number

    @Property()
    @Enum(() => InvoiceStatus)
    Status: InvoiceStatus=InvoiceStatus.Placed; 
  
@Property()
total:number;

@OneToMany(() => InvoiceItem, inv => inv.Invoice)
InvoiceItems = new Collection<InvoiceItem>(this);

  
  @ManyToOne()  
  customer!: Customer;

  
    @Property()
    createdAt: Date = new Date();
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();
}
