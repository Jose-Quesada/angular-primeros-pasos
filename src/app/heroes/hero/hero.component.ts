import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName():string { //método que se usa como una propiedad
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void{
    this.name = 'martosman';
  }

  changeAge():void{
    this.age = 18;
  }

  resetForm():void{
    this.name = 'iroman';
    this.age = 45;

    // Hago cambios directamente con Javascript --> da problemas al no estar
    // en el ciclo de detección de Angular. NO RECOMENDABLE
    // document.querySelector('h1')!.innerHTML = '<h1> Cambio con Javascript</h1>'
    // document.querySelectorAll('h1')!.forEach ( element => {
    //   element.innerHTML = '<h1> Cambio con Javascript</h1>';
    // })
  }

}
