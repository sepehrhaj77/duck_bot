const advice = [
    'Faerie charms and rejuv beads will not win you the game!',
    'Braum shield goes towards the danger, not away!',
    'Use your summoner heal before your support dies, not after!',
    'Conqueror zed bot lane does not work, stop fucking trying it!',
    'Don\'t complain that your botlane does nothing after they secure 4 kills for your team!',
    'The more you flame Geil, the better he performs!',
    'If you want to flame Riley, just say the phrase "fizz xd"!',
    'Putting control wards down knowing they will die instantly is not helpful and doesn\'t help your vision score much!',
    'Don\'t allow your team to suffer a package diff!'
];

exports.getRandomAdvice = () => {
    return advice[Math.floor(Math.random() * advice.length)];
};