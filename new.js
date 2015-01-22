/**
 * Created by epapa on 1/22/15.
 */
var Person = {
    getName : function(){
        return 'Goke';
    },
    name : "Goke",
    age : 10,
    getAge : function(){
        return Person.age;
    }
};

var Human = function () {
    var name = "Goke";
    var age = 10;
    return {
        getName : function(){
            return name;
        }
    };
};

var Man = function(){};
Man.prototype.name = "Goke";
Man.prototype.getName = function(){
    return this.name;
}


console.log(Person.getName());
console.log(Human().getName());

var man = new Man();
console.log(man.getName());

var WeoCMSConstants = {

}

var WeboApp = function(){

}

var weboApp = weboApp || new WeboApp();


