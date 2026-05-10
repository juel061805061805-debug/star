const x = document.getElementById('title');
const btn = document.getElementById('btnChange');
const btnp1 =   document.getElementById('p1');
const btnp2 =   document.getElementById('p2');
const btnp3 =   document.getElementById('p3');

btn.addEventListener('click', function(){
    x.textContent = "DOM Manipulation is Powerful!";
    btnp1.textContent ="This is paragraph one Updated";
    btnp2.textContent ="This is paragraph two Updated";
    btnp3.textContent ="This is paragraph three Updated";
})

const color = document.getElementById('btnStyle');

color.addEventListener('click', function(){
    //title
x.style.color = "blue";
//paragraph
btnp1.style.color = "green"
btnp2.style.color = "green"
btnp3.style.color = "green";
//p2
btnp2.style.backgroundColor = "lightgray";


} )

const btntoogle = document.getElementById('btnToggle')
  btntoogle.addEventListener("click", function() {
      // Generate a random color
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

      // Toggle: if background is gray, change to random; else reset to gray
    //   if (document.body.style.backgroundColor === "gray") {
        document.body.style.backgroundColor = randomColor;
    //   } else {
    //     document.body.style.backgroundColor = "gray";
    //   }
    });

