// Angular Imports
import { Injectable, isDevMode, NgModule } from '@angular/core'
import { HttpClient } from '@angular/common/http'
// i18n Imports
import {
	TRANSLOCO_LOADER,
	TRANSLOCO_CONFIG,
	Translation,
	TranslocoLoader,
	translocoConfig,
	TranslocoModule,
} from '@ngneat/transloco'

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
	constructor(private _http: HttpClient) {}

	getTranslation(lang: string) {
		return this._http.get<Translation>(`/assets/i18n/${lang}.json`)
	}
}

@NgModule({
	exports: [TranslocoModule],
	providers: [
		{
			provide: TRANSLOCO_CONFIG,
			useValue: translocoConfig({
				availableLangs: ['en', 'es'],
				defaultLang: 'es',
				// Remove this option if your application doesn't support changing language in runtime.
				reRenderOnLangChange: true,
				prodMode: !isDevMode(),
			}),
		},
		{ provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
	],
})
export class TranslocoRootModule {}
