function Round(proTeamCode, conTeamCode, proRoundPoints, conRoundPoints, whoWon) {
	this.proTeamCode = proTeamCode;
    this.conTeamCode = conTeamCode;
    this.proRoundPoints = proRoundPoints;
    this.conRoundPoints = conRoundPoints;
    this.whoWon = whoWon;
};

function Tournament() {
    this.resultsDictionary = {"10BB":30,"16LS":25};
    this.teamList = [];
    
    this.addPoints = function(number) {
        this.resultsDictionary["10BB"] = 30 + number;
        //connect it to HTML (make HTML ID for points to add to dicitonary)
    };
    this.addTeam = function(object){ 
        this.resultsDictionary[this.proTeamCode] = this.proRoundPoints;
        this.resultsDictionary[this.conTeamCode] = this.conRoundPoints;
        //get rid of duplicates
        //connect to HTML (make HTML ID to add teamCodes and roundPoints to dictionary)
    };

//	this.display = function() {
		//$("#listofrounds").html("");
		//for (var i = 0; i < this.resultsList.length; i++) {
			//$("#listofrounds").append(
				//'<li>' + this.taskList[i].name + '</li>'
				//);
		//}
	};
var sabrinaSux = new Round("10bb", "16ls", 25, 12, "p");
var caitlinRox = new Tournament();
caitlinRox.addPoints(sabrinaSux.proRoundPoints);
console.log(caitlinRox.resultsDictionary);
caitlinRox.addTeam(sabrinaSux);
console.log(caitlinRox.resultsDictionary);