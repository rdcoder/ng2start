import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Hero }    from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html',
  styleUrls: ['app/hero-form.component.css']
})

export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  onePower = '';          
  model = {id: 55, name: 'Mr. Tester'};
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  
  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }
}