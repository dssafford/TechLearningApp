import { Injectable } from '@angular/core';
import {Character} from '../modules/characters/classes/character';
import {CHARACTERS} from '../modules/characters/classes/data-characters';


@Injectable()
export class CharactersService {

  constructor() { }

  getCharacters(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }

}
