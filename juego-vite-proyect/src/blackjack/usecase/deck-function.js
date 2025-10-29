import _ from 'underscore';


/**
 * @param {array} tiposDeCarta Ejemplo: ['C','D','H','S'];
 * @param {array} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {array} retorna un nuevo deck de cartas 
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if( !tiposDeCarta || tiposDeCarta.lebgth === 0 ) throw new Error("tiposDeCarta es un arreglo obligatorio de string");


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}