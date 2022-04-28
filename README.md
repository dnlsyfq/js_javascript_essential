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