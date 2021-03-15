// צרו מחלקה של רכב עם שדות של מס גלגלים נפח מנוע וצבע, בנוסף
//  בנו פונקציה שמחזירה את הפרטים בטקסט אחד. לאחר מכן צרו 3 מחלקות
//  של סוגי רכבים לפי בחירתכן/ם, המחלקות יורשות מהמחלקה רכב. הוסיפו
// לכל מחלקה פונקציה שקוראת לפונקציה ממחלקת ההורה ומחזירה את הטקסט עם שם .

// צרו פונקציית get  באחת ממחלקות הילד שמחזירה תוצאה של פונקציה
// אחרת שמחזירה את השם ב caps lock .

// צרו פונקציה סטטית במחלקה רכב שמקבלת מספר אובייקטים ומחזירה
//  את האובייקט עם נפח המנוע הגדול ביותר.​

// צרו טופס שמקבל נתונים מהמשתמש ועל פי הטופס יוצרת
//  את האובייקט המתאים ומוסיפה אותו לטבלה מתחת לטופס.

class Vihacle {
  constructor(pulleys, engine, color) {
    this.pulleys = pulleys;
    this.engine = engine;
    this.color = color;
  }

  returnProperties() {
    return `pulleys: ${this.pulleys}, engine: ${this.engine}, color: ${this.color}`;
  }

  static returnMaxEngine(obj1, obj2, obj3) {
    if (obj1.engine > obj2.engine && obj1.engine > obj3.engine) {
      return obj1;
    } else if (obj2.engine > obj1.engine && obj2.engine > obj3.engine) {
      return obj2;
    }
    return obj3;
  }
}

class Car extends Vihacle {
  constructor(pulleys, engine, color, name) {
    super(pulleys, engine, color);
    this.name = name;
  }

  get properties() {
    return this.returnPropertiesAndName().toUpperCase();
  }

  returnPropertiesAndName() {
    return `name: ${this.name}, ${super.returnProperties()}`;
  }
}
let car1 = new Car(12, 1200, 'red', 'mazda');
let car2 = new Car(12, 7289, 'red', 'bmw');
let car3 = new Car(12, 325, 'red', 'toyota');

console.log(Vihacle.returnMaxEngine(car1, car2, car3));
console.log(car1.properties);

class Truck extends Vihacle {
  constructor(pulleys, engine, color, name) {
    super(pulleys, engine, color);
    this.name = name;
  }
  returnPropertiesAndName() {
    return `name: ${this.name}, ${super.returnProperties}`;
  }
}

class Bus extends Vihacle {
  constructor(pulleys, engine, color, name) {
    super(pulleys, engine, color);
    this.name = name;
  }
  returnPropertiesAndName() {
    return `name: ${this.name}, ${super.returnProperties}`;
  }
}

let carsArr = [car1, car2, car3];
let trucksArr = [];
let busesArr = [];

// let buttonSub = document.getElementById(buttonId);
function buttonSub() {
  switch (selectId.value) {
    case 'car':
      carsArr.push(
        new Car(pullyes.value, engine.value, color.value, nameC.value)
      );
      tableId.innerHTML += `<tr>
      <td>רכב פרטי</td>
      <td>${pullyes.value}</td>
      <td>${engine.value}</td>
      <td>${color.value}</td>
      <td>${nameC.value}</td>
    </tr>`;
      break;
    case 'truck':
      trucksArr.push(
        new Truck(pullyes.value, engine.value, color.value, nameC.value)
      );
      tableId.innerHTML += `<tr>
      <td>משאית</td>
      <td>${pullyes.value}</td>
      <td>${engine.value}</td>
      <td>${color.value}</td>
      <td>${nameC.value}</td>
    </tr>`;
      break;
    case 'bus':
      busesArr.push(
        new Bus(pullyes.value, engine.value, color.value, nameC.value)
      );
      tableId.innerHTML += `<tr>
      <td>אוטובוס</td>
      <td>${pullyes.value}</td>
      <td>${engine.value}</td>
      <td>${color.value}</td>
      <td>${nameC.value}</td>
    </tr>`;
      break;
  }
}
