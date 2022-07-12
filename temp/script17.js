// JS - динамически типизированый объектный яык
//  Типы данных:
//1. String - все, что находится внутри кавычек
//2. Namber - пишется без кавычек
//3. Boolean - булево значение, принимает либо true, либо false
//4. Undefined - не нйдено let c; consol.log(c) indefined
//5. null
//6. object - какой-то набор данных, котрый записывается в формате ключ-значение
//7. simbol
//  false = 0 ''(без пробела) undefined null NaN
//  Чтобы проверить тип переменной:  typeof пробел само значение
// Любой тип данных можно перервести в другой.

console.log(Boolean("Dona")) //true
console.log(Boolean(-7)) //true
console.log(Boolean(true)) //true
console.log(Boolean(false)) //false
console.log(Boolean(0)) //false
console.log(Boolean("")) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(null)) //false
console.log(Boolean(NaN)) //false

console.log(String(7777)) //7777
console.log(typeof 7777) //namber
console.log(typeof "Dona") //sring
console.log(typeof String(7777)) //string

console.log(Number("Dona")) //NaN
console.log(Number("Dona7777")) //NaN - не число
console.log(Number("7777")) //7777
console.log(typeof Number("7777")) //number

console.log(Number(false)) //0
console.log(Number(true)) //1
console.log(Number("")) //0
console.log(Number("privet")) //NaN
console.log(String(true)) //true
console.log(String(false)) //false

console.log(5 * "Dona") //NaN
console.log(5 / "Dona") //NaN
console.log(5 - "Dona") //NaN

console.log(5 + "Dona") // 5Dona Конкатенация

console.log(5 * "Dona" + "privet") // NaNprivet
console.log(5 + "Dona" * "privet") //NaN, потому что действуем по принципам математики и умножение будет первым действием.
// Но!!
console.log("qwerty" + "Dona" * "privet") //qwertyNaN

//тип NaN - это namber

console.log(777 / 0) // Infinity
console.log(-777 / 0) // -Infinity
console.log(-777 / 0 + 777 / 0) //NaN , нельзя складывать бесконечности

// Операторы сравнения < > <= >= == === !
console.log(777 < 77) //false
console.log(777 > 77) //true
console.log(777 == 77) //false

console.log(77 == "77") //true
console.log(77 === "77") //false
console.log(false == "") //true
console.log(false == 0) //true
console.log(false == undefined)
console.log(false == null)
console.log(false == NaN)
// !
console.log(Boolean(1)) //true
console.log(!!1) //true
//Обратно из Boolean получить другой тип данных нельзя

console.log(Number("777")) //777
console.log(+"777") //777
console.log("777" * 1) //777

console.log(String(666)) //666
console.log("" + 666) //666

const message = 200
console.log(!message) //false
//200=>!true=>false
console.log(Boolean(message)) //true
console.log(!!message) //true
console.log(message) //числ0 200
console.log(String(message)) //строка 200 серого цвета
console.log("" + message) // строка 200 конкатенация
// как из строку преобразовать в число:
const str = "1000"
console.log(str) //строка 1000
console.log(Number(str)) //число 1000 синего цвета
console.log(str * 1) //число 1000
// Унарный плюс
console.log(+str) // унарный плюс число1000 слово Namber заменили +
const b = "2000"
console.log(str + b) // cтрока 10002000
console.log(+str + +b) // число 3000
// Функции округления
// Функция Math.round Math.floor Math ceil
const mon = 10
const tue = 19
const wed = 7
const thu = 8
const fri = 9
console.log(Math.round((mon + tue + wed + thu + fri) / 5))
// функция toFixed
const decNumber = 312.5435
console.log(decNumber.toFixed(2)) //312,54
console.log(decNumber.toFixed())
//Math.random
console.log(Math.round(Math.random() * 10))
// Методы строк: length
const stroka = "Hello world"
console.log(stroka.length) // 11, потому что 10 букв + 1 пробел
console.log(stroka[stroka.length - 1]) // d  метод, позвлояет вывести любую букву, в данном случау d
// charAt - позволяет изменить любую букву в строке , например с маленькой на большую
const Name = "maria"
console.log(Name.charAt(0).toUpperCase() + Name.slice(1))
// includes включено
const bazadannih = "petya vasya oleg"
console.log(bazadannih.includes("petya")) //true есть в базе дынных
console.log(bazadannih.includes("maria")) //false нет в базу
//trim - брезает нечаянно набранные пользователем пробелы
const N = "   Hello world  "
console.log(N.trim())
// Шаблонная строка
const firstName = "Мария"
const secondName = "Cкопкова"
const age = 45
console.log(
  "Меня зовут " +
    secondName +
    " " +
    firstName +
    ". " +
    "Мне " +
    age +
    " " +
    "лет"
)
// Интерполяция
// Косые кавычки, буква ё ${}
console.log(`Меня зовут ${secondName} ${firstName}. Мне ${age + 1} лет`)

// Object
const obj = {}
console.log(typeof obj)
const container = {
  width: "100px",
  height: "100px",
  backgroundColor: "red",
}
console.log(container)
// внутри оbject можно менять ключи, хоть это и const-постоянная
container.backgroundColor = "blue"

// ссылочный тип
const user = {
  name: "Maria",
  age: "45",
  gender: "female",
}
/*const newUser = user // клонируем
console.log(newUser)
user.age = 46
console.log(newUser)
// Можно склонировать полностью весь объект с помощью спредоператора ...  или добавить что-то свое через запятую, напр: kek shrek
//const newUser = { ...user }*/
const dopInfo = {
  gorod: "Perm",
  uliza: "Lenina",
  dom: 32,
}
user.age = 46
const newUser = { ...user, ...dopInfo, kek: "shrek" }
console.log(newUser)

// Метод tooString, перобразует число в строкуо
const a = 10
console.log(a.toString())
// Array - массив
//  Задача
/* 1. Изменить возраст Мария на 49
  2. Добавить объекту с полем Наташа gender: female
  3. Сделать тоже самое без мутации.*/

const arr = [
  { name: "Мария", age: 45 },
  { name: "Наташа", age: 30 },
  { name: "Виталий", age: 31 },
]
/* решение
arr[0].age = 49
arr[1].gender = "female"
console.log(arr)*/
//либо:
const newArr = [...arr]
newArr[0].age = 49
newArr[1].gender = "female"
console.log(newArr)
//Запомнить : Пустой объект не равен путому объекту
const obj1 = {}
const obj2 = {}
console.log(obj == obj2) //false

// if  else
const ocenki = null
if (ocenki === 5) {
  console.log("мама купит телефон")
} else if (ocenki === 4) {
  console.log("мама купит мне жвачку")
} else {
  console.log("ничего не купят")
}

/*  Задача:
 Если переменная а равна "test", то выведите в консоль "Верно", иначе выведите не верно.
 Проверить работу скрипта при а, равном "test","тест",3.
 Решить задачу через if-else*/
let o = "test"
//o = "тест"
if (o === "test") {
  console.log("Верно")
} else {
  console.log("Неверно")
}
/* Cоздайте переменные m и n. В т поместите произвольное числовое значение.
Напишите оператор ветвления if так, чтобы если т было больше 50, то в переменную n помещалось слово "большое", иначе - слово "маленькое".
Решить задачу через if-else.*/
let m = 51
let n
if (m > 50) {
  console.log((n = "Большое"))
} else {
  console.log((n = "Маленькое"))
}
/* Если переменная z равна нулю или равна двум, то прибавьте к ней 7.
  иначе поделите ее на 10. Выведите в консоль новое значение переменной
  Проверьте работу скрипта при а, равном 5, 0, -3, 2.*/
//    || - или
let z = 0 // 0, -3, 2
if (z === 0 || z === 2) {
  console.log((z = z + 7))
  //            z +=7
} else {
  console.log((z = z / 10))
  //            z/= 10
}
//  0,5   7   -0,3    9
/* Если перерменная а равна или меньше 1, а переменная b больше или равна3,
то выведите сумму этих переменных в консоль, иначе выведите их разност (результат вычитания).
Проверьте работу скрипта при а и b, равном 1 и 3, 0 и 6, 3 и 5 соответсвенно.*/
const j = 1
const s = 3
if (j <= 1 && s >= 3) {
  console.log(j + s)
} else {
  console.log(j - s)
}
/* Создать переменную seasons, которая может принимать строку.
 Если она имеет занчение "декабрь", "январь", или "февраль", то в 
 консоль вывести сообщение "зима",
 если имеет значение "апрель", "март" или "май" - "весна",
 если имеетзначение "июнь", "июль", или "август" - "лето",
 имеет значение "сентябрь", "октябрь", или "ноябрь" - "осень".
 Решить задачу через switch-case. */
let seasons = "oktober"
switch (seasons) {
  case "декабрь":
  case "январь":
  case "февраль": {
    console.log("zima")
    break
  }
  case "mar":
  case "apr":
  case "may": {
    console.log("vesna")
    break
  }
  case "oktober":
  case "september":
  case "november": {
    console.log("osen")
  }
}
//switch
let btn = "aktive"
switch (btn) {
  case "aktive":
    {
      console.log("кнопка активна")
    }
    break
  case "disabled":
    {
      console.log("кнопка выключена")
    }
    break
} //кнопка активна

let searchMachine = "Google"
/* if(searchMachine === "Google") {
  consol.log("Поисковая система гугл");
}else ef (searchMachine === 'yandex') {
  consol.log('поисковая система яндекс')
}*/
switch (searchMachine) {
  case "Google":
    {
      console.log("Поисковая система гугл")
    }
    break
  case "Yandex":
    {
      console.log("Поисковая система яндекс")
    }
    break
  default: {
    console.log("Не знаю таих поисковых систем")
  }
}
/* Создать переменную time. Которая может принимать число.
 Если число равно или больше 0 и меньше или равно 15:
 вывести в консоль "Время относится к четверти часа".
 Если число больше 15 и меньше или равно 30:
 вывести в консоль "время относится к половине часа".
 Если число больше 30 и меньше или равно 45:
 вывести в консоль "время относится к 3/4 часа".
 Если число больше 45 и меньше или равно 60:
 в консоль вывести "вермя относится к целому часу".
 Если число не подходит по всем условиям:
 вывести в консоль "неизвестный диапазон".
 Для решения задачи в условии потребуется логический оператор && (и),
 и условие либо if else, либо switch case.*/

const time = 12
if (time >= 0 && time <= 15) {
  console.log("время отностится к четверти часа")
} else if (time > 15 && time <= 30) {
  console.log("время относится к половине часа")
} else if (time > 30 && time <= 45) {
  console.log("время относится к 3/4 часа")
} else if (time > 45 && time <= 60) {
  console.log("вермя относится к целому часу")
} else {
  console.log("неизвестный диапазон")
}
// время отностися к четверти часа
