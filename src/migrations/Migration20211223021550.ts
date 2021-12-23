import { Migration } from '@mikro-orm/migrations';

export class Migration20211223021550 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `AppProduct` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `description` varchar(255) not null, `price` int(11) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `AppCustomers` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `phone` varchar(255) not null, `email` varchar(255) not null, `created_at` datetime not null, `updated_at` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `AppInvoice` (`id` int unsigned not null auto_increment primary key, `status` enum(\'Placed\', \'Delivered\', \'Cancelled\') not null, `total` int(11) not null, `customer_id` int(11) unsigned not null, `created_at` datetime not null, `updated_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `AppInvoice` add index `AppInvoice_customer_id_index`(`customer_id`);');

    this.addSql('create table `AppInvoiceItems` (`id` int unsigned not null auto_increment primary key, `invoice_id` int(11) unsigned not null, `product_id` int(11) unsigned not null, `qty` int(11) not null, `unit_price` int(11) not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `AppInvoiceItems` add index `AppInvoiceItems_invoice_id_index`(`invoice_id`);');
    this.addSql('alter table `AppInvoiceItems` add index `AppInvoiceItems_product_id_index`(`product_id`);');

    this.addSql('alter table `AppInvoice` add constraint `AppInvoice_customer_id_foreign` foreign key (`customer_id`) references `AppCustomers` (`id`) on update cascade;');

    this.addSql('alter table `AppInvoiceItems` add constraint `AppInvoiceItems_invoice_id_foreign` foreign key (`invoice_id`) references `AppInvoice` (`id`) on update cascade;');
    this.addSql('alter table `AppInvoiceItems` add constraint `AppInvoiceItems_product_id_foreign` foreign key (`product_id`) references `AppProduct` (`id`) on update cascade;');
  }

}
