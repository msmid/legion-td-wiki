import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-search',
  standalone: true,
  template: `
    <label class="input bg-sky-50 flex items-center gap-2 min-w-full sm:min-w-[350px]">
      <input
        (input)="onSearch($event)"
        placeholder="Search..."
        type="text"
        class="grow placeholder:text-sky-500"
        placeholder="Search"
      />
    </label>
  `,
  styles: [
    `
      .page-search {
        display: flex;
        align-items: center;
      }
      .page-search input {
        flex: 1;
        padding: 0.5rem;
        margin-right: 0.5rem;
      }
      .page-search button {
        padding: 0.5rem 1rem;
      }
    `,
  ],
})
export class PageSearchComponent {
  @Output() searchChange = new EventEmitter<string>();

  searchQuery: string = '';

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;

    this.searchChange.emit(this.searchQuery);
  }
}
