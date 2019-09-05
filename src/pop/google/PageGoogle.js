var Page =  require('../Page');

var PageGoogle = Object.create(page{

    open: { value: function(){
        //acá se está sobreescribieno el método open de page.js
        Page.open.call(this, browser.options.baseUrlGoogle);
    }},

    inputbox: { get: function(){
        return browser.element('#lst-ib');
    }},

    setInputBox: { value: function(value){
        browser.setValue('#lst-ib', value);
    }},

    results: { get: function(){
        return browser.elementClear('div.card-section > p:nth-child(1)');
    }}

})
module.exports = PageGoogle;