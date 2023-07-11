const EliteClass = require("./EliteClass.jsx")

describe('EliteClass', ()=>{
    let eliteClass;

    beforeEach(()=>{
        eliteClass = new EliteClass();
        }
    )

    it("should have default stats", ()=> {
        expect(eliteClass.getName()).toBe("Cocoa Cooler");
        expect(eliteClass.displayTemperature()).toBe("Off");
    })

    it("should come on when powered", ()=> {
        eliteClass.power()
        expect(eliteClass.displayTemperature()).toBe(16)
    })

    it("should let temperature increase when powered on", ()=> {
        eliteClass.power()
        eliteClass.IncreaseTemperature()
        expect(eliteClass.displayTemperature()).toBe(17)
    })

    it("should keep increasing as many times as it is instructed", ()=>{
        eliteClass.power()
        eliteClass.increaseTemperature()
        eliteClass.increaseTemperature()
        eliteClass.increaseTemperature()
        expect(eliteClass.displayTemperature()).toBe(19)
    })

    it('should let temperature decrease when powered on',  () => {
        eliteClass.power()
        eliteClass.increaseTemperature()
        eliteClass.increaseTemperature()
        eliteClass.decreaseTemperature()
        expect(eliteClass.displayTemperature()).toBe(17)
    });

})

