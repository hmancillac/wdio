function Page(){
//El constructor se podrá definir una vez instanciada la función
}

page.prototype.open = function (path){
    //abre el navegador con el método open en la URL que se indique
    browser.url(path);
}

module.exports = new Page();//exportación del archivo a resto del proyecto para que pueda ser utilizado en las pruebas.