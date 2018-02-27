import morningbeach from './morningbeach.jpeg'
import city from './city.png'

const selection = (name) => {
    if(time<12){
        return city;
    }
    else {
        return morningbeach;
    }
};