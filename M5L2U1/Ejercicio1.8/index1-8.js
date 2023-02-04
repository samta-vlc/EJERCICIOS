// Eliminar consonanates de un string

let str = "«Cuando me preguntaron sobre algún arma capaz de contrarrestar el poder de la bomba atómica yo sugerí la mejor de todas: La paz». -Albert Einstein-";

function quitarConsonantes(str)
{
    return str.replace(new RegExp("[BCDFGHJKLMNÑPQRSTVWXYZbcdfghjklmnñpqrstvwxyz]",'g'),"");
}
 
console.log(quitarConsonantes(str));


