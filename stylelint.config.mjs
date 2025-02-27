const stylelintConfig = {
  "extends": ["stylelint-config-standard-scss", "stylelint-prettier/recommended"],
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
  ],
  "ignoreFiles": ["**/*.js"],
  "rules": {
    "value-keyword-case": null,
    "no-invalid-position-at-import-rule": null,
    "at-rule-empty-line-before": [ "always", {
      "except": [
        "blockless-after-same-name-blockless",
        "first-nested"
      ],
      "ignore": ["after-comment"],
      "ignoreAtRules": [
        "import",
        "include",
        "else"
      ]
    } ],
    "at-rule-no-unknown": null,
    "declaration-block-no-redundant-longhand-properties": [
      true, {
        "ignoreShorthands": ["grid-column"]
      }
    ],
    "scss/at-mixin-pattern": null,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-pattern": [
      "^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$", {
        "ignore": "local",
        "message": "Expected variable to be kebab-case"
      }
    ],
    "scss/double-slash-comment-empty-line-before": null,
    "scss/operator-no-newline-before": null,
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": null,
    "selector-no-vendor-prefix": null,
    "selector-pseudo-class-no-unknown": [ true, {
      "ignorePseudoClasses": ["", "global"]
    } ],
    "selector-class-pattern": null,
    "order/properties-order": [[
      "display",
      "position",
      "top",
      "right",
      "bottom",
      "left",

      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",

      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",

      "gap",

      "grid-row",
      "grid-row-start",
      "grid-row-end",
      "grid-column",
      "grid-column-start",
      "grid-column-end",

      "align-content",
      "align-items",
      "align-self",
      "justify-content",
      "place-items",

      "order",

      "width",
      "min-width",
      "max-width",

      "height",
      "min-height",
      "max-height",

      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",

      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",

      "float",
      "clear",

      "columns",
      "column-gap",
      "column-fill",
      "column-rule",
      "column-span",
      "column-count",
      "column-width",

      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",

      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",

      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",

      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",

      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-left-radius",
      "border-bottom-right-radius",

      "border-color",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",

      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",

      "background",
      "background-attachment",
      "background-clip",
      "background-color",
      "background-image",
      "background-repeat",
      "background-position",
      "background-size",

      "color",

      "font",
      "font-family",
      "font-size",
      "font-smoothing",
      "font-style",
      "font-variant",
      "font-weight",

      "letter-spacing",
      "line-height",
      "list-style",
      "line-spacing",

      "text-align",
      "text-decoration",
      "text-indent",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-wrap",

      "white-space",
      "word-spacing",

      "border-collapse",
      "border-spacing",
      "box-shadow",
      "caption-side",
      "content",
      "cursor",
      "empty-cells",
      "opacity",
      "overflow",
      "quotes",
      "speak",
      "table-layout",
      "vertical-align",
      "visibility",
      "z-index"
    ], { "unspecified": "bottom" }]
  }
}

export default stylelintConfig
