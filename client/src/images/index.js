import morningbeach from './morningbeach.jpeg'
import city from './city.png'

const selection = (name) => {
    if(hour<12){
        return city;
    }
    else {
        return morningbeach;
    }
};