/**
 * Alert - is a replacement of alert() with your own styles.
 * 
 * @obj - HTML element with attributes data-* or javascript object.
 * 
 * if use HTML element you should use:
 * <div data-alert-title="title" data-alert-content="content" onclick="new Alert(this)"></div>;
 * 
 * if use javascript object you should use:
 * new Alert({alertTitleText : 'title',alertContentText : 'content'});
 *
 * data-alert-title - is a title
 * data-alert-content - is content
 * data-alert-after-function - is a function after click on close button
 * data-alert-button - is the existence of buttons
 * data-alert-ok-name - is OK-button name
 * data-alert-ok-function - is function after click on OK-button
 * data-alert-cancel - is the existence of cancel-button
 * data-alert-cancel-name - is cancel-button name
 * data-alert-cancel-function - is function after click on cancel-button
 * data-alert-type - is content type: either simple or error or warning (''|error|warning)
 *
 * Using javascript object new Alert({...}) you should use the same name, in camelCase only.
 *
 * If you use brouser IE10- add script classList from https://cdn.jsdelivr.net/classlist/2014.01.31/classList.min.js
 *
 * Pressing the Enter key is identical to OK button clicking.
 * Pressing the Escape key is identical to CANCEL button clicking.
 *
 * http://mountain-programmer.ru/
 */
"use strict"
function Alert(obj) {

    if ( !!obj.tagName ) { 
        this.alertTitleText = obj.getAttribute('data-alert-title') || '';
        this.alertContentText = obj.getAttribute('data-alert-content') || '';
        this.alertAfterFunction = obj.getAttribute('data-alert-after-function') || '';
        this.alertButton = obj.getAttribute('data-alert-button') || 'yes';
        this.alertOkName = obj.getAttribute('data-alert-ok-name') || 'OK';
        this.alertOkFunction = obj.getAttribute('data-alert-ok-function') || '';
        this.alertCancel = obj.getAttribute('data-alert-cancel') || 'no';
        this.alertCancelName = obj.getAttribute('data-alert-cancel-name') || 'Cancel';
        this.alertCancelFunction = obj.getAttribute('data-alert-cancel-function') || '';
        this.alertType = obj.getAttribute('data-alert-type') || '';
        this.showAlert();
    } else {
        this.alertTitleText = obj.alertTitleText || '';
        this.alertContentText = obj.alertContentText || '';
        this.alertAfterFunction = obj.alertAfterFunction || '';
        this.alertButton = obj.alertButton || 'yes';
        this.alertOkName = obj.alertOkName || 'OK';
        this.alertOkFunction = obj.alertOkFunction || '';
        this.alertCancel = obj.alertCancel || 'no';
        this.alertCancelName = obj.alertCancelName || 'Cancel';
        this.alertCancelFunction = obj.alertCancelFunction || '';
        this.alertType = obj.alertType || '';
        this.showAlert();
    }

}
Alert.prototype.createAlert = function(){console.log();
    
    this.idNum = new Date().getMilliseconds();

    var self = this;
    
    this.alertOverlay = document.createElement('div');
    this.alertOverlay.setAttribute('class','alertOverlay');
    this.alertOverlay.setAttribute('id','alertOverlayId' + this.idNum);

    this.alertBlock = document.createElement('div');
    this.alertBlock.setAttribute('class','alertBlock');
    this.alertBlock.setAttribute('id','alertBlockId' + this.idNum);

    this.alertTitle = document.createElement('div');
    this.alertTitle.setAttribute('class','alertTitle');
    this.alertTitle.innerHTML = this.alertTitleText;
    this.alertBlock.appendChild(this.alertTitle);

    this.alertContent = document.createElement('div');
    this.alertContent.innerHTML = this.alertContentText;
    this.alertBlock.appendChild(this.alertContent);

    if ( this.alertType != '' ) {
        this.alertContent.setAttribute('class','alertContent alertContentType');
        
        this.alertTypeBlock = document.createElement('div');
        this.alertTypeBlock.setAttribute('class','alertType alert_'+this.alertType);
        this.alertContent.appendChild(this.alertTypeBlock);
    } else {
        this.alertContent.setAttribute('class','alertContent');
    }

    this.alertClose = document.createElement('div');
    this.alertClose.setAttribute('class','alertClose alertCloseButton');
    this.alertClose.setAttribute('id','alertCloseId' + this.idNum);
    this.alertClose.addEventListener('click',function() {
        self.hideAlert(self.alertAfterFunction);
    });
    this.alertBlock.appendChild(this.alertClose);


    if ( this.alertButton === 'yes' ) {
        this.alertButtons = document.createElement('div');
        this.alertButtons.setAttribute('class','alertButtons');
        this.alertBlock.appendChild(this.alertButtons);

        this.alertOkButton = document.createElement('div');
        this.alertOkButton.setAttribute('class','button alertOk');
        this.alertOkButton.setAttribute('id','alertOkId' + this.idNum);
        this.alertOkButton.innerHTML = this.alertOkName;
        
        this.alertOkButton.addEventListener('click',function() {
            self.hideAlert(self.alertOkFunction);
        });

        this.alertButtons.appendChild(this.alertOkButton);

        if ( this.alertCancel !== 'no' ) {
            this.alertCancelButton = document.createElement('div');
            this.alertCancelButton.setAttribute('class','button alertCansel');
            this.alertCancelButton.setAttribute('id','alertCloseId' + this.idNum);
            this.alertCancelButton.innerHTML = this.alertCancelName;
            this.alertCancelButton.addEventListener('click',function() {
                self.hideAlert(self.alertCancelFunction);
            });
            this.alertButtons.appendChild(this.alertCancelButton);
        }
    }


    document.body.appendChild(this.alertOverlay);
    document.body.appendChild(this.alertBlock);

    // press Enter key or Escape key
    this.enterKey(this);

};
Alert.prototype.showAlert = function(){
    
    this.createAlert();

    // show
    this.alertOverlay.classList.add("showAlert");
    this.alertBlock.classList.add("showAlert");


};
Alert.prototype.hideAlert = function(func){

    // hide
    this.alertOverlay.classList.remove("showAlert");
    this.alertBlock.classList.remove("showAlert");

    // remove
    this.alertOverlay.parentNode.removeChild(this.alertOverlay);
    this.alertBlock.parentNode.removeChild(this.alertBlock);

    // function after click
    (new Function('', func)());

};

Alert.prototype.enterKey = function(self){
    document.addEventListener('keydown',function(e) {
        var el = document.getElementById(self.alertBlock.getAttribute('id'));
        if (!!el) {
            if ( e.keyCode === 13 )  self.hideAlert(self.alertOkFunction);
            if ( e.keyCode === 27 )  self.hideAlert(self.alertAfterFunction);
        };
    });
};