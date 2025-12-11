import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="dropdown dropdown-bottom dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost m-1">
      <span>Theme</span>
      <svg
        width="12px"
        height="12px"
        class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
      <div class="flex flex-col gap-1">
        <ng-container *ngFor="let theme of THEMES">
          <button
            (click)="handleThemeChange(theme)"
            class="btn btn-sm"
            [class.btn-success]="currentTheme === theme"
          >
            {{ theme }}
          </button>
        </ng-container>
      </div>
    </ul>
  </div>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
  currentTheme = '';

  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  handleThemeChange(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
  }

  readonly THEMES = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'dim',
    'nord',
    'sunset',
  ];
}
