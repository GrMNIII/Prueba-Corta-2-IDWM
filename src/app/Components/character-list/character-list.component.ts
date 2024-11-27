import { Component, OnInit } from '@angular/core';
import { Character, RickAndMortyService } from '../../Services/rick-and-morty.service';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  providers:[RickAndMortyService],
  imports:[CharacterCardComponent, SearchBarComponent, HttpClientModule, CommonModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  searchQuery: string = '';

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.rickAndMortyService.getCharacters(this.currentPage, this.searchQuery).subscribe((response) => {
      this.characters = response.results;
      this.totalPages = response.info.pages;
    });
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    this.currentPage = 1;
    this.fetchCharacters();
  }

  changePage(next: boolean): void {
    if (next && this.currentPage < this.totalPages) this.currentPage++;
    if (!next && this.currentPage > 1) this.currentPage--;
    this.fetchCharacters();
  }
}
