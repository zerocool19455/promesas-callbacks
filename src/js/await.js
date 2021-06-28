import { buscarHeroeAsync,buscarHeroe } from "./promesas";
const heroesIds=['capi','iron','spider'];
const heroesPromesas= heroesIds.map( buscarHeroe);
export const obtenerHeroesArr = async () => {
    //const heroesArr = [];
   // for(const id of heroesIds){
  //    heroesArr.push(buscarHeroe(id));
//} 
  //  return await   Promise.all(heroesARr);
//
return await promise.all (heroesIds.map(buscarHeroe)); 
}

export const obtenerHeroeAwait = async (id) => {
    try{
    const heroe= await buscarHeroeAsync (id);
    return heroe; 
    }catch (err){
        console.log ('catch!!!');
      return {
          nombre: 'sin nombre',
          poder: 'sin poder '
      }; 
    }
}
export const heroesCiclo = async ()=>{
    console.time ('heroesCiclo')
    for  await ( const heroe of heroesPromesas ){
        console.log (heroe);
    }
// es lo mismo que el for await    
   // const heroes = await  Promise.all (heroesPromesas);
    // heroes.forEach => (heroe =console.log(heroe ));

    console.timeEnd('heroeCiclo');
}
export const heroeIfAwait = async(id)=> {
    if ((await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('es el mejor de todos ');
    }else { console.log('naaa');}
}