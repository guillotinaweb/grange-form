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
    GrangeFormStringWidget,
    GrangeFormTextareaWidget,
    GrangeFormRichtextWidget,
    GrangeFormSelectWidget,
    GrangeFormRadioWidget,
    GrangeFormCheckboxWidget,
    GrangeFormBooleanWidget,
    GrangeFormButtonWidget,
    GrangeFormArrayWidget,
} from './grange-form.components';

const WIDGETS = [
    GrangeFormStringWidget,
    GrangeFormTextareaWidget,
    GrangeFormRichtextWidget,
    GrangeFormSelectWidget,
    GrangeFormRadioWidget,
    GrangeFormCheckboxWidget,
    GrangeFormBooleanWidget,
    GrangeFormButtonWidget,
    GrangeFormArrayWidget,
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
export class GrangeFormModule {}
