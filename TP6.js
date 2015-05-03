function filtrarKey (obj, filtro, inclu) {
	var todoskeys=[];
	if (inclu===true) {
			for (var i = 0; i < filtro.length; i++) {
				if (filtro[i] in obj) {
					delete obj [filtro[i]];
				} 
			};
			todoskeys=Object.keys(obj);				
				
	} 
	else { 
		for ( var prop in obj){
			for (var i = 0; i < filtro.length; i++) {
				if (prop===filtro[i]) {
				todoskeys.push(filtro[i]);
				}

			};
		};
	};
	console.log(todoskeys);
}
//filtrarKey({"a":1,"b":2,"c":2}, ["a","b"], true)