import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';


@Component({
  selector: 'gift-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif;


  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is requiered.');

  }



}
