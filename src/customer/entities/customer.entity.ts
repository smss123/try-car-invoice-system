import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Invoice } from "../../invoice/entities/invoice.entity";


@Entity({ tableName: 'AppCustomers' })
export class Customer {
    @PrimaryKey()
    id:number
    @Property()
    Name:string
    @Property()
    Phone:string
    @Property()
    Email:string

    @Property()
    createdAt: Date = new Date();
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();
    
    
@OneToMany(() => Invoice, inv => inv.customer)
Invoices = new Collection<Invoice>(this);

    constructor(name:string,phone:string,email:string){
        this.Name = name;
        this.Phone = phone;
        this.Email = email;
       
    }
}
