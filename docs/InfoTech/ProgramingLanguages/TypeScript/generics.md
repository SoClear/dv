# 泛型

## 介绍

软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。  
组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用`泛型`来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

## 泛型之Hello World

下面来创建第一个使用泛型的例子：`identity` 函数。  
这个函数会返回任何传入它的值。 你可以把这个函数当成是 `echo` 命令。

不用泛型的话，这个函数可能是下面这样：

```typescript
function identity(arg: number): number {
    return arg;
}
```

或者，我们使用 `any` 类型来定义函数：

```typescript
function identity(arg: any): any {
    return arg;
}
```

使用 `any` 类型会导致这个函数可以接收任何类型的 `arg` 参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。  
如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 _类型变量_ ，它是一种特殊的变量，只用于表示类型而不是值。

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

我们给 `identity` 添加了类型变量 `T` 。  
`T` 帮助我们捕获用户传入的类型（比如： `number` ），之后我们就可以使用这个类型。  
之后我们再次使用了 `T` 当做返回值类型。  
现在我们可以知道参数类型与返回值类型是相同的了。  
这允许我们跟踪函数里使用的类型的信息。

我们把这个版本的`identity`函数叫做泛型，因为它可以适用于多个类型。  
不同于使用 `any`，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。

我们定义了泛型函数后，可以用两种方法使用。  
第一种是，传入所有的参数，包含类型参数：

```typescript
// type of output will be 'string'
let output = identity<string>("myString");
```

这里我们明确的指定了 `T` 是 `string` 类型，并做为一个参数传给函数，使用了 `<>` 括起来而不是 `()` 。

第二种方法更普遍。  
利用了 _类型推论_  -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：

```typescript
// type of output will be 'string'
let output = identity("myString");
```

注意我们没必要使用尖括号（ `<>` ）来明确地传入类型；  
编译器可以查看 `myString` 的值，然后把`T`设置为它的类型。  
类型推论帮助我们保持代码精简和高可读性。  
如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。

```typescript
// 单个泛型
function f1<T>(a: T): T {
    return a
}

// 多个泛型
function f2<T, K>(a: T, b: K): T {
    console.log(b)
    return a
}

// 自动推断泛型
f1(10)
// 指定泛型
f1<number>(9)

interface MyInterFace {
    length: number
}

// T extends MyInterFace 表示泛型T必须实现MyInterFace
function f3<T extends MyInterFace>(a: T): number {
    return a.length
}

// 类也可有泛型
class MyClass<T> {
    constructor(public name: T) {
    }
}

const mc = new MyClass<string>("孙悟空")
```

## 使用泛型变量

使用泛型创建像 `identity` 这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。  
换句话说，你必须把这些参数当做是任意或所有类型。

看下之前 `identity` 例子：

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

如果我们想同时打印出 `arg` 的长度。 我们很可能会这样做：

```typescript
function loggingIdentity<T>(arg: T): T {
    // Error: T doesn't have .length
    console.log(arg.length);
    return arg;
}
```

如果这么做，编译器会报错说我们使用了 `arg` 的 `.length` 属性，但是没有地方指明 `arg` 具有这个属性。  
记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 `.length` 属性的。

现在假设我们想操作 `T` 类型的数组而不直接是 `T` 。由于我们操作的是数组，所以 `.length` 属性是应该存在的。  
我们可以像创建其它数组一样创建这个数组：

```typescript
function loggingIdentity<T>(arg: T[]): T[] {
    // Array has a .length, so no more error
    console.log(arg.length);
    return arg;
}
```

你可以这样理解 `loggingIdentity` 的类型：

* 泛型函数 `loggingIdentity` ，接收类型参数 `T` 和参数 `arg` ，
* 它是个元素类型是`T`的数组，并返回元素类型是`T`的数组。

如果我们传入数字数组，将返回一个数字数组，因为此时 `T`的的类型为`number`。  
这可以让我们把泛型变量 `T` 当做类型的一部分使用，而不是整个类型，增加了灵活性。

我们也可以这样实现上面的例子：

```typescript
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    // Array has a .length, so no more error
    console.log(arg.length);
    return arg;
}
```

使用过其它语言的话，你可能对这种语法已经很熟悉了。 在下一节，会介绍如何创建自定义泛型像 `Array<T>` 一样。

## 泛型类型

上一节，我们创建了 `identity` 通用函数，可以适用于不同的类型。  
在这节，我们研究一下函数本身的类型，以及如何创建泛型接口。

泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
```

我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <U>(arg: U) => U = identity;
```

我们还可以使用带有调用签名的对象字面量来定义泛型函数：

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: {<T>(arg: T): T} = identity;
```

这引导我们去写第一个泛型接口了。  
我们把上面例子里的对象字面量拿出来做为一个接口：

```typescript
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。  
这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： `Dictionary<string>而不只是Dictionary` ）。  
这样接口里的其它成员也能知道这个参数的类型了。

```typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

注意，我们的示例做了少许改动。  
不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。  
当我们使用 `GenericIdentityFn` 的时候，还得传入一个类型参数来指定泛型类型（这里是：`number` ），锁定了之后代码里使用的类型。  
对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。

除了泛型接口，我们还可以创建泛型类。  
注意，无法创建泛型枚举和泛型命名空间。

泛型接口:接口也可以配合泛型来使用，以增加其灵活性，增强其复用性。

```typescript
interface IdFunc<Type> {
    id: (value: Type) => Type
    ids: Array<Type>
}

const obj:IdFunc<number> ={
    id(value: number): number {
        return value;
    },
    ids: [1,3,5]
}
```

解释:

* 在接口名称的后面添加 `<类型变量>` ，那么，这个接口就变成了泛型接口。
* 接口的类型变量，对接口中所有其他成员可见，也就是接口中所有成员都可以使用类型变量。
* 使用泛型接口时，需要显式指定具体的类型（比如，此处的 `IdFunc<nunber>` )
* 此时， id方法的参数和返回值类型都是 `number` ; `ids` 方法的返回值类型是 `number[]` 。

## 泛型类

泛型类看上去与泛型接口差不多。 泛型类使用（ `<>` ）括起泛型类型，跟在类名后面。

```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

`GenericNumber` 类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用`number`类型。  
也可以使用字符串或其它更复杂的类型。

```typescript
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
```

与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型。

我们在[类](https://www.tslang.cn/docs/handbook/classes.html)那节说过，类有两部分：静态部分和实例部分。  
泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。

## 泛型约束

你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。  
在 `loggingIdentity` 例子中，我们想访问 `arg` 的 `length` 属性，但是编译器并不能证明每种类型都有 `length` 属性，所以就报错了。

```typescript
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
```

相比于操作any所有类型，我们想要限制函数去处理任意带有 `.length` 属性的所有类型。  
只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。  
为此，我们需要列出对于 `T` 的约束要求。

为此，我们定义一个接口来描述约束条件。 创建一个包含 `.length` 属性的接口，使用这个接口和 `extends` 关键字来实现约束：

```typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    // Now we know it has a .length property, so no more error
    console.log(arg.length);
    return arg;
}
```

现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：

```typescript
// Error, number doesn't have a .length property
loggingIdentity(3);
```

我们需要传入符合约束类型的值，必须包含必须的属性：

```typescript
loggingIdentity({length: 10, value: 3});
```

## 在泛型约束中使用类型参数

你可以声明一个类型参数，且它被另一个类型参数所约束。  
比如，现在我们想要用属性名从对象里获取这个属性。  
并且我们想要确保这个属性存在于对象 `obj` 上，因此我们需要在这两个类型之间使用约束。

```typescript
function getProperty(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
// okay
getProperty(x, "a");
// error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
getProperty(x, "m");
```

泛型的类型变量可以有多个，并且类型变量之间还可以约束（比如，第二个类型变量受第一个类型变量约束)。  
比如，创建一个函数来获取对象中属性的值:

```typescript
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}
let person = { name: 'jack ', age:18 }
getProp(person,'name')
```

解释:

* 添加了第二个类型变量Key，两个类型变量之间使用（,）逗号分隔。
* `keyof` 关键字接收一个对象类型，生成其键名称（可能是字符串或数字）的联合类型。
* 示例中 `keyof Type` 实际上获取的是 `person` 对象所有键的联合类型，也就是: `'name' | 'age'` 。
* 类型变量 `Key` 受 `Type` 约束，可以理解为: `Key` 只能是 `Type` 所有键中的任意一个，或者说只能访问对象中存在的属性。

## 在泛型里使用类类型

在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，

```typescript
function create<T>(c: {new(): T; }): T {
    return new c();
}
```

一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。

```typescript
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
// typechecks!
createInstance(Lion).keeper.nametag;
// typechecks!
createInstance(Bee).keeper.hasMask;
```

## 泛型工具类

### Partial

`Partial<Type>` 用来构造（创建)一个类型，将 `Type` 的所有属性设置为可选。

```typescript
interface Props {
    id: number
    children: number[]
}

type PartialProps = Partial<Props>

const p1: Props = {
    children: [], id: 0
}

const p2: PartialProps = {}

// undefined
console.log(p2.children)
```

解释: 构造出来的新类型 `Partialprops` 结构和 `Props` 相同，但所有属性都变为可选的。

### Readonly

`Readonly<Type>` 用来构造一个类型，将 `Type` 的所有属性都设置为 `readonly` (只读)。

```typescript
interface Props {
    id: number
    children: number[]
}

type ReadonlyProps = Readonly<Props>

const p1: Props = {
    children: [], id: 0
}

p1.id = 1

const p2: ReadonlyProps = {
    children: [], id: 0
}

// 下行报错 
// p2.id = 1
```

解释: 构造出来的新类型 `ReadonlyProps` 结构和 `Props` 相同，但所有属性都变为只读的。

当我们想重新给id属性赋值时，就会报错:无法分配到"id"，因为它是只读属性。

### Pick

`Pick<Type, Keys>` 从 `Type` 中选择一组属性来构造新类型。

```typescript
interface Props {
    id: number
    children: number[]
    title: string
}

type PickProps = Pick<Props, 'id' | 'children'>

const p1: Props = {
    children: [], id: 0, title: ""
}

const p2: PickProps = {
    children: [], id: 0
}
```

解释：

* Pick 工具类型有两个类型变量：第一个类型变量表示选择谁的属性，第二个类型变量表示选择哪几个属性。
* 其中第二个类型变量，如果只选择一个则只传入该属性名即可。
* 第二个类型变量传入的属性只能是第一个类型变量中存在的属性。
* 构造出来的新类型 `PickProps` ，只有 `id` 和 `title` 两个属性类型。

### Record

`Record<Keys,Type>` 构造一个对象类型，属性键为 `Keys` ，属性类型为 `Type` 。

```typescript
type RecordObj = Record<'a' | 'b' | 'c', Array<string>>

let obj: RecordObj = {
    a: ['a'],
    b: ['a', 'b'],
    c: ['a', 'b', 'c']
}
```

解释：

* Record工具类型有两个类型变量:第一个表示对象有哪些属性，第二个表示对象属性的类型。
* 构建的新对象类型 `RecordObj` 表示:这个对象有三个属性分别为 `a/b/c` ，属性值的类型都是 `string[]` 。
