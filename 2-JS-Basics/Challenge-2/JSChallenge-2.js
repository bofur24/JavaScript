/*************************************
 * CODING CHALLENGE 2
 */

 /* 
John and Mike both play basketball in different teams. In the latest 3 games, John's team
scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team.
2. Decide which teams wins in average (highest average socre), and print the winner to the console.
Also include the average score in the output.
3. Then change the scores to show different winners. 
Don't forget to take into account there might be a draw (the same average score)

4. Extra: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. 
Hint: you will need the && operator to take the decision. If you can't
solve this one, just watch the solution, it's no problem :)
5. Like before change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 
*/


var mikesTeamAvg = (89 + 120 + 503)/3;
var johnsTeamAvg = (116 + 94 + 223)/3;
var marysTeamAvg = (97 + 134 + 105)/3

console.log('Mikes team average ' + mikesTeamAvg  );
console.log('Johns team average ' + johnsTeamAvg  );
console.log('Marys team average ' + marysTeamAvg  );
console.log('')
if(mikesTeamAvg > johnsTeamAvg) {
    console.log('Mike VS John: Mikes team average wins ' + mikesTeamAvg + ' to Johns team average ' + johnsTeamAvg)
}else {
    console.log('Mike VS John: Johns team average wins ' + johnsTeamAvg + ' to Mikes team average ' + mikesTeamAvg) 
}
console.log('');
if(mikesTeamAvg > johnsTeamAvg && mikesTeamAvg > marysTeamAvg) {
    console.log('Mike VS John VS Mary: Mikes team average wins ' + mikesTeamAvg)
}else if (johnsTeamAvg > marysTeamAvg && johnsTeamAvg > mikesTeamAvg){
    console.log('Mike VS John VS Mary: Johns team average wins ' + johnsTeamAvg) 
}else {
    console.log('Mike VS John VS Mary: Marys team average wins ' + marysTeamAvg)
}
