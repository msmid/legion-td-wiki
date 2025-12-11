import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-search',
  standalone: true,
  template: `
    <label
      class="input input-bordered input-primary flex items-center gap-2 min-w-full sm:min-w-[350px]"
    >
      <input
        (input)="onSearch($event)"
        (keydown)="onKeyDown($event)"
        placeholder="Search..."
        type="text"
        class="grow"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="h-4 w-4 opacity-70"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        />
      </svg>
      <!-- <kbd class="kbd kbd-sm">⌘</kbd>
      <kbd class="kbd kbd-sm">K</kbd> -->
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
export class PageSearchComponent implements OnInit {
  @Output() searchChange = new EventEmitter<string>();

  searchQuery: string = '';

  ngOnInit() {}

  onKeyDown(event: KeyboardEvent) {}

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;

    this.searchChange.emit(this.searchQuery);
  }
}
