Alert - is a replacement of alert() with your own styles.<br>
<br>
@obj - HTML element with attributes data-* or javascript object.<br>
<br>
if use HTML element you should use:
<br>
&lt;div data-alert-title="title" data-alert-content="content" onclick="new Alert(this)"&gt;&lt;/div&gt;;
<br><br>
if use javascript object you should use:
<br>
new Alert({alertTitleText : 'title',alertContentText : 'content'});

data-alert-title - is a title<br>
data-alert-content - is content<br>
data-alert-after-function - is a function after click on close button<br>
data-alert-button - is the existence of buttons<br>
data-alert-ok-name - is OK-button name<br>
data-alert-ok-function - is function after click on OK-button<br>
data-alert-cancel - is the existence of cancel-button<br>
data-alert-cancel-name - is cancel-button name<br>
data-alert-cancel-function - is function after click on cancel-button<br>
data-alert-type - is content type: either simple or error or warning (''|error|warning)<br>
<br>
Using javascript object new Alert({...}) you should use the same name, in camelCase only.<br>
<br>
If you use brouser IE10- add script classList from https://cdn.jsdelivr.net/classlist/2014.01.31/classList.min.js<br>
<br>
Pressing the Enter key is identical to OK button clicking.<br>
Pressing the Escape key is identical to CANCEL button clicking.<br><br>
http://mountain-programmer.ru/