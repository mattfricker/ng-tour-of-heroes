"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var hero_service_1 = require('./hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: 'app/heroes.component.html',
            styleUrls: ['app/heroes.component.css']
        }), 
<<<<<<< HEAD
        __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
    var _a;
=======
        __metadata('design:paramtypes', [router_deprecated_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
>>>>>>> 31e0f99f5261b0fa8a57cbc36863dd2a31382437
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map