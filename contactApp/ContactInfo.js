class ContactInfo{
    static ID=0;
    constructor(city,areaName){
       this.ID=ContactInfo.ID++;
       this.city=city;
       this.areaName=areaName;
    }

    updateContactInfo(parameter, newValue) {
        switch (parameter) {
            case "city":
                this.city = newValue
                return this;
            case "areaName":
                this.areaName = newValue
                return this;
            default:
                return "Invalid Parameter!"
        }
    }

}

module.exports = ContactInfo