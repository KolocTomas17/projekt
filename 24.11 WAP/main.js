//et i = 5;
//let j = [1, 2, 3, 4 ,5];

class Female {

    constructor(name, age, body, hair, behavior) {
        this.name = name;
        this.age = age;
        this.body = body;
        this.hair = hair;
        this.behavior = behavior;
    }

    varit() {
        console.log(this.name + " umí vařit");
    }
    prat() {
        console.log(this.name + " vypere");
    }
    uspokojit() {
        console.log(this.name + " dokáže snad uspokojit");
    }
}

class Gf {
    constructor(name, age, body, hair, kids) {
        this.name = name;
        this.age = age;
        this.body = body;
        this.hair = hair;
        this.kids = kids;
    }
    klid() {
        console.log(this.name + " nebude tě otravovat s blbostma");
    }
    varit() {
        console.log(this.name + " udělá ti večeři");
    }
    faitful() {
        console.log(this.name + " bude ti věrná")
    }
}

const female = new Female("bineární okurka", " 15+", "athlete", "brown",  "good");
console.log(female);
female.varit();
female.prat();
female.uspokojit();

const gf = new Gf("Holka", "15-20", "good", "brown", "0");
console.log(gf);
gf.klid();
gf.varit();
gf.faitful();


