Template.ChatWithWatson.events({
  'submit form[data-action="ask-watson"]': (e, tpl) => {
    e.preventDefault();
    const question = tpl.find('input#question').value;
    tpl.loading.set(true);
    Meteor.call('askWatson', question, (err, answer) => {
      tpl.loading.set(false);
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
  },
  loading: () => {
    return Template.instance().loading.get();
  }
});


Template.ChatWithWatson.onCreated(function () {
  this.answer = new ReactiveVar();
  this.loading = new ReactiveVar();
});


Template.ChatWithWatson.onRendered(function () {
  this.$('input').addClear();
});