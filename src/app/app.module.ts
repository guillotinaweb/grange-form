import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    SchemaFormModule,
    WidgetRegistry,
    SchemaValidatorFactory,
    ZSchemaValidatorFactory,
} from 'ngx-schema-form';

import {
    GrangeFormModule,
    GrangeFormWidgetRegistry,
} from '../../projects/grange-form/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        SchemaFormModule.forRoot(),
        GrangeFormModule,
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
