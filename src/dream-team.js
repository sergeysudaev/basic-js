module.exports = function createDreamTeam(members) {
  try {
    let teamName = [];
    members.forEach(name => {
      if (typeof name === "string") {
        teamName.push(/\w/.exec(name)[0].toUpperCase());
      }
    });
    return teamName.sort().join("");
  } catch (e) {
    return false;
  }
};
