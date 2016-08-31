

var budget = 50000;
var salary = 0;
var lineUp = { 'QB' : 1 , 'RB' : 2 , 'WR' : 3 , 'TE' : 1 , 'DST' : 1 , 'FLEX' : 1 }

var lineUpCount = { 'QB' : 0 , 'RB' : 0 , 'WR' : 0 , 'TE' : 0 , 'DST' : 0 , 'FLEX' : 0 }

var team = [];
var players = [ {
    "Position": "DST",
    "Name": "Saints",
    "Salary": 2300,
    "GameInfo": "Oak@NO 01:00PM ET",
    "AvgPointsPerGame": 5,
    "teamAbbrev": "NO"
  },
  {
    "Position": "DST",
    "Name": "Dolphins",
    "Salary": 2200,
    "GameInfo": "Mia@Sea 04:05PM ET",
    "AvgPointsPerGame": 6,
    "teamAbbrev": "Mia"
  },
  {
    "Position": "RB",
    "Name": "Andrew Bonnet",
    "Salary": 3000,
    "GameInfo": "Cin@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "Cin"
  },
  {
    "Position": "WR",
    "Name": "Julio Jones",
    "Salary": 9400,
    "GameInfo": "TB@Atl 01:00PM ET",
    "AvgPointsPerGame": 25.194,
    "teamAbbrev": "Atl"
  },
  {
    "Position": "WR",
    "Name": "Odell Beckham Jr.",
    "Salary": 9300,
    "GameInfo": "NYG@Dal 04:25PM ET",
    "AvgPointsPerGame": 22.887,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "WR",
    "Name": "DeAndre Hopkins",
    "Salary": 8800,
    "GameInfo": "Chi@Hou 01:00PM ET",
    "AvgPointsPerGame": 21.294,
    "teamAbbrev": "Hou"
  },
  {
    "Position": "QB",
    "Name": "Aaron Rodgers",
    "Salary": 8500,
    "GameInfo": "GB@Jax 01:00PM ET",
    "AvgPointsPerGame": 20.004,
    "teamAbbrev": "GB"
  },
  {
    "Position": "WR",
    "Name": "Dez Bryant",
    "Salary": 8500,
    "GameInfo": "NYG@Dal 04:25PM ET",
    "AvgPointsPerGame": 10.233,
    "teamAbbrev": "Dal"
  },
  {
    "Position": "WR",
    "Name": "A.J. Green",
    "Salary": 8400,
    "GameInfo": "Cin@NYJ 01:00PM ET",
    "AvgPointsPerGame": 17.929,
    "teamAbbrev": "Cin"
  },
  {
    "Position": "QB",
    "Name": "Andrew Luck",
    "Salary": 8300,
    "GameInfo": "Det@Ind 04:25PM ET",
    "AvgPointsPerGame": 21.406,
    "teamAbbrev": "Ind"
  },
  {
    "Position": "WR",
    "Name": "Allen Robinson",
    "Salary": 8300,
    "GameInfo": "GB@Jax 01:00PM ET",
    "AvgPointsPerGame": 20.125,
    "teamAbbrev": "Jax"
  },
  {
    "Position": "QB",
    "Name": "Drew Brees",
    "Salary": 8100,
    "GameInfo": "Oak@NO 01:00PM ET",
    "AvgPointsPerGame": 23.147,
    "teamAbbrev": "NO"
  },
  {
    "Position": "WR",
    "Name": "Keenan Allen",
    "Salary": 8000,
    "GameInfo": "SD@KC 01:00PM ET",
    "AvgPointsPerGame": 21.438,
    "teamAbbrev": "SD"
  },
  {
    "Position": "QB",
    "Name": "Russell Wilson",
    "Salary": 7900,
    "GameInfo": "Mia@Sea 04:05PM ET",
    "AvgPointsPerGame": 21.771,
    "teamAbbrev": "Sea"
  },
  {
    "Position": "WR",
    "Name": "Alshon Jeffery",
    "Salary": 7900,
    "GameInfo": "Chi@Hou 01:00PM ET",
    "AvgPointsPerGame": 18.967,
    "teamAbbrev": "Chi"
  },
  {
    "Position": "WR",
    "Name": "Brandon Marshall",
    "Salary": 7800,
    "GameInfo": "Cin@NYJ 01:00PM ET",
    "AvgPointsPerGame": 23.2,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "WR",
    "Name": "Jordy Nelson",
    "Salary": 7700,
    "GameInfo": "GB@Jax 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "GB"
  },
  {
    "Position": "WR",
    "Name": "Brandin Cooks",
    "Salary": 7700,
    "GameInfo": "Oak@NO 01:00PM ET",
    "AvgPointsPerGame": 16.6,
    "teamAbbrev": "NO"
  },
  {
    "Position": "RB",
    "Name": "Adrian Peterson",
    "Salary": 7600,
    "GameInfo": "Min@Ten 01:00PM ET",
    "AvgPointsPerGame": 17.147,
    "teamAbbrev": "Min"
  },
  {
    "Position": "WR",
    "Name": "Randall Cobb",
    "Salary": 7600,
    "GameInfo": "GB@Jax 01:00PM ET",
    "AvgPointsPerGame": 12.617,
    "teamAbbrev": "GB"
  },
  {
    "Position": "QB",
    "Name": "Eli Manning",
    "Salary": 7500,
    "GameInfo": "NYG@Dal 04:25PM ET",
    "AvgPointsPerGame": 20.211,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "WR",
    "Name": "T.Y. Hilton",
    "Salary": 7500,
    "GameInfo": "Det@Ind 04:25PM ET",
    "AvgPointsPerGame": 13.588,
    "teamAbbrev": "Ind"
  },
  {
    "Position": "RB",
    "Name": "David Johnson",
    "Salary": 7500,
    "GameInfo": "NE@Ari 08:30PM ET",
    "AvgPointsPerGame": 14.522,
    "teamAbbrev": "Ari"
  },
  {
    "Position": "QB",
    "Name": "Tom Brady",
    "Salary": 7400,
    "GameInfo": "NE@Ari 08:30PM ET",
    "AvgPointsPerGame": 23.504,
    "teamAbbrev": "NE"
  },
  {
    "Position": "TE",
    "Name": "Rob Gronkowski",
    "Salary": 7400,
    "GameInfo": "NE@Ari 08:30PM ET",
    "AvgPointsPerGame": 19.371,
    "teamAbbrev": "NE"
  },
  {
    "Position": "WR",
    "Name": "Mike Evans",
    "Salary": 7400,
    "GameInfo": "TB@Atl 01:00PM ET",
    "AvgPointsPerGame": 15.107,
    "teamAbbrev": "TB"
  },
  {
    "Position": "WR",
    "Name": "Golden Tate",
    "Salary": 7300,
    "GameInfo": "Det@Ind 04:25PM ET",
    "AvgPointsPerGame": 13.15,
    "teamAbbrev": "Det"
  },
  {
    "Position": "QB",
    "Name": "Derek Carr",
    "Salary": 7300,
    "GameInfo": "Oak@NO 01:00PM ET",
    "AvgPointsPerGame": 19.08,
    "teamAbbrev": "Oak"
  },
  {
    "Position": "RB",
    "Name": "Ezekiel Elliott",
    "Salary": 7300,
    "GameInfo": "NYG@Dal 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "Dal"
  },
  {
    "Position": "QB",
    "Name": "Matthew Stafford",
    "Salary": 7200,
    "GameInfo": "Det@Ind 04:25PM ET",
    "AvgPointsPerGame": 19.674,
    "teamAbbrev": "Det"
  },
  {
    "Position": "QB",
    "Name": "Blake Bortles",
    "Salary": 7200,
    "GameInfo": "GB@Jax 01:00PM ET",
    "AvgPointsPerGame": 22.32,
    "teamAbbrev": "Jax"
  },
  {
    "Position": "WR",
    "Name": "Amari Cooper",
    "Salary": 7200,
    "GameInfo": "Oak@NO 01:00PM ET",
    "AvgPointsPerGame": 14.294,
    "teamAbbrev": "Oak"
  },
  {
    "Position": "QB",
    "Name": "Carson Palmer",
    "Salary": 7100,
    "GameInfo": "NE@Ari 08:30PM ET",
    "AvgPointsPerGame": 21.311,
    "teamAbbrev": "Ari"
  },
  {
    "Position": "QB",
    "Name": "Matt Ryan",
    "Salary": 7100,
    "GameInfo": "TB@Atl 01:00PM ET",
    "AvgPointsPerGame": 16.871,
    "teamAbbrev": "Atl"
  },
  {
    "Position": "RB",
    "Name": "Jamaal Charles",
    "Salary": 7100,
    "GameInfo": "SD@KC 01:00PM ET",
    "AvgPointsPerGame": 21.22,
    "teamAbbrev": "KC"
  },
  {
    "Position": "QB",
    "Name": "Philip Rivers",
    "Salary": 7000,
    "GameInfo": "SD@KC 01:00PM ET",
    "AvgPointsPerGame": 20.218,
    "teamAbbrev": "SD"
  },
  {
    "Position": "RB",
    "Name": "Lamar Miller",
    "Salary": 7000,
    "GameInfo": "Chi@Hou 01:00PM ET",
    "AvgPointsPerGame": 15.119,
    "teamAbbrev": "Hou"
  },
  {
    "Position": "QB",
    "Name": "Tyrod Taylor",
    "Salary": 6900,
    "GameInfo": "Buf@Bal 01:00PM ET",
    "AvgPointsPerGame": 19.9,
    "teamAbbrev": "Buf"
  },
  {
    "Position": "RB",
    "Name": "Devonta Freeman",
    "Salary": 6900,
    "GameInfo": "TB@Atl 01:00PM ET",
    "AvgPointsPerGame": 22.027,
    "teamAbbrev": "Atl"
  },
  {
    "Position": "WR",
    "Name": "Sammy Watkins",
    "Salary": 6900,
    "GameInfo": "Buf@Bal 01:00PM ET",
    "AvgPointsPerGame": 17.985,
    "teamAbbrev": "Buf"
  },
  {
    "Position": "QB",
    "Name": "Tony Romo",
    "Salary": 6800,
    "GameInfo": "NYG@Dal 04:25PM ET",
    "AvgPointsPerGame": 12.915,
    "teamAbbrev": "Dal"
  },
  {
    "Position": "QB",
    "Name": "Andy Dalton",
    "Salary": 6800,
    "GameInfo": "Cin@NYJ 01:00PM ET",
    "AvgPointsPerGame": 20.4,
    "teamAbbrev": "Cin"
  },
  {
    "Position": "WR",
    "Name": "Josh Gordon",
    "Salary": 6800,
    "GameInfo": "Cle@Phi 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "Cle"
  },
  {
    "Position": "QB",
    "Name": "Joe Flacco",
    "Salary": 6700,
    "GameInfo": "Buf@Bal 01:00PM ET",
    "AvgPointsPerGame": 19.094,
    "teamAbbrev": "Bal"
  },
  {
    "Position": "RB",
    "Name": "Eddie Lacy",
    "Salary": 6700,
    "GameInfo": "GB@Jax 01:00PM ET",
    "AvgPointsPerGame": 10.235,
    "teamAbbrev": "GB"
  }
]



var playerConstraints = function(position , player) {
  if(player.Position === position && lineUpCount[position] < lineUp[position] && ((salary + player.Salary) <= budget)) {
    team.push(player);
    lineUpCount[position] ++;
    salary += player.Salary;
  }
}
  
players.forEach(function(player) {
  
  playerConstraints("QB" , player);
  playerConstraints("WR" , player);
  playerConstraints("RB" , player);
  playerConstraints("TE" , player);
  playerConstraints("DST" , player);
  
  

  
});

console.log(team);
console.log(team.length);
console.log(salary);
