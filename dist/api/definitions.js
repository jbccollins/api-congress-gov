"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.StateAbbreviation = exports.YesNo = exports.PartyName = exports.Party = exports.BillType = exports.TrueFalse = exports.ChamberLongName = exports.ChamberCode = exports.Chamber = exports.UpdateDateSort = void 0;
var UpdateDateSort;
(function (UpdateDateSort) {
    UpdateDateSort["updateDateAsc"] = "updateDate+asc";
    UpdateDateSort["updateDateDesc"] = "updateDate+desc";
})(UpdateDateSort || (exports.UpdateDateSort = UpdateDateSort = {}));
var Chamber;
(function (Chamber) {
    Chamber["House"] = "House";
    Chamber["Senate"] = "Senate";
})(Chamber || (exports.Chamber = Chamber = {}));
var ChamberCode;
(function (ChamberCode) {
    ChamberCode["House"] = "H";
    ChamberCode["Senate"] = "S";
})(ChamberCode || (exports.ChamberCode = ChamberCode = {}));
var ChamberLongName;
(function (ChamberLongName) {
    ChamberLongName["HouseOfRepresentatives"] = "House of Representatives";
    ChamberLongName["Senate"] = "Senate";
})(ChamberLongName || (exports.ChamberLongName = ChamberLongName = {}));
var TrueFalse;
(function (TrueFalse) {
    TrueFalse["True"] = "true";
    TrueFalse["False"] = "false";
})(TrueFalse || (exports.TrueFalse = TrueFalse = {}));
var BillType;
(function (BillType) {
    BillType["HR"] = "HR";
    BillType["S"] = "S";
    BillType["HJRES"] = "HJRES";
    BillType["SJRES"] = "SJRES";
    BillType["HCONRES"] = "HCONRES";
    BillType["SCONRES"] = "SCONRES";
    BillType["HRES"] = "HRES";
    BillType["SRES"] = "SRES";
})(BillType || (exports.BillType = BillType = {}));
var Party;
(function (Party) {
    Party["D"] = "D";
    Party["R"] = "R";
    Party["I"] = "I";
})(Party || (exports.Party = Party = {}));
// TODO: Confirm all of these (and if more exist)
var PartyName;
(function (PartyName) {
    PartyName["Democratic"] = "Democratic";
    PartyName["Republican"] = "Republican";
    PartyName["Independent"] = "Independent";
})(PartyName || (exports.PartyName = PartyName = {}));
var YesNo;
(function (YesNo) {
    YesNo["Y"] = "Y";
    YesNo["N"] = "N";
})(YesNo || (exports.YesNo = YesNo = {}));
var StateAbbreviation;
(function (StateAbbreviation) {
    StateAbbreviation["AL"] = "AL";
    StateAbbreviation["AK"] = "AK";
    StateAbbreviation["AZ"] = "AZ";
    StateAbbreviation["AR"] = "AR";
    StateAbbreviation["CA"] = "CA";
    StateAbbreviation["CO"] = "CO";
    StateAbbreviation["CT"] = "CT";
    StateAbbreviation["DE"] = "DE";
    StateAbbreviation["FL"] = "FL";
    StateAbbreviation["GA"] = "GA";
    StateAbbreviation["HI"] = "HI";
    StateAbbreviation["ID"] = "ID";
    StateAbbreviation["IL"] = "IL";
    StateAbbreviation["IN"] = "IN";
    StateAbbreviation["IA"] = "IA";
    StateAbbreviation["KS"] = "KS";
    StateAbbreviation["KY"] = "KY";
    StateAbbreviation["LA"] = "LA";
    StateAbbreviation["ME"] = "ME";
    StateAbbreviation["MD"] = "MD";
    StateAbbreviation["MA"] = "MA";
    StateAbbreviation["MI"] = "MI";
    StateAbbreviation["MN"] = "MN";
    StateAbbreviation["MS"] = "MS";
    StateAbbreviation["MO"] = "MO";
    StateAbbreviation["MT"] = "MT";
    StateAbbreviation["NE"] = "NE";
    StateAbbreviation["NV"] = "NV";
    StateAbbreviation["NH"] = "NH";
    StateAbbreviation["NJ"] = "NJ";
    StateAbbreviation["NM"] = "NM";
    StateAbbreviation["NY"] = "NY";
    StateAbbreviation["NC"] = "NC";
    StateAbbreviation["ND"] = "ND";
    StateAbbreviation["OH"] = "OH";
    StateAbbreviation["OK"] = "OK";
    StateAbbreviation["OR"] = "OR";
    StateAbbreviation["PA"] = "PA";
    StateAbbreviation["RI"] = "RI";
    StateAbbreviation["SC"] = "SC";
    StateAbbreviation["SD"] = "SD";
    StateAbbreviation["TN"] = "TN";
    StateAbbreviation["TX"] = "TX";
    StateAbbreviation["UT"] = "UT";
    StateAbbreviation["VT"] = "VT";
    StateAbbreviation["VA"] = "VA";
    StateAbbreviation["WA"] = "WA";
    StateAbbreviation["WV"] = "WV";
    StateAbbreviation["WI"] = "WI";
    StateAbbreviation["WY"] = "WY";
})(StateAbbreviation || (exports.StateAbbreviation = StateAbbreviation = {}));
var State;
(function (State) {
    State["Alabama"] = "Alabama";
    State["Alaska"] = "Alaska";
    State["Arizona"] = "Arizona";
    State["Arkansas"] = "Arkansas";
    State["California"] = "California";
    State["Colorado"] = "Colorado";
    State["Connecticut"] = "Connecticut";
    State["Delaware"] = "Delaware";
    State["Florida"] = "Florida";
    State["Georgia"] = "Georgia";
    State["Hawaii"] = "Hawaii";
    State["Idaho"] = "Idaho";
    State["Illinois"] = "Illinois";
    State["Indiana"] = "Indiana";
    State["Iowa"] = "Iowa";
    State["Kansas"] = "Kansas";
    State["Kentucky"] = "Kentucky";
    State["Louisiana"] = "Louisiana";
    State["Maine"] = "Maine";
    State["Maryland"] = "Maryland";
    State["Massachusetts"] = "Massachusetts";
    State["Michigan"] = "Michigan";
    State["Minnesota"] = "Minnesota";
    State["Mississippi"] = "Mississippi";
    State["Missouri"] = "Missouri";
    State["Montana"] = "Montana";
    State["Nebraska"] = "Nebraska";
    State["Nevada"] = "Nevada";
    State["NewHampshire"] = "New Hampshire";
    State["NewJersey"] = "New Jersey";
    State["NewMexico"] = "New Mexico";
    State["NewYork"] = "New York";
    State["NorthCarolina"] = "North Carolina";
    State["NorthDakota"] = "North Dakota";
    State["Ohio"] = "Ohio";
    State["Oklahoma"] = "Oklahoma";
    State["Oregon"] = "Oregon";
    State["Pennsylvania"] = "Pennsylvania";
    State["RhodeIsland"] = "Rhode Island";
    State["SouthCarolina"] = "South Carolina";
    State["SouthDakota"] = "South Dakota";
    State["Tennessee"] = "Tennessee";
    State["Texas"] = "Texas";
    State["Utah"] = "Utah";
    State["Vermont"] = "Vermont";
    State["Virginia"] = "Virginia";
    State["Washington"] = "Washington";
    State["WestVirginia"] = "West Virginia";
    State["Wisconsin"] = "Wisconsin";
    State["Wyoming"] = "Wyoming";
})(State || (exports.State = State = {}));