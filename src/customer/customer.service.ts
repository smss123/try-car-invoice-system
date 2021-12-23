import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './Customer.Repository';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
@Injectable()
export class CustomerService {

 
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: CustomerRepository,
  ) {}
  
  async create(createCustomerDto: CreateCustomerDto) {
    let c = createCustomerDto;
    let customer = new Customer(c.Name,c.Phone,c.Email);
  let result = await this.customerRepository.persistAndFlush(customer)
  }

 async findAll() {
   return await this.customerRepository.findAll();
  }

  async findOne(id: number) {
    return await this.customerRepository.findOne(id);
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    let c = updateCustomerDto;
    let customer = new Customer(c.Name,c.Phone,c.Email);
    customer.id = c.id;
    var cu =await this.findOne(c.id);
   await this.customerRepository.nativeUpdate(cu,customer);

  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
 

