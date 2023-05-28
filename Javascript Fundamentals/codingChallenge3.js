// Coding Challenge 3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// Data 1
let dolphinMatch1, dolphinMatch2, dolphinMatch3;
let koalaMatch1, koalaMatch2, koalaMatch3;

dolphinMatch1 = 96;
dolphinMatch2 = 108;
dolphinMatch3 = 89;
dolphinAverage = (dolphinMatch1 + dolphinMatch2 + dolphinMatch3) / 3;

koalaMatch1 = 88;
koalaMatch2 = 91;
koalaMatch3 = 110;
koalaAverage = (koalaMatch1 + koalaMatch2 + koalaMatch3) / 3;

if (dolphinAverage > koalaAverage) {
    console.log(`Dolphin wins with an average of ${dolphinAverage} compared to koala average of ${koalaAverage}`);
} else if (koalaAverage > dolphinAverage) {
    console.log(`Koala wins with an average of ${koalaAverage} compared to dolphin average of ${dolphinAverage}`);
} else if (dolphinAverage === koalaAverage) {
    console.log(`Same average score! Dolphin average ${dolphinAverage} vs koala average ${koalaAverage} Its a draw!`)
}

// Bonus Data 1
const minimumScore = 100;

dolphinMatch1 = 97;
dolphinMatch2 = 112;
dolphinMatch3 = 101;
dolphinAverage = (dolphinMatch1 + dolphinMatch2 + dolphinMatch3) / 3;

koalaMatch1 = 109;
koalaMatch2 = 95;
koalaMatch3 = 123;
koalaAverage = (koalaMatch1 + koalaMatch2 + koalaMatch3) / 3;

if (dolphinAverage >= minimumScore && dolphinAverage > koalaAverage) {
    console.log(`Dolphin wins with an average of ${dolphinAverage} compared to koala average of ${koalaAverage}`);
} else if (koalaAverage >= minimumScore && koalaAverage > dolphinAverage) {
    console.log(`Koala wins with an average of ${koalaAverage} compared to dolphin average of ${dolphinAverage}`);
} else if (dolphinAverage === koalaAverage) {
    console.log(`Same average score! Dolphin average ${dolphinAverage} vs koala average ${koalaAverage} Its a draw!`)
}

// Bonus Data 2
dolphinMatch1 = 97;
dolphinMatch2 = 112;
dolphinMatch3 = 101;
dolphinAverage = (dolphinMatch1 + dolphinMatch2 + dolphinMatch3) / 3;

koalaMatch1 = 109;
koalaMatch2 = 95;
koalaMatch3 = 106;
koalaAverage = (koalaMatch1 + koalaMatch2 + koalaMatch3) / 3;

if (dolphinAverage >= minimumScore && dolphinAverage > koalaAverage) {
    console.log(`Dolphin wins with an average of ${dolphinAverage} compared to koala average of ${koalaAverage}`);
} else if (koalaAverage >= minimumScore && koalaAverage > dolphinAverage) {
    console.log(`Koala wins with an average of ${koalaAverage} compared to dolphin average of ${dolphinAverage}`);
} else if (dolphinAverage === koalaAverage && dolphinAverage >= minimumScore && koalaAverage >= minimumScore) {
    console.log(`Same average score! Dolphin average ${dolphinAverage} vs koala average ${koalaAverage} Its a draw!`)
} else {
    console.log("No one hit the target points! No one wins!")
}