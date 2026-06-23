## TypeScript : 

Typescript is a superset of Javascript.
Typescript is Javascript with types.
Typescript is a development tool or a wrapper around javascript.
Typescript basically adds `static typing` which provides type safety on our javascript code during compile time itself.


## What is .ts and .tsx files ?

.ts file means plain type script which is generally used in backend projects working with Node.js , Express.js etc.,
.tsx file means typescript + JSX  which is generally used in frontend projects working with React.js.

## What is tsc ?

Browsers or Node.js doesnt understands typescript, So the in the end, Typescript is transpiled(transform + compiled) into javaScript by tsc(typescript compiler), so that the browsers can understand the code.

command : tsc <fileName.ts> 
Example : tsc index.ts --> tsc converts typescript code to javascript and add a new file .js file --> index.js --> Now run this javascript code --> node index.js

## TypeScript Installation 

1. `Installing Globally :`

command : `sudo pnpm install -g typescript`

2. `Project specific installation :`

command : `pnpm install typescript --save-dev`

## Project Setup 

How to create tsconfig file ?

tsc --init

## tsconfig.json Configurations

| Option             | Meaning                         | Why it matters                |
| ------------------ | ------------------------------- | ----------------------------- |
| `module`           | Module system used in output JS | Modern Node.js compatibility  |
| `moduleResolution` | How TS finds imported files     | Matches Node’s behavior       |
| `baseUrl`          | Root path for imports           | Cleaner, shorter imports      |
| `outDir`           | Folder for compiled files       | Keeps dist separate from src  |
| `sourceMap`        | Generate `.map` files           | Debug in TypeScript           |
| `noImplicitAny`    | Forbid untyped variables        | Catch bugs early              |
| `include`          | Which files to compile          | Only compile your source code |


🧠 Section 1: "compilerOptions"

This block tells the TypeScript compiler (tsc) how to compile your project — basically, what rules and behaviors to follow.

🔹 `"module": "NodeNext"`

Purpose: Specifies the module system TypeScript should use when generating JavaScript.

"NodeNext" is the latest module system option designed to work seamlessly with both CommonJS (require) and ES Modules (import/export) in Node.js.
It automatically detects which system to use based on your file extension (.ts vs .mts or .cts) or your package.json "type" field.

Use case:

If "type": "module" in package.json → TypeScript emits ESM code.

If "type": "commonjs" → emits CommonJS code.

Great for projects migrating from CommonJS to ESM.

Analogy:
Think of "NodeNext" as “smart mode” that knows how to handle modern Node.js module rules.

🔹 `"moduleResolution": "node"`

Purpose: Controls how TypeScript finds modules when you import something.

Explanation:
"node" means: use the Node.js resolution algorithm — the same way Node itself finds modules.

It checks local files first.

Then looks inside node_modules.

Tries adding .ts, .js, .json, .d.ts automatically.

Why it’s important:
Makes TypeScript behave consistently with Node.js imports.

🔹 `"baseUrl": "src"`

Purpose: Sets the root directory for non-relative imports.

Explanation:
Without this, you must use relative paths like:

import { util } from "../../utils/helpers";


With "baseUrl": "src", you can simplify to:

import { util } from "utils/helpers";


Why: Cleaner, shorter imports — especially in large projects.

🔹 `"outDir": "dist"`

Purpose: Defines where compiled JavaScript files should go.

Explanation:
When you run tsc, your .ts files in src/ get compiled into .js files in the dist/ folder.

Example:

src/
  index.ts
dist/
  index.js


Why: Keeps your source (src) and compiled (dist) code separate — cleaner project structure.

🔹 `"sourceMap": true`

Purpose: Enables generation of .map files for debugging.

Explanation:
When you compile TypeScript, it produces .js and .js.map files.
These map back to your original .ts source code, so debuggers (like VS Code) can show your TypeScript code instead of the generated JS during breakpoints.

Why: Better debugging experience — step through original TypeScript, not compiled code.

🔹 `"noImplicitAny": true`

Purpose: Enforces stricter type checking.

Explanation:
TypeScript normally allows this:

function greet(name) {
  console.log(name);
}


Here, name implicitly becomes any.
With "noImplicitAny": true, this becomes an error — you must explicitly type it:

function greet(name: string) {
  console.log(name);
}


Why: Helps catch potential bugs early and ensures your code is strongly typed.

🧩 `Section 2: "include": ["src/**/*"]`

Purpose: Tells TypeScript which files to include in the compilation.

Explanation:
"src/**/*" means:

Start from src/ folder

Include all files and subfolders

Include all file extensions supported by TypeScript (.ts, .tsx, .d.ts)

Why: Keeps your compilation focused only on your project code — avoids compiling test files, node_modules, etc.


## Syntax

const variableName : type = value

type given should be in the lower case.


## Type alias

Type alias in TS is used to create custom names for a type. It makes our code clean,reusable,maintainable.

Example : 

type User = {
    firstName : string,
    lastName : string,
    email: string,
    contactNumber : string
}

How to extend(inherit) type? use `&` 

type User = {
    firstName : string,
    lastName : string,
    email : string,
    phoneNumber : string
}

type cardDetails = {
    cardType : number,
    cvv : number,
    expiry : Date
}

type Customer = User & cardDetails

const customer : Customer = {
    firstName : 'Nawaz',
    lastName : 'Sharif',
    email : 'n@n.com',
    phoneNumber : '+8129732',
    cardType : 12345,
    cvv : 12323,
    expiry : new Date()
}

👉 Rule of thumb:

Use interface when describing the shape of an object or class.

Use type when describing unions, primitives, tuples, or complex combinations.


## Arrays in TypeScript

const variableName : Array<type> = []

let variableName : number[] = []

let arrayOfArrays : number[][] = []


# Unions(pipe symbol | )

For a variable unions in TS helps to hold multiple types.

Example : 
let score : number | string = 100;
score = 'Good'


How to define a array which can takes both number and string

const array : (number | string ) [] = ['A', 2, 'C',4]

## Tuples

Tuples are fixed-length array in which types and order of elements are known.

** They’re often used for key-value pairs, coordinates, or returning multiple values from a function.


## Enums 

Enums are special data types in TypeScript which allows us to define group of named constant values.

 Example : 

 enum BusinessCategory {
    GASTRONOMY = 'Gastronomy',
    HOTELROOM = 'HotelRoom',
    BAR = 'Bar',
    GAMELIBRARY = 'GameLibrary',
    HOTEL= 'Hotel'
}

## Interface

In TypeScript interfaces are used to define structure of an object. Like what all properties and fucntions a object can have.

## declare

The declare keyword tells TypeScript about things that exist elsewhere, so it can do type checking without requiring their actual implementation.

## interface VS type

-----------------------------------------------------------------------------------------------------
| `Feature`                    | `interface`                         | `type` 
| **Purpose**                  | Defines object structure (contract) | Can define any type (objects, unions, primitives, etc.) |
| **Extending**                | Can use `extends` keyword           | Can use intersection(& `)                             |
| **Merging**                  | ✅ Supports declaration merging      | ❌ Cannot be merged                                      |
| **Unions & Intersections**   | ❌ Only works via `extends`          | ✅ Fully supports both                                   |
| **Primitives / Aliases**     | ❌ Cannot alias primitives           | ✅ Can alias primitives                                  |
| **Implementation by class**  | ✅ Can be implemented by classes     | ✅ Can also, but lesscommon
-----------------------------------------------------------------------------------------------------

## class

- In TypeScript , class represents blueprint for creating objects with properties and methods.

Example : 

class Customer {
    firstName : string;
    lastName : string;
    email : string;
    private readonly password : string;
    phoneNumber : string;

    constructor(firstName : string, lastName : string, email : string, password : string, phoneNumber : string){
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.password = password
        this.phoneNumber = phoneNumber
    }

    getFullName(){
        return `${this.firstName + " " + this.lastName}`
    }

}

## Constructor : 

- Its a special method inside class, which is used to initialize properties inside the class.
- constructor gets invoked on `new` keyword while creating a class.

## super 

- super keyword invokes the base/parent constructor

## Access Modifiers

---------------------------------------------------------------
| Modifier    | Meaning                                       |
| ----------- | --------------------------------------------- |
| `public`    | (default) accessible everywhere               |
| `private`   | accessible only inside the class              |
| `protected` | accessible in class + subclasses              |
| `readonly`  | value cannot be modified after initialization |
---------------------------------------------------------------

## Inheritance 

- Inheritance is a mechanism in which one class(child/subclass) extends another class (parent/superclass) to reuse and specialize its properties and methods.

Example : 

class Subscription `extends` Customer {
    subscriptionName : string;
    subscriptionPrice : number;

    constructor(firstName : string, lastName : string, email : string, password : string, phoneNumber : string,subcriptionName : string, subsciptionPrice : number){
        super(firstName,lastName,email, password, phoneNumber)
        this.subscriptionName = subcriptionName,
        this.subscriptionPrice = subsciptionPrice
    }

    getFullName(): string {
        return `${"Hello " + this.firstName + " " + this.lastName}`
    }
}

## static

- static members/properties/methods belongs to the class itself.
- static members can be invoked with the className itself like Customer.something
- static members cannot be invoked using new keyword.

For Example if class A has a static property email , if class B extends class A
in this scenario class B can access static fields email using its className which is A.email

## static vs private

![alt text](image.png)

## get & set 

- get : A getter allows you to retrieve a property value in a controlled way.
- set : A setter allows you to modify a property value, possibly with validation or side effects.

## Abstraction (abstract)

- A abstract class is a base class which cannot be instantiated directly. which means object of a abstract class cannot be created directly. It is meant to be inherited by other classes(child/sub)


- abstract class can have concrete(unimplemented) methods as well , which means only method declaration.
- abstract class can have abstract(implemented) methods as well , which means method defination as well. Reason behind this to give shared common feature for all the child classes
- The child classes which extends the abstract classes should impelement the unimplemented methods of a abstarct class and for implemented methods of abstract class it is optional for child class to implement that method


## Difference between interface vs abstract 

| Feature                  | **Interface**                                 | **Abstract Class**                                  |
| ------------------------ | --------------------------------------------- | --------------------------------------------------- |
| **Instantiation**        | Cannot be instantiated                        | Cannot be instantiated                              |
| **Purpose**              | Defines **structure/contract** only           | Defines **structure + shared logic**                |
| **Methods**              | Only **declarations**                         | Can have **both abstract and concrete methods**     |
| **Properties**           | Only **declarations**                         | Can have **fields, constructors, access modifiers** |
| **Access Modifiers**     | ❌ Not allowed                                 | ✅ Allowed (`public`, `private`, `protected`)        |
| **Implementation**       | `implements` keyword                          | `extends` keyword                                   |
| **Multiple inheritance** | A class can implement **multiple interfaces** | A class can extend **only one abstract class**      |
| **Use case**             | When you just need a **contract**             | When you want a **base class with shared logic**    |
| **Code reusability**     | ❌ No implementation sharing                   | ✅ Can reuse logic in parent class                   |


## Generics 

Generics in the TS is used for the code reusability and type safe.

Note : 

the input type should always match with output type

Example :

function doOperation<T>(param : T) : T {
    return param
}

If you want to restrict the input param to be some exact data type is number, string, boolean use `extends` keyword in <>

function test<T extends number | string | boolean> (value : T) : T {
    return value
}


| Feature              | `any`  | Generics                 |
| -------------------- | ------ | ------------------------ |
| Type safety          | ❌ Lost | ✅ Maintained             |
| Code reusability     | ✅      | ✅                        |
| IntelliSense support | ❌      | ✅ Full autocomplete      |
| Flexibility          | ✅      | ✅                        |
| Recommended?         | 🚫     | ✅ Always prefer generics |

## as const 

- `as const` tells TypeScript: treat this value as a deeply immutable literal — make every property readonly and infer the narrowest literal types (string/number/boolean literals, tuple literals) instead of widening them to string, number, boolean, or Array<T>.

Example : 

const subscriptions = {
  India: { subscriptionName: "DAZN India Premium", price: 499 },
  USA: { subscriptionName: "DAZN US Sports",     price: 9.99 },
  Germany: { subscriptionName: "DAZN Bundesliga",  price: 12.99 },
} as const;

`as const` here does two things:

- Makes every property readonly (deeply). You cannot reassign subscriptions.India or subscriptions.India.price.

- Infers literal types for the values, not broad types.

- "DAZN India Premium" is typed as the literal type "DAZN India Premium" (not string).

- 499 is typed as the literal type 499 (not number).

## keyof 

- keyof T produces a union of the property keys of type T.
- Those keys are represented as string literal types (or number / symbol when present).

NOTE : Even optional keys are included in keyof.

Example :

type Person = {
  name: string;
  age: number;
  email? : string
};

type PersonKeys = keyof Person;

PersonKeys becomes:
// same as:
//type PersonKeys = "name" | "age" | "email";

## typeof 

- You use it to turn a variable into its type.

const person = {
  name: "Nawaz",
  age: 25,
};

type PersonType = typeof person;
Now PersonType becomes:

// same as
//type PersonType = {
  name: string;
  age: number;
};

💡 Quick Analogy

Imagine typeof as a type scanner 🔍
and keyof as a key extractor 🔑.

| Concept        | Think of it as...                   | Example               | Result                          |
| -------------- | ----------------------------------- | --------------------- | ------------------------------- |
| `keyof`        | “Get the property names of a type”  | `keyof Person`        | `"name" \| "age"`               |
| `typeof`       | “Get the type of a value”           | `typeof person`       | `{ name: string; age: number }` |
| `keyof typeof` | “Get the keys of a variable’s type” | `keyof typeof person` | `"name" \| "age"`               |

## is keyword

- The is keyword is used in type predicates — it tells TypeScript that a function can check the type of a value at runtime, and narrow its type in the type system.

Syntax : 

- It’s used in function return types like this:

function functionName(parameterName: any): parameterName is Type {
  // return true/false
}


✅ Example 1 — Basic

function isString(value: unknown): value is string {
  return typeof value === "string";
}

Here’s what happens:

isString() returns a boolean at runtime.

But TypeScript understands:

“If this function returns true, then the value is a string.”

So is helps TypeScript understand runtime checks and narrow types safely.

✅ Example 2 — Narrowing custom types
interface Dog {
  type: "dog";
  bark(): void;
}

interface Cat {
  type: "cat";
  meow(): void;
}

function isDog(animal: Dog | Cat): animal is Dog {
  return animal.type === "dog";
}

const pet: Dog | Cat = { type: "dog", bark: () => console.log("woof") };

if (isDog(pet)) {
  pet.bark(); // ✅ TypeScript knows it's a Dog
} else {
  pet.meow(); // ✅ TypeScript knows it's a Cat
}

## as keyword

The as keyword is used to tell TypeScript:

“Trust me, I know this value’s type.”

You use it when you know more than the compiler — it doesn’t change runtime behavior, only TypeScript’s type checking.


## Utility types 

1. Partial<T>

- Partial<T> is a built-in TypeScript utility type that takes an object type T and returns a new type where every property of T is optional.

NOTE : Partial<T> is shallow — it only affects the top level, not nested objects.

interface Outer {
  inner: { name: string };
}
type R = Required<Outer>; // R.inner is optional, but R.inner.name is still required

Example :

interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// Equivalent to:
// {
//   id?: number;
//   name?: string;
//   email?: string;
// }

UseCase : Building flexible APIs where consumers only need to pass the fields they want to change.


2. Required<T>

- Required<T> is a built-in utility type in TypeScript that does the opposite of Partial<T>.

- It takes an object type T and returns a new type where all optional properties are made required.

NOTE : Required<T> is shallow — it only affects the top level, not nested objects.

interface Outer {
  inner?: { name?: string };
}

type R = Required<Outer>; // R.inner is required, but R.inner.name is still optional

Example : 

interface User {
  id?: number;
  name?: string;
  email?: string;
}

type RequiredUser = Required<User> ; // Make all the members required

3. Readonly<T>

- Readonly<T> is a built-in TypeScript utility type that takes an object type T and returns a new type where all properties are readonly, meaning they cannot be reassigned after creation.

NOTE : Readonly<T> is shallow — it only applies to top-level properties.

<!-- interface Profile {
  name: string;
  address: {
    city: string;
  };
}

const p: Readonly<Profile> = {
  name: "Nawaz",
  address: { city: "Delhi" }
};

p.name = "Ali"; // ❌ Error (readonly)
p.address.city = "Mumbai"; // ✅ Allowed — because it's shallow! -->


Example :

interface User {
  id: number;
  name: string;
  email: string;
}

type ReadonlyUser = Readonly<User>;

Transformation : 
{
  readonly id: number;
  readonly name: string;
  readonly email: string;
}

4. Record<K,T>

- Record<K, T> is a mapped type in TypeScript that constructs an object type whose keys are K and whose values are of type T.

- Think of it as a typed dictionary or map.

Example : 

<!-- type Country = 'de' | 'at' | 'fr' | 'it'

interface SubscriptionInformation {
  subscriptionName: string;
  subscriptionPrice: number;
}

type SubscriptionRecords = Record<Country, SubscriptionInformation>

const subscriptionRecords: SubscriptionRecords = {
    de : {
    subscriptionName: "de_core",
    subscriptionPrice: 399,
  },
  at: {
    subscriptionName: "at_core",
    subscriptionPrice: 299,
  },
  fr: {
    subscriptionName: "fr_core",
    subscriptionPrice: 199,
  },
  it: {
    subscriptionName: "it_core",
    subscriptionPrice: 99,
  },
};  -->

## Pick<Type,keys>

- Pick is a TypeScript built-in utility type that lets you create a new type by picking (selecting) one or more properties from another type.

- Defination -- Pick<Type, Keys>

- Type → the original type (object/interface)

- Keys → one or more property names (keys) from that type

Example : 

interface Person {
  name: string;
  age: number;
  email: string;
}

// pick only name and email
type ContactInfo = Pick<Person, "name" | "email">;

Nested Usecase :

interface Product {
  id: number;
  details: {
    name: string;
    price: number;
    category: string;
  };
}

type ProductDetails = Pick<Product["details"], "name" | "price">;

// { name: string; price: number; }


## Omit 

- Omit is a TypeScript utility type that creates a new type by removing (omitting) one or more properties from another type.

- Think of is as : “Take this type, but exclude some keys.”

Omit<Type, Keys>

Type → the original object or interface

Keys → the property names you want to remove

interface Person {
  name: string;
  age: number;
  email: string;
}

// Remove email
type PersonWithoutEmail = Omit<Person, "email">;

Now PersonWithoutEmail becomes 

// same as:
type PersonWithoutEmail = {
  name: string;
  age: number;
};

Nested types :

interface Product {
  id: number;
  name: string;
  details: {
    price: number;
    category: string;
    stock: number;
  };
}

// You can omit nested type fields by targeting inner types
type ProductDetailsWithoutStock = Omit<Product["details"], "stock">;

// { price: number; category: string; }


## Exclude<T,U>

- Exclude is a TypeScript utility type that removes types from a union.

Think of it as:

“From type T, remove all members that are assignable to U.”

Syntax : 

Exclude<T, U>
T → the original union type

U → the type(s) you want to exclude

🧠 Example 1 — Exclude multiple values
type Status = "active" | "inactive" | "banned" | "suspended";

type ActiveStatus = Exclude<Status, "banned" | "suspended">;

🧠 Example 2 — Exclude with primitive types

type Mixed = string | number | boolean;
type OnlyNumbers = Exclude<Mixed, string | boolean>;

🧠 Example 3 — Exclude with keyof

interface Person {
  name: string;
  age: number;
  email: string;
  password: string;
}

type PublicKeys = Exclude<keyof Person, "password">;

// "name" | "age" | "email"

## Extract <>

- Extract is a TypeScript utility type that keeps only the types from T that are assignable to U.
- Think of it as: “From type T, extract (keep) only what matches U

Syntax : Extract<T, U>
T → the original union type

U → the types you want to keep

Example 1 :
type Status = "active" | "inactive" | "banned";

type AllowedStatus = Extract<Status, "active" | "inactive">;

Result : type AllowedStatus = "active" | "inactive";
Here:

Exclude would remove "active" and "inactive".

Extract keeps only "active" and "inactive".

## Examples of Extract<T,U> & Exclude<T,U>

# Thumb rule 
- Exclude would remove unions from original unions.
- Extract would Keeps only unions from original unions.

type CustomerStatus = 'ActivePaid' | 'ActiveGrace' | 'Suspended' | 'ContractEnded'

type ActiveCustomerStatus = Exclude<CustomerStatus, 'Suspended' | 'ContractEnded'>

type InActiveCustomerStatus = Extract<CustomerStatus, 'Suspended' | 'ContractEnded'> 

## NonNullable<T>

- NonNullable<Type> is a utility type that removes null and undefined from a given type.

- So if a type could possibly be null or undefined, NonNullable ensures that it cannot be either of those.

🧩 Real-world Example

Imagine you’re fetching data from an API:
type Customer = {
  id: string;
  email: string | null;
  phone?: string;
};

You might have a function like:
function sendEmail(customer: Customer) {
  const email: NonNullable<Customer['email']> = customer.email!;
  console.log(`Sending email to ${email}`);
}
Here, by using NonNullable<Customer['email']>,
you’re making sure that email cannot be null or undefined — if it is, TypeScript will warn you.

Example 2 : self

function sendEmail(email : NonNullable<string>) : boolean {
    if(email) return true
    return false
}

const result = sendEmail(null)
const result2 = sendEmail('nawaz@gmail.com')

Example 3 : self

type FirstName = string | null | undefined

type NonNullableFirstName = NonNullable<FirstName> // only string is the type now


## ts-node

- ts-node is a tool that allows you to run TypeScript code directly, without manually compiling it to JavaScript first.

How to install ?

npm install -D ts-node

🔧 Without ts-node, Normally, you’d need to do this:

tsc index.ts   # Compile TypeScript → JavaScript
node index.js  # Run the compiled JS file

⚡ With ts-node
You can just do: ts-node index.ts

| Command                | Works When                     | Recommended     |
| ---------------------- | ------------------------------ | --------------- |
| `ts-node index.ts`     | Only if installed globally     | ❌ Not ideal     |
| `npx ts-node index.ts` | Always (local or temp install) | ✅ Best practice |

