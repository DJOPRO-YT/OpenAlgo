/*
 Open-source Algo Interpretter
 by Jasser Riahi
*/
const input_inter = document.getElementById("input-inter");
const output_inter = document.getElementById("output-inter");

const VarTypes = {
  "-1": "Indefinie",
  "0": "Entier",
  "1": "Reel",
  "2": "Booleen",
  "3": "Chaine",
  "4": "Caractere",
  "5": "Enregistrement",
  "6": "Tableau",
  "7": "Matrice"
};

list_vars = []
list_functions = [
 {name:"lire",type:0,function:lire},
 {name:"ecrire",type:0,function:ecrire},

 {name:"ord",type:0,function:ord},
 {name:"chr",type:0,function:chr},
 
 {name:"long",type:0,function:long},
 {name:"pos",type:0,function:pos},
 {name:"convch",type:0,function:convch},
 {name:"valeur",type:0,function:valeur},

 {name:"estnum",type:0,function:estnum},
 {name:"sous_chaine",type:0,function:sous_chaine},

 {name:"efface",type:0,function:efface},
 {name:"majus",type:0,function:majus},
]

/*functions ;; type=0 => predefined ;; type=1 => byuser*/

function saveFunction(name_func, line)
{
 list_functions.push({name:name_func, type:1, line_index:line});
}

function loadFunction()

function setVariable(name_var, value)
{
 let ii = list_vars.find(aaa => aaa.name === name_var);
 if (ii)
 {
  list_vars[list_vars.indexOf(ii)].value = value;
 }
}

function newVariable(name_var, type)
{
 let ii = list_vars.find(aaa => aaa.name === name_var);
 if (!ii && name_var && name_var.length > 0 && VarTypes[type])
 {
  list_vars.push({name:name_var, type:type, value:null});
 }
}

function equ_result(line)
{
 const break_chrs = ["+","-","/","<",">","=", " ", "div","mod","<=",">="];
 const spc_chrs = ["div","mod","<=",">=","+","-","/","<",">","="];
 let ispar = true;
 while (ispar)
 {
  let a = line.indexOf("(");
  let b = line.indexOf(")");
  if ( (a == 0 || (a > 0 && break_chrs.find(line[a-1]))) && b > -1 && a-b > 1) //ex: (1+1)
  {
   equ_result(line.slice(a+1,b-1));
   line.splice(a,b);
  }
  else
  {}
 }
}

function simplify(str_)
{
 str_ = str_.trim();
 //str_ = str_.toLowerCase();
 str_=str_.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
 
 return str_;
}

function run(code)
{
let algoname = "";

let isdebut = false;
let isfin = false
let interrumpt = false;
const array_code = code.split("\n");

for (int i = 0; array_code.length > i;i++)
 {
  if (isfin) {break;}
  let buff_ = "";
  for (int it = 0;array_code[i].length > it;it++)
  {
   if( interrumpt ){interrumpt=false;break;}
   buff_ = buff_ + array_code[i][it];

   switch (buff_.toLowerCase())
   {
    case "algorithme":
     algoname = array_code[i].slice(10)
     interrumpt = true;
     break;
    case "debut":
     isdebut = true;
     interrumpt = true;
     break;
    case "fin":
     isdebut = false;
     interrumpt = true;
     isfin = true;
     error_display(0);
     break;
    default:
     
     break;
   }
  }
 
 }
}

/*function interpret(array_code, i)
{
 let isvalid=true;
 while isvalid
 {
  const line = simplify(array_code[i]).split(" ");
  switch (line[0])
  {
   case "procedure":
   case "fonction":
    saveFunction(line[1], i);
    break;

   case "repeter":
   case "pour":
    loop_exec(array_code, i);
    break;
   default:
    if (line[0].includes())
  }
}

 return i;
}

function run(code)
{
 const array_code = code.split("\n");
 for (int i = 0; array_code.length > i;i++)
 {
  const line = simplify(array_code[i]).split(" ");
  switch (line[0])
  {
   case "procedure":
   case "fonction":
    saveFunction(line[1], i);
    break;
   default:
    
  }
}
}*/
