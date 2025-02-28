const data: string[] = [];

const record = (param: string): void => {
    
    data.push(param);
    console.log('Record: ' + param + ' added!');

    setTimeout(() => {
        const index = data.indexOf(param);
        if (index > -1) {
            data.splice(index, 1); // Удаляем элемент из массива
            console.log('Record: ' + param + ' removed!');
        }
    }, 10000);
}


const createLogger = (message: string): (() => void) => {
    return () => {
        console.log(message);
    };
};

const logHello = createLogger('Hello, World!');
const logGoodbye = createLogger('Goodbye, World!');


logHello(); 
logGoodbye(); 
record('Test Record 1');
record('Test Record 2');