import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    SchemaFormModule,
    WidgetRegistry,
    SchemaValidatorFactory,
    ZSchemaValidatorFactory,
} from 'ngx-schema-form';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
    GrangeFormModule,
    GrangeFormWidgetRegistry,
} from '../../projects/grange-form/src/public_api';

import { AppComponent } from './app.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        SchemaFormModule.forRoot(),
        GrangeFormModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [
        { provide: WidgetRegistry, useClass: GrangeFormWidgetRegistry },
        {
            provide: SchemaValidatorFactory,
            useClass: ZSchemaValidatorFactory,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
