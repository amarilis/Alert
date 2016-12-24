Alert - is a replacement of alert() with your own styles.

@obj - HTML element with attributes data-* or javascript object.

if use HTML element you should use:
<div data-alert-title="title" data-alert-content="content" onclick="new Alert(this)"></div>;

if use javascript object you should use:
new Alert({alertTitleText : 'title',alertContentText : 'content'});

data-alert-title - is a title
data-alert-content - is content
data-alert-after-function - is a function after click on close button
data-alert-button - is the existence of buttons
data-alert-ok-name - is OK-button name
data-alert-ok-function - is function after click on OK-button
data-alert-cancel - is the existence of cancel-button
data-alert-cancel-name - is cancel-button name
data-alert-cancel-function - is function after click on cancel-button
data-alert-type - is content type: either simple or error or warning (''|error|warning)

Using javascript object new Alert({...}) you should use the same name, in camelCase only.

If you use brouser IE10- add script classList from https://cdn.jsdelivr.net/classlist/2014.01.31/classList.min.js
