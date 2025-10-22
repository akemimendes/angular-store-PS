import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../app/components/menu/menu';
import { Home } from "./page/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ps4-store');
}
