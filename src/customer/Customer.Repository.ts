import { EntityRepository, Repository } from '@mikro-orm/core';
import { Customer } from './entities/customer.entity';

@Repository(Customer)
export class CustomerRepository extends EntityRepository<Customer> {}
