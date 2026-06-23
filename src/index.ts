// Primitives

const firstName: string = "Srija";
const age: number = 27;
const isRegularlyStudying: boolean = false;
const semiFinalTeams: Array<string> = [
  "Argentina",
  "Spain",
  "France",
  "Germany",
];

//funcion
function calculatePrice(actualPrice: number, discount: number): number {
  return actualPrice - discount;
}

const finalPrice = calculatePrice(100, 10);

// interface
interface Customer {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}

interface Address {
  street: string;
  city: string;
  postCode: string;
  county?: string;
}

// interface extension
interface CustomerDto extends Customer, Address {
  createCustomer(customer: Customer): Customer;
}

//type
type User = {
  emailId: string;
  contactNumber: string;
};

type UserAddress = {
  city: string;
  country: string;
};

//type extension
type UserDto = User & UserAddress;

// unions
type allowedEnvironments = "Prod" | "Stag" | "Test" | "Dev";

const grade: string | number = 100;
const deployEnv: allowedEnvironments = "Prod";

// tuples
type UserTuple = [email: string, mobileNumber: string];

//enum
enum BusinessCategory {
  Gastronomy,
  HotelRoom,
  Restuarant,
  Hotel,
}

enum CustomerStatus {
  ActivePaid = "ActivePaid",
  ActiveGrace = "ActiveGrace",
  ContractEnded = "ContractEnded",
  Suspended = "Suspended",
}

// class
class CustomerResponseFactory {
  customer: Customer;

  constructor(customer: Customer) {
    this.customer = customer;
  }

  createCustomer(customer: Customer): Customer {
    return customer;
  }
}

const customer: Customer = {
  firstName: "Nawaz",
  lastName: "Sharif",
  email: "nawaz@gmail.com",
  mobileNumber: "23178012",
};

class CustomerService {
  isActive: boolean;
  isSuspended: boolean;
  createdAt: Date;

  constructor(isActive: boolean, isSuspended: boolean, createdAt: Date) {
    ((this.isActive = isActive),
      (this.isSuspended = isSuspended),
      (this.createdAt = createdAt));
  }
  customerResponseFactory: CustomerResponseFactory =
    new CustomerResponseFactory(customer);
}

// as and is
interface Products {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  discountPercentage: number;
}

interface Product {
  products: Products[];
}

async function fetchProducts(url: string): Promise<Product> {
  const response = await fetch(url);
  const data = await response.json();
  if (isProduct(data)) {
    const product = data as Product;
    // console.log('Products Found')
    // console.log("Price : ", product.products[0].category);
    return product;
  }
  throw new Error("No Products Found");
}

function isProduct(data: any): data is Product {
  return typeof data.products[0].id === "number";
}

fetchProducts("https://dummyjson.com/products");

// as const
let name = "Nawaz Sharif" as const;

// typeof
const subscription = {
  subscriptionName: "DAZN League",
  subscriptionPrice: 399,
};

type Subscription = typeof subscription;

// keyof
interface Order {
  orderName: string;
  orderStatus: "Pending" | "Delivered" | "Out For Delivery";
}

interface External {
  zoura: string;
  zendesk: string;
  evergent: string;
}

type ordersKey = keyof Order;
type externalKey = keyof External;

//utility-types

// Partial<T>

type BusBooking = {
  fullName: string;
  paymentMethod: {
    paymentType: string;
    expiry: Date;
    cvv: string;
  };
  seatNo: string;
  price: number;
};

type OptionalBooking = Partial<BusBooking>;

// Required<T>

type Customer1 = {
  firstName: string;
  lastName?: string;
  emailId: string;
  password: string;
  mobileNumber?: string;
};

type RequiredCustomer1 = Required<Customer1>;

// Readonly<T>

type PaymentType = "CreditCard" | "Klarna" | "SEPA";

type PaymentDetails = {
  paymentType: PaymentType;
  expiry: Date;
  cvv: string;
};

type PaymentDetailsReadOnly = Readonly<PaymentDetails>;

const paymentDetails: PaymentDetailsReadOnly = {
  paymentType: "CreditCard",
  expiry: new Date(),
  cvv: "123",
};

// Record<K,T>

interface Customer2 {
  emailId: string;
  contactNumber: string;
}

type CustomerInfo = Record<string, Customer2>;

const customer02: CustomerInfo = {
  1: {
    emailId: "nawaz@gmail.com",
    contactNumber: "9063656763",
  },
  2: {
    emailId: "sharif@gmail.com",
    contactNumber: "9398083684",
  },
};

function getCustomerById(id: string) : Customer2 {
    return customer02[id]
}

// console.log(getCustomerById('1'));

// Pick<T,K>

type PaymentMethod = {
    paymentType : 'CreditCard' | 'DebitCard' | 'GiftCoupon'    
}

type MatchTicketBooking = {
    fullName : string,
    aadharCard : string,
    emailId : string,
    contactNumber : string,
    seatNo : string,
    price : number,
    paymentMethod : PaymentMethod
}

type MatchTicketDetails = Pick<MatchTicketBooking, 'paymentMethod'| 'price' | 'seatNo'>


// Omit<T,K>

type CustomerDetailsInMatchTicketBooking = Omit<MatchTicketBooking, 'paymentMethod'| 'price' | 'seatNo'>

// Exclude<U,K>

type ExcludeCreditCardPayment = Exclude<PaymentMethod["paymentType"], 'CreditCard'>

// Extract<U,K>

type ExtractGiftCoupon = Extract<PaymentMethod["paymentType"], 'GiftCoupon'>

//Index Signatures
//Index Signatures are used to define object when the keys are dynamic and for sprcifying type for the keys

type Response = {
    [key:string] : string | number | boolean | {}
}

const response1 : Response = {
    firstName : 'Nawaz',
    lastName : 'Sharif',
    status : 'ActivePaid',
    email : 'nawaz@gmail.com',
    contactNumber : '9063656763'
}

const response2 : Response = {
    firstName : 'Nawaz',
    lastName : 'Sharif',
    status : 'ActivePaid',
    email : 'nawaz@gmail.com',
    contactNumber : '9063656763',
    paymentDetails : {
        paymentType : 'CreditCard',
        expiry : Date.now(),
        cvv : 127
    }
}