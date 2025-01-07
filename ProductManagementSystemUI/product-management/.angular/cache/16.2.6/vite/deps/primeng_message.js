import {
  ExclamationTriangleIcon,
  InfoCircleIcon,
  TimesCircleIcon
} from "./chunk-25WEELJI.js";
import {
  CheckIcon
} from "./chunk-AIXBX2R3.js";
import "./chunk-E77JTBS4.js";
import "./chunk-ABCZZWW6.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle
} from "./chunk-S5PD4KAJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2SF5VHWC.js";
import "./chunk-KPWRU77V.js";
import "./chunk-CRKP2T53.js";
import "./chunk-G3JSYQIV.js";
import "./chunk-SU2WE4RP.js";

// node_modules/primeng/fesm2022/primeng-message.mjs
function UIMessage_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_InfoCircleIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "InfoCircleIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_TimesCircleIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesCircleIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_ExclamationTriangleIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ExclamationTriangleIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r7.text, ɵɵsanitizeHtml);
  }
}
function UIMessage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, UIMessage_div_5_span_1_Template, 1, 1, "span", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r4.escape);
  }
}
function UIMessage_ng_template_6_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r8.text);
  }
}
function UIMessage_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UIMessage_ng_template_6_span_0_Template, 2, 1, "span", 7);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r6.escape);
  }
}
var _c0 = function(a0, a1, a2, a3, a4) {
  return {
    "p-inline-message-info": a0,
    "p-inline-message-warn": a1,
    "p-inline-message-error": a2,
    "p-inline-message-success": a3,
    "p-inline-message-icon-only": a4
  };
};
var UIMessage = class _UIMessage {
  /**
   * Severity level of the message.
   * @group Props
   */
  severity;
  /**
   * Text content.
   * @group Props
   */
  text;
  /**
   * Whether displaying messages would be escaped or not.
   * @group Props
   */
  escape = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  get icon() {
    if (this.severity && this.severity.trim()) {
      return this.severity;
    } else {
      return "info";
    }
  }
  static ɵfac = function UIMessage_Factory(t) {
    return new (t || _UIMessage)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _UIMessage,
    selectors: [["p-message"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      severity: "severity",
      text: "text",
      escape: "escape",
      style: "style",
      styleClass: "styleClass"
    },
    decls: 8,
    vars: 16,
    consts: [["aria-live", "polite", 1, "p-inline-message", "p-component", "p-inline-message", 3, "ngStyle", "ngClass"], [3, "styleClass", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["escapeOut", ""], [3, "styleClass"], ["class", "p-inline-message-text", 3, "innerHTML", 4, "ngIf"], [1, "p-inline-message-text", 3, "innerHTML"], ["class", "p-inline-message-text", 4, "ngIf"], [1, "p-inline-message-text"]],
    template: function UIMessage_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, UIMessage_CheckIcon_1_Template, 1, 1, "CheckIcon", 1);
        ɵɵtemplate(2, UIMessage_InfoCircleIcon_2_Template, 1, 1, "InfoCircleIcon", 1);
        ɵɵtemplate(3, UIMessage_TimesCircleIcon_3_Template, 1, 1, "TimesCircleIcon", 1);
        ɵɵtemplate(4, UIMessage_ExclamationTriangleIcon_4_Template, 1, 1, "ExclamationTriangleIcon", 1);
        ɵɵtemplate(5, UIMessage_div_5_Template, 2, 1, "div", 2);
        ɵɵtemplate(6, UIMessage_ng_template_6_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const _r5 = ɵɵreference(7);
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction5(10, _c0, ctx.severity === "info", ctx.severity === "warn", ctx.severity === "error", ctx.severity === "success", ctx.text == null));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.icon === "success");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.icon === "info");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.icon === "error");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.icon === "warn");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.escape)("ngIfElse", _r5);
      }
    },
    dependencies: function() {
      return [NgClass, NgIf, NgStyle, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon];
    },
    styles: ["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UIMessage, [{
    type: Component,
    args: [{
      selector: "p-message",
      template: `
        <div
            aria-live="polite"
            class="p-inline-message p-component p-inline-message"
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{
                'p-inline-message-info': severity === 'info',
                'p-inline-message-warn': severity === 'warn',
                'p-inline-message-error': severity === 'error',
                'p-inline-message-success': severity === 'success',
                'p-inline-message-icon-only': this.text == null
            }"
        >
            <CheckIcon *ngIf="icon === 'success'" [styleClass]="'p-inline-message-icon'" />
            <InfoCircleIcon *ngIf="icon === 'info'" [styleClass]="'p-inline-message-icon'" />
            <TimesCircleIcon *ngIf="icon === 'error'" [styleClass]="'p-inline-message-icon'" />
            <ExclamationTriangleIcon *ngIf="icon === 'warn'" [styleClass]="'p-inline-message-icon'" />
            <div *ngIf="!escape; else escapeOut">
                <span *ngIf="!escape" class="p-inline-message-text" [innerHTML]="text"></span>
            </div>
            <ng-template #escapeOut>
                <span *ngIf="escape" class="p-inline-message-text">{{ text }}</span>
            </ng-template>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"]
    }]
  }], null, {
    severity: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    escape: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
var MessageModule = class _MessageModule {
  static ɵfac = function MessageModule_Factory(t) {
    return new (t || _MessageModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MessageModule,
    declarations: [UIMessage],
    imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon],
    exports: [UIMessage]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon]
  });
};
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon],
      exports: [UIMessage],
      declarations: [UIMessage]
    }]
  }], null, null);
})();
export {
  MessageModule,
  UIMessage
};
//# sourceMappingURL=primeng_message.js.map