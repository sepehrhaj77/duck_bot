var num = Math.floor(Math.random() * 12);

const insults = [
    ' is gay',
    ` needs to buy more control wards, ${num} vision score lookin headass`,
    ' is super gay, lul',
    ', ur mom gey xd',
    ' has a micropenis',
    ' thinks McDonalds is fine dining'
];

exports.getRandomInsult = () =>{
    return insults[Math.floor(Math.random() * insults.length)];
};