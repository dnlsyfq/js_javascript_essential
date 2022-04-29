```
alert()
```

# DOM
```
window.document
document.body
document.title
document.URL
document.getElementById("")
document.getElementsByClassName("") // array
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