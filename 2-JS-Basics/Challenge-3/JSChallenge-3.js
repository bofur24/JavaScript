/*************************************
 * CODING CHALLENGE 3
 */

 /* 

John and his family went on a holiday and went to 3 dirrerent restaurants. The bills where
$124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% 
of the bill when the bill is less than $50, 15% when the bill is between %50 and $200, and 10% if the bill
is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calaculate 20% of a value, simply multiply if with 20/100 = 0.2)

GOOD LUCK 
*/

function tipCalculator (bill) {
    if (bill < 50) {
        tip = (20/100) * bill
    }else if (bill >= 50 && bill < 200) {
        tip = (15/100) * bill
    }else tip = (10/100) * bill
    return tip
}


var restaurantBills = [124, 48, 268];
var tips = [tipCalculator(restaurantBills[0]), tipCalculator(restaurantBills[1]), tipCalculator(restaurantBills[2]) ]
var paidAmount = [tips[0] + restaurantBills[0], tips[1] + restaurantBills[1], tips[2] + restaurantBills[2]];

console.log('First restaurants bill is ' + restaurantBills[0] + ' and the tip is ' + tips[0] + ' for a total of ' + paidAmount[0]);
console.log('First restaurants bill is ' + restaurantBills[1] + ' and the tip is ' + tips[1] + ' for a total of ' + paidAmount[1]);
console.log('First restaurants bill is ' + restaurantBills[2] + ' and the tip is ' + tips[2] + ' for a total of ' + paidAmount[2]);

/*************************************
 * CODING CHALLENGE 3
 * Solution
 
 function tipCalculator(bill) {
      var percentage;
      if (bill < 50) {
          percentage = .2;
      }else if (bill >= 50 && bill < 200) {
          percentage = .15;
      }else {
          percentage = .1
      }
      return percentage * bill;
 }

 var bills = [124, 48, 268];
 var tips = [tipCalculator(bills[0]),
             tipCalculator(bills[1]),
             tipCalculator(bills[2])];
 
var finalvalues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
 
 */


