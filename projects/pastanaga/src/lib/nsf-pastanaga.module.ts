import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SchemaFormModule } from 'ngx-schema-form';
import {
    ControlsModule,
    TextFieldModule,
    ButtonModule,
    SvgModule,
} from 'pastanaga-angular';

import {
    PastanagaStringWidget,
    PastanagaTextareaWidget,
    PastanagaRichtextWidget,
    PastanagaSelectWidget,
    PastanagaRadioWidget,
    PastanagaCheckboxWidget,
    PastanagaBooleanWidget,
    PastanagaButtonWidget,
    PastanagaArrayWidget,
} from './pastanaga.components';

const WIDGETS = [
    PastanagaStringWidget,
    PastanagaTextareaWidget,
    PastanagaRichtextWidget,
    PastanagaSelectWidget,
    PastanagaRadioWidget,
    PastanagaCheckboxWidget,
    PastanagaBooleanWidget,
    PastanagaButtonWidget,
    PastanagaArrayWidget,
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        SchemaFormModule,
        ControlsModule,
        ButtonModule,
        TextFieldModule,
        SvgModule,
    ],
    declarations: WIDGETS,
    entryComponents: WIDGETS,
    exports: WIDGETS,
})
export class NsfPastanagaModule {}
