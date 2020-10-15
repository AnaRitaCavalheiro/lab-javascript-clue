const suspectsArray = [ 
mrGreen= { 
    firstName:'Jacob',
    lastName: 'Green',
    occupation: 'entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image:' https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green'
},
 drOrchid = { 
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description:'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image:'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
},
profPlum = { 
    firstName:'Victor',
    lastName: 'Plum',
    occupation: 'Designer' ,
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg ',
    color: 'purple'
},
missScarlet = { 
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: ' https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
},
mrsPeacock = { 
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation:'socialité' ,
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: ' https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'Blue'
},
mrMustard = {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation:'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on this former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
}
];

let weaponsArray = [
weaponOne = {
    weaponName:'rope',
    weight: 10
},
weaponTwo = {
    weaponName: 'knife',
    weight: 8
},
weaponThree = {
    weaponName:'candlestick',
    weight: 2
},
weaponFour = {
    weaponName: 'dumbbell',
    weight: 30
},
weaponFive = { 
    weaponName:'poison',
    weight: 2
},
weaponSix = {
    weaponName: 'axe',
    weight: 15
},
weaponSeven = {
    weaponName: 'bat',
    weight: 13
},
weaponEight = {
    weaponName: 'trophy',
    weight: 25
},
weaponNine = {
    weaponName: 'pistol',
    weight: 20
} 

];
let roomsArray = ['Dining Room','Conservatory','Kitchen','Study','Library','Billiard Room','Lounge','Ballroom','Hall','Spa','Living Room','Observatory','Theater','Guest House', 'Patio']

function SelectRandom(array) {
   return array[Math.floor(Math.random(array) * array.length)]
};

function pickMystery() {
    let mystery = {
        suspect: SelectRandom(suspectsArray),
        weapon: SelectRandom(weaponsArray),
        room: SelectRandom(roomsArray)
    }
    return mystery
};
function revealMystery(envelope) {
return `${envelope.suspect.firstName}${envelope.suspect.lastName} killed Mr.Boddy using the ${envelope.weapon} in the ${envelope.room}!`
};
