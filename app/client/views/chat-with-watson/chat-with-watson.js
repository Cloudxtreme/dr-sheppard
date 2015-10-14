Template.ChatWithWatson.events({
  'submit form[data-action="ask-watson"]': (e, tpl) => {
    e.preventDefault();
    const question = tpl.find('input#question').value;
    Meteor.call('askWatson', question, (err, answer) => {
      if (err) {
        const msg = err.reason || err.text || 'Unknown error!';
        alert(msg);
      }
      else {
        tpl.answer.set(answer);
      }
    });
  }
});

Template.ChatWithWatson.helpers({
  answer: () => {
    return Template.instance().answer.get();
  }
});


Template.ChatWithWatson.onCreated(function () {
  this.answer = new ReactiveVar();
});