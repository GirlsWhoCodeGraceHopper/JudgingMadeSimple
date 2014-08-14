function Round(proTeamCode, conTeamCode, proRoundPoints, conRoundPoints, whoWon) {
    //once connected to page 2 create ID's for all the different text boxes and set these variables equal to the inputted text within them..#FUN
    this.proTeamCode = proTeamCode;
    this.conTeamCode = conTeamCode;
    this.proRoundPoints = proRoundPoints;
    this.conRoundPoints = conRoundPoints;
    this.whoWon = whoWon;

    //returns winning team for this round
    //this.gettingWins = function () {
    //if ($("#proWin").val() = true) {
    // if (proRoundPoints > conRoundPoints) {
    //    return proTeamCode;
    // } else {
    //   return conTeamCode;
    // }
    // }
    // };
    //output teamCode and add else statement to print the conTeam if this statement is not true
}

function Tournament() {
    this.resultsDictionary = {
        "10BB": [30, 2],
         "16LS": [25, 1]
    };

    this.teamList = [];
    
    this.calculatingWins = function () {
        this.resultsDictionary[gettingWins()][1] = [teamCode][1] + 1;
    };

    this.addTeam = function (roundObject) {
        this.resultsDictionary[roundObject.proTeamCode] = [0, 0];
        this.resultsDictionary[roundObject.conTeamCode] = [0, 0];

        //get rid of duplicates
        //connect to HTML (make HTML ID to add teamCodes and roundPoints to dictionary)
    };

    this.addPoints = function (roundObject) {
        //takes the value of that specific key (team) and adds the round points to it 
        if this.resultsDictionary["caitlin"] === undefined);
        this.resultsDictionary[roundObject.proTeamCode][0] = this.resultsDictionary[roundObject.proTeamCode][0] +             roundObject.proRoundPoints;
        console.log("test");
        this.resultsDictionary[roundObject.conTeamCode][0] = this.resultsDictionary[roundObject.conTeamCode][0] + roundObject.conRoundPoints;
        
        //connect it to HTML (make HTML ID for points to add to dicitonary)
    };

    this.rankTeams = function () {

    };

    //	this.display = function() {
    //$("#listofrounds").html("");
    //for (var i = 0; i < this.resultsList.length; i++) {
    //$("#listofrounds").append(
    //'<li>' + this.taskList[i].name + '</li>'
    //);
    //}
    //  };
}
var round1 = new Round("10bs", "16LS", 25, 24, "p");
var tourney = new Tournament();
tourney.addTeam(round1);
console.log(tourney.resultsDictionary);

tourney.addPoints(round1);


console.log(tourney.resultsDictionary);