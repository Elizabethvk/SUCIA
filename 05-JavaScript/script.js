// Ex. 1
console.log('Hello there!');

// Ex. 2
console.log(6, 2, 6.2);
console.log(6, -2);
console.log(6-2);
console.log(-2);
console.log(6-(-2));
console.log(6- -2);
console.log(6*2);
console.log(6/2);
console.log(6*2-6/2);
console.log((6*2-6)/2);

// Ex. 3

console.log(Math.sqrt(4));
console.log(Math.PI);
console.log(Math.sin(Math.PI/2));
console.log(Math.floor(26.8));
console.log(Math.round(26.8));
console.log(Math.random());
console.log(Math.abs(-2));
console.log(Math.abs(17-35));

// Ex. 4
console.log('\„Не е важно да знаеш всичко, важното е да знаеш къде да го намериш.\“\n Алберт Айнщайн');
console.log(2000+15+"SUICA");
console.log("SUICA"+2000+15);
console.log("a=7, b=14, a+b=21");
console.log("a=",7,"b=",14,"a+b=",21);

// Ex. 5
var a = 'Не е важно да знаеш всичко, важното е да знаеш къде да го намериш';
console.log(a);
console.log(a.length);
console.log(a[0], a[1]);
console.log(a.charAt[4], a.charAt[5]);
console.log(a.concat('\n Албер Айнщайн'));
console.log(a + '\n Албер Айнщайн');

// Ex. 6
console.log(5<12);
console.log(17-5 < 12);
console.log(17-5 <= 12);
console.log(17-5 >= 12);
console.log(17-5 == 12);
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(!false);

// Ex. 7
var a = 3;
var b = 4*a, c = a + b;

console.log(a, b, c);
console.log('a=',a,'b=', b,'c=',c);
console.log('a='+a,'b=4*a='+b,'c=a+b='+c);

// Ex. 8
a = [8, 15, 23, 5, 11];
b = ['червено', 'зелено', 'синьо', 'жълто'];
c = [1,1,1]

console.log(a); //извежда масива а
console.log(b); //извежда масива b
console.log(c); //извежда масива c
console.log(a.length); //връща дължината на масива а
console.log(b.length); //връща дължината на масива b
console.log(c.length); //връща дължината на масива c
console.log(a[3]); //връща елемента с индекс 3 от масива а
console.log(a[2]-a[4]); //връща разликата на елементите с индекси 2 и 4 от масива а
console.log(a.push(7, 9, 18, 8)); //добавя елементите 7, 9, 18, 8 в края на масива а и връща дължината на новия масив
console.log(a); //извежда масива а
console.log(a.length); //връща дължината на масива а
console.log(a.length-b.length); //връща разликата между дължината на масива а и дължината на масива b
console.log(a.slice(2,5)); //връща масив с елементите от масива а с индекси от 2 до 4 включително 
console.log(a.splice(3)); //премахване на всички елементи след този с индекс 3 от масива а, връща масив съдържащ премахнатите елементи
console.log(a); //извежда масива а
console.log(a.concat(c)); //добавяне на масива c към масива а
			
// Ex. 9
b = ['червено', 'зелено', 'синьо', 'жълто'];
			
console.log(b); //извежда масива b        
console.log(b.push('бяло', 'черно')); //добавя елементите 'бяло', 'черно' в края на масива b и връща дължината на новия масив
console.log(b);
console.log(b[4],b[1],b[0]); //извлича и извежда от масива b елементите с индекси 4 1 и 0
console.log(b[b.indexOf('бяло')],b[b.indexOf('зелено')],b[b.indexOf('червено')]); //извлича и извежда от масива b елементите с индекси 4 1 и 0

//първи начин - създаване на масив с елементите бяло, зелено, червено от масива b
d = b.slice(0,2); //създава масив d с елементи, елементите от масива b с индекс от 0 до 1 включително 
console.log(d); //извежда масива d
e = d.concat(b[4]); //създава масив c съставен от масива d към който е добавен елемента с индекс 4 от масива b
console.log(e);
console.log(e.reverse()); //обръща реда на елементите в масива е

//втори начин - създаване на масив с елементите бяло, зелено, червено от масива b
f = []; //създаване на празен масив f
f = f.concat(b[b.indexOf('бяло')]); //добавяне на елемента бяло в масива f
f = f.concat(b[b.indexOf('зелено')]); //добавяне на елемента зелено в масива f
f = f.concat(b[b.indexOf('червено')]); //добавяне на елемента червено в масива f
console.log(f); //извеждане на масива f
console.log(b.sort()); //сортира елементите в масива b по азбучен ред
console.log(b.reverse()); //обръща реда на елементите в масива b
					
// Ex. 10
a = {x:10, y:15, z:2};
console.log(a);

console.log(a.x+a.y);

a.max = Math.max(a.x, a.y, a.z);
a.name = "A"+a.max;
console.log(a);

i = 'z';
console.log('a['+i+']='+a[i]);
i = 'name';
console.log('a['+i+']='+a[i]);

// Ex. 11
a = -2;
b = 8;
c = 16;

if (a>b)
    {
    if (a>c)
        {console.log(a);}
    else
        {console.log(c);}
    }
else
    {
    if (b>c)
        {console.log(b);}
    else
        {console.log(c);}
    }

// Ex. 12
for(var i = 1; i < 10; ++i ) {
    console.log(i+'*'+i, '=', i*i);
}

// Ex. 13
// First type
function getSquare(x) {
    return x*x;
}

console.log(getSquare(4));

// Second
fun = function(x) {
        return x*x;
    }

console.log(fun(5));

// Ex. 14
x = 25;
fun = Math.sqrt;
console.log(fun(x));

// Ex. 15
function multiply(x, y) {
    return x*y;
}

for (var i = 1; i < 11; ++i) {
    for (var k = 1; k< 11; ++k) {
        console.log(multiply(i,k));
    }
}

console.log();

