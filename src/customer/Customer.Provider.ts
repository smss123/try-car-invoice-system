import { Connection } from 'typeorm';
import { Customer } from './entities/customer.entity';

export const customerProviders = [
  {
    provide: 'CUSTOMER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Customer),
    inject: ['DATABASE_CONNECTION'],
  },
];