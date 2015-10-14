Template.EvidenceDetails.helpers({
  percent: (value) => {
    if (!_.isNumber(value)) {
      value = parseFloat(value);
    }
    return Math.round(value * 100)
  }
});