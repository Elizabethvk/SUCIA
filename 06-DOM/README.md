# BOM

## Какво е BOM
- Browser Object Model
- Програмен интерфейс към браузър
- Позволява достъп чрез JS до
    - Съдържанието на показваната страница
    - Параметрите на прозореца на браузъра
    - Историята на навигация, бисквитки и т.н.

## Структура на BOM

### Главен обект window
- Съдържание на страницата в обект document
- Свойства на прозореца в обект screen
- Текущ адрес и история в обекти location и history
- Настройки на браузъра в обект navigator

# DOM

## Какво е DOM

- Document Object Model
- Модел за представяне на HTML документи чрез обекти
- Браузърите предоставят програмен интерфейс към DOM през обекта window.document на своя BOM

## Възможности

- Достъп и промяна на HTML елементи
- Достъп и промяна на CSS стилове
- Достъп и промяна на събития, породени от работата на браузъра или действията на потребителя

## Обаче

- DOM само позволява достъп и промяна
- Самият достъп и промяна се правят с код на JS

## Работа с DOM

## Общ алгоритъм

- Намираме желания елемент или елементи
- Получаваме JS обекти  със свойства атрибутите на елемент
- Променяме техните свойства

## Синхронизация със зареждането

- Атрибут onload на елемента body – активира се при завършване на зареждането на страница


## Намиране на елемент

### Търсене по id
- Търсене по атрибут id с getElementById
- Резултатът е обект с намереният елемент или undefined
- Стилът на елемента е свойството style на обекта

```JavaScript
var e = document.getElementById('one');
e.style.color = 'red';

document.getElementById('three').style.color =
						 '#0000FF'; 
```

### Фамилия методи getElements
Търсене по атрибут class с getElementsByClassName
Търсене по тип на елемента с getElementsByTagName
Резултатът е масив от намерените елементи

```JavaScript
var li = document.getElementsByTagName('li');

for (var e=0; e<li.length; e++)
	li[e].style.backgroundColor = 'yellow';
```

## Оразмеряване на обекти

### Намиране на размер
С рамката – offsetWidth и offsetHeight
Без рамката – clientWidth и clientHeight
Според стила – style.width и style.height

```js
var e = document.getElementById('box');
console.log(e.offsetWidth+' x '+e.offsetHeight);
console.log(e.clientWidth+' x '+e.clientHeight);
console.log(e.style.width+' x '+e.style.height);
```

### Промяна на размер

Промяна на размер
Няколко текстови полета с различна ширина
С натискане на бутон ги подравняваме по най-широкото
Но clientWidth не може да се променя програмно, затова променяме style.width

```js
var spans = document.getElementsByTagName('span');
				
var max = 0;
for (var i=0; i<spans.length; i++)
	max = Math.max(max,spans[i].clientWidth);

for (var i=0; i<spans.length; i++)
	spans[i].style.width = max+'px';
```

## Съдържание на елемент

### HTML съдържание
Пълно съдържание на елемент като HTML текст с innerHTML
Ако има вътрешни елементи, те са под формата на тагове
Пример с извличане на съдържание от едни елементи и записването му в други

```js
var q = '';
var b = document.getElementsByTagName('b');
for (var i=0; i<b.length; i++) q += b[i].innerHTML;

document.getElementById('result').innerHTML = q;
```

### Съдържание на текстово поле
Показваният текст е в атрибута value
Ако трябва да се ползва като число, трябва да преобразуваме с Number, parseInt или parseFloat

```js
var n1=Number(document.getElementById('num1').value);
var n2=Number(document.getElementById('num2').value);

document.getElementById('res').innerHTML=n1+n2;

```

### Съдържание на списък
Елементите са дефинирани с тагове select и option, като показваната и реалната стойност могат да са различни
Изборът на елемент от списъка активира onchange

```js
<select id="list" onchange="newSelection()">
	<option value="Morbi ipsum primis">Morbi</option>
	<option value="Vel orci luctus">Vel</option>
</select>
```

Достъпът до избраната стойност е през value

```js
document.getElementById('list').value;
```

## Събития

### Някои видове събития
При движение с мишката
При активиране на HTML елемент
При работа с клавиатурата
При промени в размера на прозореца
При завършване на зареждането на страница

### Свойства на събитията
Където се е случило – това е HTML, DOM или BOM елемент
Функция на JS, която трябва да го обработи
Допълнителни параметри към събитието, които зависят от типа на събитието
Повечето събития са характерни за много елементи и се ползват по един и същ начин
Някои елементи имат специфични събития, само за тях

### Често използвани събития

- Общи събития
*onload* – при пълно зареждане на страницата 
*onresize* – при промяна на размера на страницата

- Събития към HTML елементи
*onclick* – при кликване върху елемент
*onchange* – промяна на съдържанието на елемент
*onmousemove* – при движение на мишката над елемент
*onkeypress* – при натискане на клавиш

## Улавяне на събития

### Чрез атрибут на HTML елемент
Името на атрибута е име на събитието
Стойността на атрибута е JS код за изпълнение

```js
<button onclick="recolor(0)">Rhoncus</button>
<button onclick="recolor(1)">Eleifend</button>
<button onclick="recolor(2)">Dictum</button>
```

### Чрез метод на DOM елемент
Задаване на стойност на метод на елемент
Чрез съществуваща или чрез анонимна функция

```js
b = document.getElementById('but1');
b.onclick = recolorAll;

b = document.getElementById('but2');
b.onclick = function ()
	{
		var p;
		p = document.getElementsByTagName('p');
		p[1].style.color='blue';
	};
```

### Чрез „слушател на събития“
Синтаксис element.addEventListener(event,function)
Името на събитието е без представката on
Функцията е или явна или анонимна

```js
b = document.getElementById('but1');
b.addEventListener('click',recolorAll);

b = document.getElementById('but2');
b.addEventListener('click',function ()
{
	var p = document.getElementsByTagName('p');
	p[1].style.color='blue';
});
```

