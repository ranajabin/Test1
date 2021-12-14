sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sap.btp.project4.controller.View1", {
			onInit: function () {

			},
            onEnter: function() {

var screenValue = parseInt(this.getView().byId("inp1").getValue());
var screenValue2 = parseInt(this.getView().byId("inp2").getValue());

var sum = screenValue + screenValue2;


alert(sum);


            }
		});
	});
