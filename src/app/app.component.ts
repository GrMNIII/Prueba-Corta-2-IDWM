import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CharacterListComponent } from './Components/character-list/character-list.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { CharacterCardComponent } from "./Components/character-card/character-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterListComponent, SearchBarComponent, CharacterCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rick and Morty';
  searchQuery: string = '';

  ngOnInit(): void {
    initFlowbite();
  }

  // Método para manejar la búsqueda
  onSearch(query: string): void {
    this.searchQuery = query;
    console.log('Search query received:', this.searchQuery);
  }
}
