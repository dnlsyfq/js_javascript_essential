```
alert()
typeof <var>


thing = [] // return object
thing = {} // return object
typeof thing === "object" && thing.hasOwnProperty("length") // true

thing = null // thing === null , return true

lodash // 

```

### Float Decimals
```
float.toFixed(int)
```

### Currency
* need locale, currency
*ja-Jp
*en-CA
```
const number = 23434.34

console.log(new Intl.NumberFormat('de-De',{style:'currency',currency:'EUR'}).format(number));
```

```
const formatter = (locale, currency, value) => {
  value = value.toFixed(2)
  let formattedValue = new Intl.NumberFormat(locale,{
    style:'currency',
    currency:currency,
  }).format(value);
  return formattedValue;
}


const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(locale,currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale,currency,tip)}
      Total:          ${formatter(locale,currency,total)}
    `);
};

// tipCalculator(29.95, 18);

tipCalculator(29.95, 18,'de-De','EUR');
```

### Callback Function
```
// Helper function to format currency numbers. Used by tipCalculator
const formatter = (locale = "en-US", currency = "USD", value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
};

// Callback receives finalTip object, creates and outputs table on the DOM.
const printHTML = (finalTip) => {
  const tipTable = document.createElement("table");
  tipTable.innerHTML = `
    <tr>
      <td>Sum before tip:</td>
      <td>${finalTip.sum}</td>
    </tr>
    <tr>
      <td>Tip percentage:</td>
      <td>${finalTip.percentage}</td>
    </tr>
    <tr>
      <td>Tip:</td>
      <td>${finalTip.tip}</td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>${finalTip.total}</td>
    </tr>
  `;
  document.querySelector("main").append(tipTable);
};

// Create a finalTip object with all the data. Send it to the printHTML callback.
const tipCalculator = (sum, percentage, locale, currency,callback) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  const finalTip = {
    sum: formatter(locale, currency, sum),
    percentage: percentage + "%",
    tip: formatter(locale, currency, tip),
    total: formatter(locale, currency, total),
  };

  callback(finalTip)
};

tipCalculator(29.95, 18, "de-DE", "EUR",printHTML);


```

```
class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired,
    image
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
    this.image = image;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Backpack;

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
  <figure class="backpack__image">
    <img src=${everydayPack.image} alt="" loading="lazy" />
  </figure>
  <h1 class="backpack__name">${everydayPack.name}</h1>
  <ul class="backpack__features">
    <li class="feature backpack__volume">Volume:<span> ${
      everydayPack.volume
    }l</span></li>
    <li class="feature backpack__color">Color:<span> ${
      everydayPack.color
    }</span></li>
    <li class="feature backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
    <li class="feature backpack__pockets">Number of pockets:<span> ${
      everydayPack.pocketNum
    }</span></li>
    <li class="feature backpack__strap">Left strap length:<span> ${
      everydayPack.strapLength.left
    } inches</span></li>
    <li class="feature backpack__strap">Right strap length:<span> ${
      everydayPack.strapLength.right
    } inches</span></li>
    <li class="feature backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen ? "open" : "closed"
    }</span></li>
  </ul>
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

```

### Ternary Operator
```
console.log(everydayPack.lidOpen ? "open" : "closed")

var job = animal === "cat" ? "cat herder" : "dog catcher";
```

# Array
```
let item = "flashlight";

const collection = ["Piggy", item, 5, true];

collection[2] = "camera";
// console.log(collection.length)
collection[collection.length] = "new item";
collection[9] = "at the end";

console.log(collection[8]);
console.log(collection[9]);

```

# DOM
```
window.document
document.body
document.title
document.URL
document.getElementById("")
document.getElementsByClassName("") // array html collection
document.getElementsByTagName("") // array
document.querySelector("") 
document.querySelectorAll("")
document.querySelector(" ").innerHTML // text
document.querySelector(" ").outerHTML // <h2>text</h2>
document.querySelector(" ").id = <newId> // change ID
document.querySelector(" ").className
document.querySelector(" ").classList // domtokenlist
document.querySelector(" ").classList.add("<class>")
document.querySelector(" ").classList.remove("<class">)
document.querySelector(" ").classList[1]
document.querySelector(" ").classList.toggle("<class>") // on/off return true/false
document.querySelector(" ").classList.contains("<class>") // true/false
element.hasAttribute(name)
element.setAttribute(attribute name, attribute value)
element.removeAttribute(attributename)
element.getAttribute(attributename) // return attr value

const ctaElement = document.querySelector(".cta a")
console.log(ctaElement.attributes)
if(ctaElement.hasAttribute("target")){
    console.log(ctaElement.getAttribute("target"))
} else {
    ctaElement.setAttribute("target","_blank");
}


document.querySelector('main') // html tag
document.querySelector('.maincontent') // class
document.querySelector('main li:last-child') // parent child


document.querySelectorAll('main li') // nodeslist
document.querySelectorAll('main li').forEach(i => i.style.backgroundColor='red')

document.querySelector('h1').className
document.querySelector('h1').className = 'new-class

// multiple class
document.querySelector('main li:first-child').classList
document.querySelector('main li:first-child').classList.add('new-class')
document.querySelector('main li:first-child').classList.remove('new-class')
document.querySelector('main li:first-child').classList.toggle('new-class')
document.querySelector('main li:first-child').classList.replace('old-class','new-class')


// attributes
document.querySelector('img').hasAttribute('src')
document.querySelector('img').getAttribute('src')
document.querySelector('img').setAttribute('alt','backpack')
document.querySelector('img').removeAttribute('src')

document.querySelector('.site-title').style




```

## DOM Element Create Method
```
.createElement()
.createTextNode()
.appendChild()
```
```
const fig = document.querySelector('.featured-image');
const img = fig.querySelector('img');
const altImg  = img.getAttribute('alt');
// console.log(altImg);
const figCap = document.createElement('figcaption');
const figCapText = document.createTextNode(altImg);
// figCap.textContent = 'Earthrise on the moon!';

figCap.appendChild(figCapText);
fig.appendChild(figCap);

```

## Add Inline CSS to an element
add any css property to any element via js using style attribute
inline css overrides whatever css 
```
document.querySelector('.cta a').style
document.querySelector('.cta a').style.color = ''
document.querySelector('.cta a').style.cssText = 'padding: 1em; color: white; background-color: red;'

.hasAttribute("style")
.getAttribute("style")
.setAttribute("style","color:red")
.removeAttribute("style")

document.querySelector(".cta a").setAttribute("style","padding: 2em")
document.querySelector(".cta a").setAttribute("style","padding: 2em; color: green;")

```




```
new Date()


var date = new Date()
date.getMonth() 
date.getDate()
date.getFullYear()
```

### Javascript Console to HTML

```
document.body.innerHTML= "<h1> Date today is </h1> " + new Date()
```

### Inline Javascript HTML


```
<body>
<script>
    var date = new Date()
    document.body.innerHTML = "<H1>Today is: " + date + "</h1>" ;
</script>
</body>
```

### External Javascript 
<script src="" async></script>


script.js
```
    var date = new Date();
    document.body.innerHTML = "<h1>Today is: " + date + "</h1>";
```

index.html
```
<body>
    <script="script.js">
    </script>
</body>
```

### Conditional statements

```
if (everydayPack.volume > 15 && everydayPack.pocketNum >= 5) {
  console.log("Backpack is used")
} else {
  console.log("Backpack is new")
}
```
```
if (everydayPack.volume > 15 || everydayPack.pocketNum >= 5) {
  console.log("Backpack is used")
} else {
  console.log("Backpack is new")
}
```

### switch

```
    switch(true){
        case age < 30:
            description="new"
            break;
        case age  >= 30 && age < 365;
            description="lightly used"
            break;
        case age >= 365 && age < 1095;
            description="used"
            break;
        case age >= 1095;
            description="old";
            break;
        default:
            console.log(`There is no description for ${age}.`);
    }
```

```
let answer =window.prompt("Type yes, no or maybe")

switch(answer){
  case "YES":
    console.log("You said YES!");
    break;
  case "MAYBE":
    console.log("You maybe");
    break;
  case "NO":
    console.log("You said no");
    break;
  default:
    console.log("You rebel");
    break;
}
```

### Terse ifs
```
if (expr) console.log("")
if (expr) console.log("") else console.log("")
```

## ternary operator
```
var animal = 'cat';

animal === 'cat' ? console.log("it's a cat"):console.log("it's a dog")

```
### loop

* array
```
const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

let stuffList = document.createElement("ul");

for (let i = 0; i < stuff.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = stuff[i];
  stuffList.append(listItem);
}

for (const item of stuff) {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  stuffList.append(listItem);
}

stuff.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  stuffList.append(listItem);
});
```

* object

```
const nestedObjects = {
  item01: {
    name: "piggy",
    type: "toy",
    weight: 30,
  },
  item02: {
    name: "headlamp",
    type: "equipment",
    weight: 120,
  },
  item03: {
    name: "pen",
    type: "tool",
    weight: 30,
  },
  item04: {
    name: "pencil",
    type: "tool",
    weight: 30,
  },
  item05: {
    name: "eraser",
    type: "tool",
    weight: 40,
  },
  item03: {
    name: "water bottle",
    type: "equipment",
    weight: 1300,
  },
};

let stuffList = document.createElement("ul");

for (const singleObject in nestedObjects) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `Name: ${nestedObjects[singleObject].name}`;
  stuffList.append(listItem);
}
```

### Array map

```
const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

let stuffList = document.createElement("ul");

const stuffItems = stuff.map((item) => {
  let listItem = document.createElement('li');
  listItem.innerHTML = item;
  return listItem;
})

stuffItems.forEach((item)=>{
  stuffList.append(item);
})
```

### Literal string and ternary

```
<li class="feature backpack__lid">
    Lid status:<span>${item.lidOpen ? "open":"closed"}</span>
</li>
```

### Event Listener

```
target.addEventListener(event,callback fn, options)

```

### Escape Sequences
```
\'	  single quote
\"	  double quote
\\	  backslash
\n	  newline
\r	  carriage return
\t	  tab
\b	  backspace
\f	  form feed
```
