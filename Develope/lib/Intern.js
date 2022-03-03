const Empolyee = require('./Employee');

class Intern extends Empolyee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

}

module.exports = Intern;