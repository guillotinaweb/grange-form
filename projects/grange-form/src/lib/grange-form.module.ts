import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemaFormModule } from 'ngx-schema-form';
import {
    ControlsModule,
    TextFieldModule,
    ButtonModule,
    SvgModule,
    RichtextModule,
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
        SchemaFormModule,
        ControlsModule,
        ButtonModule,
        TextFieldModule,
        RichtextModule,
        SvgModule,
    ],
    declarations: WIDGETS,
    entryComponents: WIDGETS,
    exports: WIDGETS,
})
export class GrangeFormModule {}
