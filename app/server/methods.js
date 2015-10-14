Meteor.methods({

  askWatson: function (question) {
    // Да простит меня Великий Ктулху за этот аццкий трэш!
    check(question, String);

    // Делаем запросик к демке с Watson QA. Да-да, пока только так.
    var response = HTTP.post('http://watson-qa-demo.mybluemix.net/', {
      params: {
        dataset: 'healthcare',
        questionText: question
      }
    });

    // Объект с ответами. Пустой.
    // Но смотрите дальше, будет весело!
    var answers = {};

    // Парсим ответ как HTML.
    $ = cheerio.load(response.content);

    // Тащим содержимое первого тега script.
    // Почему именно с первого? Да так, прост.
    const code = $('script').first().text();

    // ОХТЫЖЙОБАНЫЙТЫНАХУЙ (O_o)/
    // ЩИТО ЭНТО?!
    // ...
    // Ну лана. Да и пофиГ что тут eval.
    // У нас зато check есть =)
    // Секьюрити на уровне.
    try {
      eval(code);
    }
    catch (e) {
      // Курим...
    }

    // Почему Я возвращаю пустой объект?
    // Не ебанутый ли Я?
    // Да нет, не ебанутый. Наверное...
    // Тогда зачем Я эти комменты пишу?
    // Разве их кто-нить читать будет?
    // ...
    // ОК, продолжим, где Я остановился?
    // Ах да, пустой объект...
    // Но на самом деле он никакой не пустой!
    // (конечно, если все вышеписанное говно каким-то чудом зафурычило и взлетело без лишних вопросов)
    // В переменной code у нас лежит текст примерно вот такого содержания:
    // 'var answers = {"qclasslist":[{"value":"DESCRIPTIVE"}, /* бла-бла-бла */ }'.
    // При eval содержимое выполнится как JS код и answers переинициализируется.
    return answers;
    // Пример ответа:
    // -------------
    //{ qclasslist:
    //  [ { value: 'DESCRIPTIVE' },
    //    { value: 'FACTOID' } ],
    //    focuslist: [ { value: 'How' } ],
    //  latlist: [ { value: 'How' } ],
    //  evidencelist:
    //  [ { value: '0.8470491766929626',
    //    text: 'Start by thinking about why you want to quit . If you\'ve tried to quit before, think about what worked and what didn\'t. This will help you find the right quitting strategies. Quitting smoking is hard, but millions of people have done it successfully. In fact, more than half of Americans who have ever smoked have quit.',
    //    id: 'PB_163F559BD26842EE672A0AC20EAD87F2',
    //    title: 'Guide to Quitting Smoking : Guide to Quitting Smoking : The Basics : How can I quit smoking?',
    //    document: 'http://10.110.76.161:8080/instance/67/deepqa/v1/question/document/PB_163F559BD26842EE672A0AC20EAD87F2/200/519',
    //    copyright: 'No copyright specified for this supporting passage or document.',
    //    termsOfUse: 'No license specified for this supporting passage or document.',
    //    metadataMap: [Object] },
    //    { value: '0.39066120982170105',
    //      text: 'They sent cards of encouragement, helped her keep a positive attitude, and called and reminded her of all the reasons to never smoke again. Tiffany\'s biggest motivation has been her daughter. \'She was so happy and proud of me when I quit,\' says Tiffany. \'She told me she had prayed that I would quit smoking. And I told her, \'I quit because I want to be around for you.\'',
    //      id: 'PB_421949AB70436D67ECE8604F11FF03DD',
    //      title: 'Celebrate Moms Who Protect Children\'s Health : Celebrate Moms Who Protect Children\'s Health : Celebrate Moms Who Protect Children\'s Health : Meet Tiffany, Who Quit Smoking to Be There for Her Daughter',
    //      document: 'http://10.110.76.161:8080/instance/67/deepqa/v1/question/document/PB_421949AB70436D67ECE8604F11FF03DD/1952/2322',
    //      copyright: 'No copyright specified for this supporting passage or document.',
    //      termsOfUse: 'No license specified for this supporting passage or document.',
    //      metadataMap: [Object] },
    //    { value: '0.11741899698972702',
    //      text: 'He is angry with himself that he ever accepted that first cigarette at age 15 from a teenage friend and that he waited so long to quit smoking. Bill says he learned the hard way that smoking makes diabetes harder to control. "Doctors always told me to quit smoking. I didn\'t listen." At 37, Bill had kidney failure. He now needs dialysis treatments 12 hours a week to filter his blood the way his kidneys used to - before they stopped functioning properly. Smoking cigarettes contributed to this and other problems he now has to manage. "',
    //      id: 'PB_22EF972FE7E9D6BAF4CD8987C65BFDF2',
    //      title: 'Celebrate Dads Who Live SmokeFree Lives : Celebrate Dads Who Live SmokeFree Lives : Celebrate Dads Who Live Smoke-Free Lives : Bill\'s Story',
    //      document: 'http://10.110.76.161:8080/instance/67/deepqa/v1/question/document/PB_22EF972FE7E9D6BAF4CD8987C65BFDF2/336/874',
    //      copyright: 'No copyright specified for this supporting passage or document.',
    //      termsOfUse: 'No license specified for this supporting passage or document.',
    //      metadataMap: [Object] },
    //    { value: '0.04539597034454346',
    //      text: 'It wasn\'t until he nearly suffocated that he decided to quit smoking for good. "Smoking was something I did to fit in," he says, remembering why he started smoking. "At first it was unpleasant, but the more I smoked, the more I became addicted to cigarettes." Even though Michael lost his father, sister, and many other people in his community to smoking-related diseases, he continued to smoke. The day Michael made the decision to quit smoking for good was a day he won\'t forget.',
    //      id: 'PB_22EF972FE7E9D6BA288B3532A65D5A1C',
    //      title: 'Celebrate Dads Who Live SmokeFree Lives : Celebrate Dads Who Live SmokeFree Lives : Celebrate Dads Who Live Smoke-Free Lives : Michael\'s Story',
    //      document: 'http://10.110.76.161:8080/instance/67/deepqa/v1/question/document/PB_22EF972FE7E9D6BA288B3532A65D5A1C/614/1095',
    //      copyright: 'No copyright specified for this supporting passage or document.',
    //      termsOfUse: 'No license specified for this supporting passage or document.',
    //      metadataMap: [Object] },
    //    { value: '0.008169703185558319',
    //      text: ' If you smoke or use tobacco, try to quit. Smoking can raise your risk for CHD and heart attack and worsen other CHD risk factors. Talk with your doctor about programs and products that can help you quit. Also, try to avoid secondhand smoke. If you find it hard to quit smoking on your own, consider joining a support group. Many hospitals, workplaces, and community groups offer classes to help people quit smoking. For more information about how to quit smoking, go to the Health Topics Smoking and Your Heart article and the National Heart, Lung, and Blood Institute\'s (NHLBI\'s) "Your Guide to a Healthy Heart.".',
    //      id: 'T_8896CFB3B739F63C6C10A3762EE6DE4C',
    //      title: 'How Does Heart Disease Affect Women? : How Does Heart Disease Affect Women? : How Is Heart Disease Treated? : Lifestyle Changes : Quit Smoking',
    //      document: 'http://10.110.76.161:8080/instance/67/deepqa/v1/question/document/T_8896CFB3B739F63C6C10A3762EE6DE4C/0/-1',
    //      copyright: 'http://en.wikipedia.org/wiki/Wikipedia:Copyrights',
    //      termsOfUse: 'http://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License',
    //      metadataMap: [Object] } ],
    //    synonymList:
    //  [ { partOfSpeech: 'noun',
    //    value: 'smoking',
    //    lemma: 'smoking',
    //    synSet: [Object] },
    //    { partOfSpeech: 'verb',
    //      value: 'quit',
    //      lemma: 'quit',
    //      synSet: [Object] },
    //    { partOfSpeech: 'verb',
    //      value: 'do',
    //      lemma: 'do',
    //      synSet: [Object] } ],
    //    disambiguatedEntities: [],
    //  pipelineid: '1919511733',
    //  formattedAnswer: false,
    //  category: '',
    //  items: 5,
    //  status: 'Complete',
    //  id: 'hc0:21DB0A049DAE4FA59FFEE96D3040E58E',
    //  questionText: 'How do I quit smoking?',
    //  evidenceRequest: { items: 5, profile: 'NO' },
    //  answers:
    //    [ { id: 0,
    //      text: '163F559BD26842EEF911A74213716E15 - Guide to Quitting Smoking : Guide to Quitting Smoking : The Basics : How can I quit smoking?',
    //      pipeline: 'Descriptive,TAO',
    //      confidence: 0.84705,
    //      entityTypes: [] },
    //      { id: 1,
    //        text: '421949AB70436D67193FEA0880596546 - Celebrate Moms Who Protect Children\'s Health : Celebrate Moms Who Protect Children\'s Health : Celebrate Moms Who Protect Children\'s Health : Meet Tiffany, Who Quit Smoking to Be There for Her Daughter',
    //        pipeline: 'Descriptive,TAO',
    //        confidence: 0.39066,
    //        entityTypes: [] },
    //      { id: 2,
    //        text: '22EF972FE7E9D6BAB96C6E4B6825DB53 - Celebrate Dads Who Live SmokeFree Lives : Celebrate Dads Who Live SmokeFree Lives : Celebrate Dads Who Live Smoke-Free Lives : Bill\'s Story',
    //        pipeline: 'Descriptive,TAO',
    //        confidence: 0.11742,
    //        entityTypes: [] },
    //      { id: 3,
    //        text: '22EF972FE7E9D6BA44CB75860057BDA6 - Celebrate Dads Who Live SmokeFree Lives : Celebrate Dads Who Live SmokeFree Lives : Celebrate Dads Who Live Smoke-Free Lives : Michael\'s Story',
    //        pipeline: 'Descriptive,TAO',
    //        confidence: 0.0454,
    //        entityTypes: [] },
    //      { id: 4,
    //        text: '8896CFB3B739F63C6C10A3762EE6DE4C - How Does Heart Disease Affect Women? : How Does Heart Disease Affect Women? : How Is Heart Disease Treated? : Lifestyle Changes : Quit Smoking',
    //        pipeline: 'TAO',
    //        confidence: 0.00817,
    //        entityTypes: [] } ],
    //      errorNotifications: [],
    //  passthru: '' }

  }

});
