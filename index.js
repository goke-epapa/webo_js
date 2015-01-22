/**
 * Created by epapa on 1/22/15.
 */
/**
 * Person Namespace
 * @constructor
 */

var Person = function(){
    /**
     * Name
     * @type {string}
     */
    var name = "Goke";
    /**
     * Age
     * @type {number}
     */
    var age = 100;
    /**
     * Gets the Age of the person
     * @returns {number}
     */
    this.getAge = function(){
        return age;
    }
    /**
     * Gets the name of the person
     * @returns {string}
     */
    this.getName = function(){
        return name;
    }
    /**
     * Sets the name of the person
     * @param _name
     */
    this.setName = function (_name) {
        name = _name;
        return this;
    }
    //TODO Create setAge Method
};
var UserPreferences = function(){

};
var goke = new Person();
var yemi = new Person();
var man = new Man();
console.log(goke.getAge());
console.log(yemi.setName('Yemi')
    .getName());