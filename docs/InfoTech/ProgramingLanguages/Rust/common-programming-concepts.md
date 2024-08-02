# 常见编程概念

## 变量和可变性

### 不可变变量

```rust
fn main() {
    let x = 5;
    println!("The value of x is: {x}");
    // 下方报错，因为x是不可变变量
    x = 6;
    println!("The value of x is: {x}");
}
```

### 可变变量

```rust
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    // x是可变变量，所以可以再次赋值
    x = 6;
    println!("The value of x is: {x}");
}
```

### 常量

```rust
// 全大写加下划线
const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
```

### 隐藏

我们可以定义一个与之前变量同名的新变量。
称之为第一个变量被第二个 隐藏（Shadowing） 了，
这意味着当您使用变量的名称时，编译器将看到第二个变量。
实际上，第二个变量“遮蔽”了第一个变量，
此时任何使用该变量名的行为中都会视为是在使用第二个变量，
直到第二个变量自己也被隐藏或第二个变量的作用域结束。
可以用相同变量名称来隐藏一个变量，以及重复使用 let 关键字来多次隐藏，如下所示：

```rust
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    }

    println!("The value of x is: {x}");
}
```

隐藏与将变量标记为 `mut` 是有区别的。当不小心尝试对变量重新赋值时，如果没有使用 `let` 关键字，就会导致编译时错误。
通过使用 `let`，我们可以用这个值进行一些计算，不过计算完之后变量仍然是不可变的。
`mut` 与隐藏的另一个区别是，当再次使用 `let` 时，实际上创建了一个新变量，我们可以改变值的类型，并且复用这个名字。

## 数据类型

### 标量

标量类型代表一个单独的值。
Rust 有四种基本的标量类型：整型、浮点型、布尔类型和字符类型。

## 整型

### Rust 中的整型

| 长度      | 有符号     | 无符号     |
|---------|---------|---------|
| 8-bit   | `i8`    | `u8`    |
| 16-bit  | `i16`   | `u16`   |
| 32-bit  | `i32`   | `u32`   |
| 64-bit  | `i64`   | `u64`   |
| 128-bit | `i128`  | `u128`  |
| arch    | `isize` | `usize` |

另外，isize 和 usize 类型依赖运行程序的计算机架构：64 位架构上它们是 64 位的， 32 位架构上它们是 32 位的。

### Rust 中的整型字面值

| 数字字面值                 | 例子            |
|-----------------------|---------------|
| Decimal (十进制)         | `98_222`      |
| Hex (十六进制)            | `0xff`        |
| Octal (八进制)           | `0o77`        |
| Binary (二进制)          | `0b1111_0000` |
| Byte (单字节字符)(仅限于`u8`) | `b'A'`        |

### 整型溢出

比方说有一个 `u8` ，它可以存放从零到 `255` 的值。那么当你将其修改为 `256` 时会发生什么呢？这被称为 “整型溢出”（“integer
overflow” ），这会导致以下两种行为之一的发生。当在 debug 模式编译时，Rust 检查这类问题并使程序 _panic_，这个术语被 Rust
用来表明程序因错误而退出。
部分会详细介绍 panic。

在 release 构建中，Rust 不检测溢出，相反会进行一种被称为二进制补码回绕（_two’s complement wrapping_
）的操作。简而言之，比此类型能容纳最大值还大的值会回绕到最小值，值 `256` 变成 `0`，值 `257` 变成 `1`
，依此类推。依赖整型回绕被认为是一种错误，即便可能出现这种行为。如果你确实需要这种行为，标准库中有一个类型显式提供此功能，[`Wrapping`](https://doc.rust-lang.org/std/num/struct.Wrapping.html)。
为了显式地处理溢出的可能性，你可以使用标准库在原生数值类型上提供的以下方法:

- 所有模式下都可以使用 `wrapping_*` 方法进行回绕，如 `wrapping_add`
- 如果 `checked_*` 方法出现溢出，则返回 `None`值
- 用 `overflowing_*` 方法返回值和一个布尔值，表示是否出现溢出
- 用 `saturating_*` 方法在值的最小值或最大值处进行饱和处理

### 浮点型

```rust
fn main() {
    let x = 2.0; // f64

    let y: f32 = 3.0; // f32
}
```

### 数值运算

```rust
fn main() {
    // addition
    let sum = 5 + 10;

    // subtraction
    let difference = 95.5 - 4.3;

    // multiplication
    let product = 4 * 30;

    // division
    let quotient = 56.7 / 32.2;
    let floored = 2 / 3; // Results in 0

    // remainder
    let remainder = 43 % 5;
}
```

### 布尔型

```rust
fn main() {
    let t = true;

    let f: bool = false; // with explicit type annotation
}
```

### 字符类型

Rust的 `char` 类型是语言中最原生的字母类型。下面是一些声明 `char` 值的例子：

```rust
fn main() {
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';
}
```

注意，我们用单引号声明 `char` 字面量，而与之相反的是，使用双引号声明字符串字面量。  
Rust 的 `char` 类型的大小为四个字节(four bytes)，并代表了一个 Unicode 标量值（Unicode Scalar Value），
这意味着它可以比 ASCII 表示更多内容。  
在 Rust 中，带变音符号的字母（Accented letters），中文、日文、韩文等字符，emoji（绘文字）以及零长度的空白字符都是有效的 `char`
值。  
Unicode 标量值包含从 `U+0000` 到 `U+D7FF` 和 `U+E000` 到 `U+10FFFF` 在内的值。  
不过，“字符” 并不是一个 Unicode 中的概念，所以人直觉上的 “字符” 可能与 Rust 中的 `char` 并不符合。

## 复合类型

复合类型（Compound types）可以将多个值组合成一个类型。Rust 有两个原生的复合类型：元组（tuple）和数组（array）。

### 元组

```rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);

    let (x, y, z) = tup;

    println!("The value of y is: {y}");

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
}
```

不带任何值的元组有个特殊的名称，叫做 单元（unit） 元组。这种值以及对应的类型都写作 ()，表示空值或空的返回类型。如果表达式不返回任何其他值，则会隐式返回单元值。

### 数组

Rust中的数组长度是固定的

可以像这样编写数组的类型：在方括号中包含每个元素的类型，后跟分号，再后跟数组元素的数量。

```rust
fn main() {
    let a: [i32; 5] = [1, 2, 3, 4, 5];
}
```

你还可以通过在方括号中指定初始值加分号再加元素个数的方式来创建一个每个元素都为相同值的数组：

```rust
fn main() {
    let a = [3; 5];
}
```

访问数组元素:

```rust
fn main() {
    let a = [1, 2, 3, 4, 5];

    let first = a[0];
    let second = a[1];
}
```

## 函数

Rust 代码中的函数和变量名使用 snake case 规范风格。在 snake case 中，所有字母都是小写并使用下划线分隔单词。

```rust
fn main() {
    print_labeled_measurement(5, 'h');
}

fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {value}{unit_label}");
}
```

### 语句和表达式

**语句**（_Statements_）是执行一些操作但不返回值的指令。表达式（_Expressions_）计算并产生一个值。

```rust
fn main() {
    // 等号后面的大括号是代码块
    let y = {
        let x = 3;
        // 下面这行最后没有写分号，表明这是一个表达式
        x + 1
    };

    println!("The value of y is: {y}");
}
```

### 具有返回值的函数

```rust
fn main() {
    let x = plus_one(5);

    println!("The value of x is: {x}");
}

fn plus_one(x: i32) -> i32 {
    // 注意最后没有写分号，表明这是返回值，加了分号就报错
    x + 1
}
```

## 控制流

```rust
fn main() {
    let number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
```

### if表达式

if 和 else 分支的值类型必须相容

```rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {number}");
}
```

### 循环

Rust 有三种循环：loop、while 和 for。

loop:

```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            // break 表达式，它停止循环并返回后面的值
            break counter * 2;
        }
    };

    println!("The result is {result}");
}
```

循环标签：

```rust
fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
}
```

while:

```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{number}!");

        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```

for:

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];
    let mut index = 0;

    while index < 5 {
        println!("the value is: {}", a[index]);

        index += 1;
    }
}
```

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("the value is: {element}");
    }
}
```

```rust
fn main() {
    for number in (1..4).rev() {
        println!("{number}!");
    }
    println!("LIFTOFF!!!");
}
```