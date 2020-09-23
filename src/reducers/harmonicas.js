const initialHarmonicas = [
    {id: 1, brand: 'Hohner', keyOf: 'C'},
    {id: 2, brand: 'Suzuki', keyOf: 'G'},
    {id: 3, brand: 'Lee Oskar', keyOf: 'Am(H)'}
];

const harmonicasReducer = (state = initialHarmonicas, action) => {
    if (action.type === 'DELETE_HARMONICA') {
        let idToDelete = action.payload;
        console.log('Gonna delete a harp', action);
        let myNewState = state.filter(harmonica => {
            return harmonica.id !== idToDelete;
        });
        return myNewState;
    }
    
    return state;
}

export default harmonicasReducer;