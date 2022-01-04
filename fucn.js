import {odd, even} from './modules/module';

const checkOddEven = (number) =>{
    if(number % 2){
        return odd;
    } else {
        return even;
    }
};

module.exports = checkOddEven;