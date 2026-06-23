// Primitives
const firstName = "Srija";
const age = 27;
const isRegularlyStudying = false;
const semiFinalTeams = [
    "Argentina",
    "Spain",
    "France",
    "Germany",
];
//funcion
function calculatePrice(actualPrice, discount) {
    return actualPrice - discount;
}
const finalPrice = calculatePrice(100, 10);
const grade = 100;
const deployEnv = "Prod";
//enum
var BusinessCategory;
(function (BusinessCategory) {
    BusinessCategory[BusinessCategory["Gastronomy"] = 0] = "Gastronomy";
    BusinessCategory[BusinessCategory["HotelRoom"] = 1] = "HotelRoom";
    BusinessCategory[BusinessCategory["Restuarant"] = 2] = "Restuarant";
    BusinessCategory[BusinessCategory["Hotel"] = 3] = "Hotel";
})(BusinessCategory || (BusinessCategory = {}));
var CustomerStatus;
(function (CustomerStatus) {
    CustomerStatus["ActivePaid"] = "ActivePaid";
    CustomerStatus["ActiveGrace"] = "ActiveGrace";
    CustomerStatus["ContractEnded"] = "ContractEnded";
    CustomerStatus["Suspended"] = "Suspended";
})(CustomerStatus || (CustomerStatus = {}));
// class
class CustomerResponseFactory {
    customer;
    constructor(customer) {
        this.customer = customer;
    }
    createCustomer(customer) {
        return customer;
    }
}
const customer = {
    firstName: "Nawaz",
    lastName: "Sharif",
    email: "nawaz@gmail.com",
    mobileNumber: "23178012",
};
class CustomerService {
    isActive;
    isSuspended;
    createdAt;
    constructor(isActive, isSuspended, createdAt) {
        ((this.isActive = isActive),
            (this.isSuspended = isSuspended),
            (this.createdAt = createdAt));
    }
    customerResponseFactory = new CustomerResponseFactory(customer);
}
async function fetchProducts(url) {
    const response = await fetch(url);
    const data = await response.json();
    if (isProduct(data)) {
        const product = data;
        // console.log('Products Found')
        // console.log("Price : ", product.products[0].category);
        return product;
    }
    throw new Error("No Products Found");
}
function isProduct(data) {
    return typeof data.products[0].id === "number";
}
fetchProducts("https://dummyjson.com/products");
// as const
let name = "Nawaz Sharif";
// typeof
const subscription = {
    subscriptionName: "DAZN League",
    subscriptionPrice: 399,
};
const paymentDetails = {
    paymentType: "CreditCard",
    expiry: new Date(),
    cvv: "123",
};
const customer02 = {
    1: {
        emailId: "nawaz@gmail.com",
        contactNumber: "9063656763",
    },
    2: {
        emailId: "sharif@gmail.com",
        contactNumber: "9398083684",
    },
};
function getCustomerById(id) {
    return customer02[id];
}
console.log(getCustomerById('1'));
export {};
//# sourceMappingURL=index.js.map