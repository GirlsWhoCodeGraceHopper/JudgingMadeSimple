function Round(proTeamCode, conTeamCode, proRoundPoints, conRoundPoints, whoWon) {
	this.proTeamCode = proTeamCode;
    this.conTeamCode = conTeamCode;
    this.proRoundPoints = proRoundPoints;
    this.conRoundPoints = conRoundPoints;
    this.whoWon = whoWon;
};

function Tournament() {
    resultsDictionary = [];
    teamList = [];
    
    this.addTeam = function(){ 
        resultsDictionary[this.proTeamCode] = addPoints(proRoundPoints);
        resultsDictionary[this.conTeamCode] = addPoints(conRoundPoints);
        //get rid of duplicates
    };

//	this.display = function() {
		//$("#listofrounds").html("");
		//for (var i = 0; i < this.resultsList.length; i++) {
			//$("#listofrounds").append(
				//'<li>' + this.taskList[i].name + '</li>'
				//);
		//}
	};