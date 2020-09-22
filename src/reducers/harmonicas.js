const initialHarmonicas = [
    {id: 1, brand: 'Hohner', keyOf: 'C'},
    {id: 2, brand: 'Suzuki', keyOf: 'G'},
    {id: 3, brand: 'Lee Oskar', keyOf: 'Am(H)'}
];

const harmonicasReducer = (state = initialHarmonicas, action) => {
    if (action.type === 'DELETE_ITEM') {
        alert(`Deleted your ${this.props.brand}. Going Home.`);
        console.log('this.props.history:', this.props.history);
        this.props.history.push('/');
        return state;
    }
    
    return state;
}

export default harmonicasReducer;