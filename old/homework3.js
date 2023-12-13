/*
 * Enter your name, surname and student id number here
 */
 
window.addEventListener('DOMContentLoaded', (event) => { // execute the code when the initial HTML document has been completely loaded, we need the regions select to be loaded 
    
	let lookup = {};

	for (let d in rates.Cube) { // for every item in the rates.Cube array (actually for every date)
        for (let c in rates.Cube[d].Cube) { // for every currency object
            let cur = rates.Cube[d].Cube[c].currency;
            if (cur && !(cur in lookup)) { // if the currency hasn't been previously processed
                lookup[cur] = {}; // add a new currency to the lookup
            }
            lookup[cur] = 1; // add a station to the lookup. lookup is a two-dimensional associative array/object    
        }
	}

	//console.log(lookup); // uncomment this line if you want to see the result in the console

	// now let's get the array of currencies for the select element
	let currencies = Object.keys(lookup).concat(["EUR"]).sort(); // get the list of keys in the lookup, add EUR and sort it

    // console.log(currencies); // uncomment this line if you want to see the result in the console

	// write your code to fill the currencies select element

});

