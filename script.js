function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num);
}

// Created 3 objects with names and quotes by them
const people = {
    kobe: {
        name: 'Kobe Bryant',
        quotes: ['The moment you give up, is the moment you let someone else win.', 
        "If you're afraid to fail, then you're probably going to fail.", 
        'Once you know what failure feels like, determination chases success.']
    },
    gandi: {
        name: 'Gandi',
        quotes: ['Live as if you were to die tomorrow. Learn as if you were to live forever.', 
        'Happiness is when what you think, what you say, and what you do are in harmony.', 
        'The future depends on what you do today.']
    },
    mandela: {
        name: 'Nelson Mandela',
        quotes: ['Do not judge me by my successes, judge me by how many times I fell down and got back up again.', 
        'Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.', 
        "It always seems impossible until it's done."]
    }
}

// Array of encouraging words
const encouragingWords = ["Don't be afraid to fail!", 'Go and be the best you can be!', 'You can do it!'];


const message = () => {
    let randNum1 = generateRandomNumber(Object.keys(people).length);
    let randNum2 = generateRandomNumber(people.kobe.quotes.length);
    let randNum3 = generateRandomNumber(encouragingWords.length);
    if (randNum1 === 0) {
        return `${people.kobe.name} once said, "${people.kobe.quotes[randNum2]}". ${encouragingWords[randNum3]}`;
    } else if (randNum1 === 1) {
        return `${people.gandi.name} once said, "${people.gandi.quotes[randNum2]}". ${encouragingWords[randNum3]}`;
    } else if (randNum1 === 2) {
        return `${people.mandela.name} once said, "${people.mandela.quotes[randNum2]}". ${encouragingWords[randNum3]}`;
    }
}

console.log(message());