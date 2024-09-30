// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(record) {
    // Use the find() method to locate the first object where result is "W"
    const winRecord = record.find(game => game.result === "W");
  
    
    return winRecord ? winRecord.year : undefined;
  }
  
  
  module.exports = superbowlWin;