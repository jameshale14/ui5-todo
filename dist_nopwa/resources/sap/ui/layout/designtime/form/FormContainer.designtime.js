/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/ChangeHandlerMediator","sap/ui/thirdparty/jquery","sap/ui/layout/form/Form"],function(e,n,t){"use strict";function r(e){return e.getFormElements().every(function(e){return e.getVisible()===false})}function i(e){if(e&&!(e instanceof t)){return i(e.getParent())}return e}function a(e){var n=i(e);if(n&&n.getLayout()&&n.getLayout().getMetadata().getName()==="sap.ui.layout.form.GridLayout"){return false}return true}return{palette:{group:"LAYOUT",icons:{svg:"sap/ui/layout/designtime/form/FormContainer.icon.svg"}},isVisible:function(e){return e.isVisible()},actions:{remove:function(e){if(a(e)){return{changeType:"hideControl"}}else{return null}},rename:function(e){if(a(e)){return{changeType:"renameGroup",domRef:function(e){if(!e.getRenderedDomRef()){var t=e.getTitle()||e.getToolbar();return t.getDomRef()}return n(e.getRenderedDomRef()).find(".sapUiFormTitle")[0]},isEnabled:function(e){return!(e.getToolbar()||!e.getTitle())}}}else{return null}}},aggregations:{formElements:{childNames:{singular:"FIELD_CONTROL_NAME",plural:"FIELD_CONTROL_NAME_PLURAL"},domRef:function(e){var t=e.getRenderedDomRef();var i=e.getTitle()||e.getToolbar();if(t){return t}if(e.getFormElements().length===0||r(e)){if(i instanceof sap.ui.core.Element){return i.getDomRef()}if(typeof i==="string"){return n(t).find(".sapUiFormTitle").get(0)}}return undefined},actions:{move:function(e){if(a(e)){return{changeType:"moveControls"}}else{return null}},add:{delegate:function(e){if(a(e)){return{changeType:"addFormField",changeOnRelevantContainer:true}}}},addODataProperty:function(n){if(a(n)){var t=e.getAddODataFieldWithLabelSettings(n);if(t){return{changeType:"addFormField",changeOnRelevantContainer:true,changeHandlerSettings:t}}}else{return null}}}},toolbar:{domRef:function(e){var n=e.getToolbar();if(n){return n.getDomRef()}}}},name:{singular:"GROUP_CONTROL_NAME",plural:"GROUP_CONTROL_NAME_PLURAL"}}});