var PageGoogle = require('./PageGoogle');
var assert = require('assert');

describe('Google page with page object pattern', function(){
    it('do a search on the google page', function(){
        PageGoogle.open();
        PageGoogle.inputBox.setValue("ssafferbtenrendngngd" + '\n');
        assert.equal(PageGoogle.results.getText(), 'La búsqueda de ssafferbtenrendngngd no obtubo nungún resultado')
    })
})