/* exported truncate */

function truncate(length, string){
 let x = string.slice(0, length);
 let results = x + '...'
 return results;
}
