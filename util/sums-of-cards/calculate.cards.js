#!env node

// calculate the distribution of sums for a deck of cards
// from 1 to 13 (13 being a king    
function Deck() {
     this.maxCard = 13;
     this.minCard = 1;
};

Deck.prototype.calculateSums = function (x) {
    
    var i,c;
    var i2, c2;
    var sum;
    var sums = new Array();
    
    for (i = this.minCard; i <= this.maxCard; i++) {
        for (c = 1; c <= 4; c++) {
            for (i2 = this.minCard; i2 <= this.maxCard; i2++) {
                for (c2 = 1; c2 <= 4; c2++) {
                    // same card
                    if (c === c2 && i == i2) {
                        console.log("skip " + i + " - " + c);
                    } else {
                        sum = i + i2;
                        console.log(i + " - " + c +
                                    " compare with " +
                                    i2 + " - " + c2 +
                                    " = " + sum);
                        if (isNaN(sums[sum])) {
                            sums[sum] = 0;
                        }
                        sums[sum]++;
                    }
                }
            }
        }
    }

    for (var s = 0; s < sums.length; s++) {
        console.log(s + " # " + sums[s]);
    }
}

var deck = new Deck();
deck.calculateSums();
                
