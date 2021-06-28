//import { promesaLenta,promesaMedia,promesaRapida } from "./js/promesas";
//Promise.race ([promesaLenta,promesaMedia,promesaRapida]).then (console.log);
//import { buscarHeroe } from "./js/promesas";
//import { buscarHeroeAsync } from "./js/promesas";
//buscarHeroe('capi').then (heroe=>console.log)
//.catch(console.warn);

//buscarHeroeAsync('iron').then(heroe=>console.log(heroe))
//.catch(console.warn);
import { heroesCiclo ,heroeIfAwait} from "./js/await";
heroesCiclo();
heroeIfAwait('iron');

