import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="dropdown">
    <div tabindex="0" role="button" class="btn m-1">Theme</div>
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
