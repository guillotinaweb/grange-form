import { DefaultWidgetRegistry } from 'ngx-schema-form';
import {
    GrangeFormStringWidget,
    GrangeFormTextareaWidget,
    GrangeFormSelectWidget,
    GrangeFormRadioWidget,
    GrangeFormCheckboxWidget,
    GrangeFormBooleanWidget,
    GrangeFormButtonWidget,
    GrangeFormRichtextWidget,
    GrangeFormArrayWidget,
} from './grange-form.components';

export class GrangeFormWidgetRegistry extends DefaultWidgetRegistry {
    constructor() {
        super();

        this.register('string', GrangeFormStringWidget);
        this.register('search', GrangeFormStringWidget);
        this.register('tel', GrangeFormStringWidget);
        this.register('url', GrangeFormStringWidget);
        this.register('email', GrangeFormStringWidget);
        this.register('password', GrangeFormStringWidget);
        this.register('date', GrangeFormStringWidget);
        this.register('date-time', GrangeFormStringWidget);
        this.register('time', GrangeFormStringWidget);
        this.register('integer', GrangeFormStringWidget);
        this.register('number', GrangeFormStringWidget);
        this.register('textarea', GrangeFormTextareaWidget);
        this.register('richtext', GrangeFormRichtextWidget);
        this.register('select', GrangeFormSelectWidget);
        this.register('radio', GrangeFormRadioWidget);
        this.register('boolean', GrangeFormBooleanWidget);
        this.register('checkbox', GrangeFormCheckboxWidget);
        this.register('array', GrangeFormArrayWidget);

        this.register('button', GrangeFormButtonWidget);

        this.setDefaultWidget(GrangeFormStringWidget);
    }
}
