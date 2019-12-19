import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

export const darkTheme = {
  "primary-color": "#455363",
  "background-color": "#1f2935",
  "text-color": "#fff"
};

export const lightTheme = {
  "custom-color": "#FFF",
  "primary-color": "#fff",
  "background-color": "#FFF",
  "text-color": "#2d2d2d"
};

@Injectable({
  providedIn: "root"
})
export class ThemeServiceService {
  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
    console.log('light');
    
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
  // constructor (@Inject(DOCUMENT) private document) { }
}
