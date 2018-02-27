import morningbeach from './morningbeach.jpg'
import city from './city.png'

const selection = (seconds) => {
    const d = new Date(seconds * 1000);
    if(d.getHours()>=12){
        return city;
    }
    else {
        return morningbeach;
    }
};

export default selection;