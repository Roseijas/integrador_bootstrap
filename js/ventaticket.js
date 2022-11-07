//definir el valor de la entrada

const valorTickets=200;

//defino valor de descuento

var estudiante  =80;
var trainee     =50;
var junior      =15;

//captura datos de los inputs

let nombre          =document.getElementById("nombre");
let apellido        =document.getElementById("apellido");
let mail            =document.getElementById("mail");
let cantidad        =document.getElementById("cantidad"); 
let categoria       =document.getElementById("tipo");


let btnResumen = document.getElementById("botonResumen");

let btnBorrar = document.getElementById("botonBorrar");

function totalAPagar() 
{
//verifico nombre
if(nombre.value==="")
{alert("Verifique nombre");
nombre.classlist.add("is-invalid")
nombre.focus();
return;}


//verifico apellido
if(apellido.value==="")
{alert("Verifique apellido");
apellido.classlist.add("is-invalid")
apellido.focus();
return;}


//verifico mail 
if(mail.value==="")
{alert("Verifique email");
mail.classlist.add("is-invalid")
mail.focus();
return;}

//Para determinar si el email es valido
const emailValido = mail => 
{return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);}

if(!emailValido(mail.value))
{  alert("Escribir bien el mail...");
   mail.classList.add("is-invalid");
   mail.focus();
   return ;}

if ((cantidad.value<=0)|| (isNaN(cantidad.value)))  

{alert("Verifique cantidad de tickets");
mail.classList.add("is-invalid")
mail.focus();
return;}

//verifico mail 
if(mail.value==="")
{alert("Verifique email");
mail.classlist.add("is-invalid")
mail.focus();
return;}




let totalValorTickets=(cantidad.value)*valorTickets;

if(categoria.value==0)
{totalValorTickets=totalValorTickets;}

if(categoria.value==1)
{totalValorTickets=totalValorTickets-(estudiante/100 * totalValorTickets);}

if(categoria.value==2)
{totalValorTickets=totalValorTickets-(trainee/100 * totalValorTickets);}

if(categoria.value==3)
{totalValorTickets=totalValorTickets-(junior/100 * totalValorTickets);}

document.getElementById("totaltexto").innerHTML=totalValorTickets;
}


function resetTotalAPagar() 
{ quitarClaseError ();
totaltexto.innerHtml="";}


function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}


//boton resumen
btnResumen.addEventListener ("click", totalAPagar);

//boton borrar
btnBorrar.addEventListener("click", resetTotalAPagar);
