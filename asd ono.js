ra=210017651 *  10000;
vDecomp= ra;
vDecomps=[];
decomp=2;
valores=[1];

do{
    if(vDecomp % decomp == 0){
        vDecomp = vDecomp / decomp;
        vDecomps.push(decomp);
        
    }
    else{
        decomp+=1;
    }

}while(vDecomp != 1);

for(var i = 0; i < vDecomps.length; i++){

    var valoresOld = valores;
    var valoresTemp = [];
    for(var j = 0; j < valoresOld.length; j++){
        var valor = vDecomps[i] * valoresOld[j];

        if(valores.indexOf(valor) == -1){
            valoresTemp.push(valor); 
        }

        
    }

    for(v in valoresTemp){
        if(valores.indexOf(v) == -1) valores.push(valoresTemp[v])
    }

}


var resposta= ""

for (var i in valores ){
    resposta+= valores[i]+' ';
}

console.log(resposta);