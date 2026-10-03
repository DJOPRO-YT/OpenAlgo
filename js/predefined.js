/*
predefined functions :
ecrire, lire, ord, chr, long, pos, convch, valeur, estnum, sous_chaine, efface, majus
*/
const output_inter = document.getElementById("output-inter");

function long(args)
{
  if (args.length == 1)
  {
    return args[0].length;
  }

  display_error(1);
}

function ecrire(args)
{
  output_inter.value+=args.join(" ");
}

function lire(args)
{
  output_inter.readOnly=false;
  output_inter.addEventListener("keydown", function(event){
    if (event.key==="Enter") {
      output_inter.readOnly=true;
      event.preventDefault();
      output_inter.value+="\n";
    }
  },{once: true});
}
