/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/util/extend"],function(t,e){"use strict";return{_routeMatched:function(i,a,r){var o=this._oRouter,s,n,h,f,g,c=null,u=null,_,l,d,p,C;o._oMatchedRoute=this;o._bMatchingProcessStarted=true;if(this._oParent){s=this._oParent._routeMatched(i)}else if(this._oNestingParent){this._oNestingParent._routeMatched(i,false,this)}f=e({},o._oConfig,this._oConfig);_=Object.assign({},i);_.routeConfig=f;g={name:f.name,arguments:i,config:f};if(r){g.nestedRoute=r}this.fireBeforeMatched(g);o.fireBeforeRouteMatched(g);if(this._oTarget){h=this._oTarget;h._updateOptions(this._convertToTargetOptions(f));if(h._isValid(s,false)){n=h._place(s)}n=n||{};c=n.oTargetParent;u=n.oTargetControl;g.view=c;g.targetControl=u}else{d=[];p=[];l=function(t){d.push(t.getParameter("view"));p.push(t.getParameter("control"))};if(Array.isArray(this._oConfig.target)){C=this._oConfig.target}else{C=[this._oConfig.target]}C.forEach(function(t){var e=o._oTargets.getTarget(t);if(e){e.attachEventOnce("display",l)}});o._oTargets._display(this._oConfig.target,_,this._oConfig.titleTarget);g.view=d[0];g.targetControl=p[0];g.views=d;g.targetControls=p}o._bMatchingProcessStarted=false;if(f.callback){f.callback(this,i,f,u,c)}this.fireEvent("matched",g);o.fireRouteMatched(g);if(a){t.info("The route named '"+f.name+"' did match with its pattern",this);this.fireEvent("patternMatched",g);o.fireRoutePatternMatched(g)}return n}}});