// Angular Imports
import { Component } from '@angular/core'
import { MatSlideToggleChange } from '@angular/material/slide-toggle'
// @i18n Imports
import { TranslocoService } from '@ngneat/transloco'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'template-angular-i18n'

	constructor(private _transloco: TranslocoService) {}

	toggleLanguage(event: MatSlideToggleChange) {
		console.log(event.checked)
		if (event.checked) {
			this._transloco.setActiveLang('en')
		} else {
			this._transloco.setActiveLang('es')
		}
	}
}
