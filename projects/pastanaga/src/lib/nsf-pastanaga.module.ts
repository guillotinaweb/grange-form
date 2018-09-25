import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlsModule, TextFieldModule } from 'pastanaga-angular';
import {
    PastanagaStringWidget,
    PastanagaTextareaWidget,
    PastanagaRichtextWidget,
    PastanagaSelectWidget,
    PastanagaRadioWidget,
    PastanagaCheckboxWidget,
    PastanagaBooleanWidget,
    PastanagaButtonWidget,
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
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ControlsModule,
        TextFieldModule,
    ],
    declarations: WIDGETS,
    entryComponents: WIDGETS,
    exports: WIDGETS,
})
export class NsfPastanagaModule {}
