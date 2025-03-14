function generateExcuse() {
    const excuses = [
        "The code elves are on strike.",
        "A cosmic ray flipped a bit in memory.",
        "It's a feature, not a bug!",
        "The coffee machine ran out of fuel.",
        "The AI became self-aware and refused to cooperate.",
        "I'm blaming the intern, even though we don’t have one.",
        "Have you tried turning it off and on again?",
        "The server is currently on vacation.",
        "A butterfly flapped its wings and caused a ripple effect.",
        "404: Excuse not found."
    ];

    const excuse = excuses[Math.floor(Math.random() * excuses.length)];
    console.log(`Excuse Generator says: ${excuse}`);
}

generateExcuse();
