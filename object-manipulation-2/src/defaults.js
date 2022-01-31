/* exported defaults */
/* we have two objects our goal is to make sure that one object includes all the properties in the second object so we need to create a conditional that checks
if the properites of scource is included in the properties of target if it is not then we need to add them to the object target

step 1 create a funciton that holds 2 parameters
function defaults(target, source) {
  step 2 create a conditional that
}
*/

function defaults(target, source) {
  for (const key in source) {
    if (source && (target[key] === undefined)) {
      target[key] = source[key];
    }
  }
}
