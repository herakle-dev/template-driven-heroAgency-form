import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }
newHero() {
this.model = new Hero(42, '', '');
}

skyDog(): Hero {
const myHero =  new Hero(42, 'SkyDog',
                 'Fetch any object at any distance',
                 'Leslie Rollover');
console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
return myHero;
}
showFormControls(form: any) {
  this.skyDog()
  console.log(form.controls.power.value,form.controls.name.value,form.controls.alterEgo.value)
return form && form.controls.name &&
form.controls.name.value;
}

}
