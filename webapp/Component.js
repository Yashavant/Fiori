sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"BARCODE/BARCODE/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("BARCODE.BARCODE.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// Added code for Intgration for Chat Bot
			if (!document.getElementById("cai-webchat")) {
				var s = document.createElement("script");
				s.setAttribute("id", "cai-webchat");
				s.setAttribute("src", "https://cdn.cai.tools.sap/webchat/webchat.js");
				if (document.body != null) {
					document.body.appendChild(s);
				}
				s.setAttribute("channelId", "1d6856c8-0499-43f3-829a-817468bb035f");
				s.setAttribute("token", "f14827fcdb35f0eaeb7fc80a7d2ecd0b");
			}
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});