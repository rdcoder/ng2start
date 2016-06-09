import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Hero }    from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})

export class HeroFormComponent {
  model = {id: 55, name: 'Mr. Tester'};
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}