import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'ka-root',
  templateUrl: './app.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  constructor(private router: Router) {
  }
}
