let cgPom = true;
function prikaziKluboveCrnaGora(){
    if(cgPom){
        $('.listaCrnaGora').hide('slow');
        cgPom = false;
    }else{
        $('.listaCrnaGora').show('slow');
        cgPom = true;
    }
};
let hrPom = true;
function prikaziKluboveHrvatska(){
    if(hrPom){
        $('.listaHrvatska').hide('slow');
        hrPom = false;
    }else{
        $('.listaHrvatska').show('slow');
        hrPom = true;
    }
};
let sPom = true;
function prikaziKluboveSvijet(){
    if(sPom){
        $('.listaSvijet').hide('slow');
        sPom = false;
    }else{
        $('.listaSvijet').show('slow');
        sPom = true;
    }
}