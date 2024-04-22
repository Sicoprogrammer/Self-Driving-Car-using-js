const canvas=document.getElementById("myCanvas");//setting the height
canvas.height=window.innerHeight;
canvas.width=200;

const ctx=canvas.getContext("2d");//getting the context of two dimentional
const car=new Car(100, 100, 30,50);
car.draw(ctx);
