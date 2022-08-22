//superbowlWin(record) returning year Denver Broncos won the superbowl and undefined if record has no win
superbowlWin = (record) => {
const result = record.find(records => records.result === "W");
if (result) {
    return result.year
}
}
