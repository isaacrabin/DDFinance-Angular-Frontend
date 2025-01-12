// search.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuerySubject = new BehaviorSubject<string>(''); // Holds the current search query
  searchQuery$ = this.searchQuerySubject.asObservable(); // Observable for components to subscribe to

  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query); // Updates the search query
  }
}
