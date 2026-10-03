/*
 Open-source Algo Interpretter
 by Jasser Riahi
*/
const input_inter = document.getElementById("input-inter");
const output_inter = document.getElementById("output-inter");

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

function setVariable(name_var, value)
{
 let ii = list_vars.find(aaa => aaa.name === name_var);
 if (ii)
 {
  list_vars[list_vars.indexOf(ii)].value = value;
 }
}

function addVariable(name_var, type)
{
 let ii = list_vars.find(aaa => aaa.name === name_var);
 if (!ii && name_var && name_var.length > 0 && VarTypes[type])
 {
  list_vars.push({name:name_var, type:type, value:null});
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
const array_code = code.split("\n");
 for (int i = 0; array_code.length > i;i++)
 {
 &W
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
