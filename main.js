var User = /** @class */ (function () {
    function User(name, age) {
        this._name = name;
        this._age = age;
    }
    User.prototype.greeting = function () {
        return "hello my name is " + this._name;
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
function foo(a) {
}
var user = new User('kokos', 33);
// user.age=33;
// user.name='kokos';
foo(user);
function bar(b) {
}
bar({ name: 'asdf', age: 123 });
bar({ name: 'asdf', age: 123, greeting: function (a) {
        return 'hello';
    } });
var X = /** @class */ (function () {
    function X() {
    }
    return X;
}());
var x = new X();
var iUsers = [
    x,
    { name: 'asdf', age: 123, greeting: function (a) {
            return 'hello';
        } }
];
bar(new X());
function foobar(user) {
    user.greeting();
}
var user1 = new User('asdfg', 123);
foobar(user1);
