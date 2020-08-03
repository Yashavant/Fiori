jQuery.sap.require("sap.ndc.BarcodeScanner");
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("BARCODE.BARCODE.controller.Main", {
		onInit: function () {

		},
		OnPress: function () {
			sap.ndc.BarcodeScanner.scan(
				function (mResult) {
					alert("We got a Bar code\n" +
						"Result:" + mResult.text + "\n"+
						"Format:" + mResult.format + "\n" +
						"Cancelled:" + mResult.cancelled);
				},
				function (Error) {
					alert("Scanning failed:" + Error);
				},
			);
		}
	});
});