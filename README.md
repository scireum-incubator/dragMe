dragMe.js is a small jQuery plugin with similiar uses as .draggable() from jQuery UI

Usage:

```
$('#dragster').dragMe();
```

If you want the dragging to be restricted to a container use this syntax:


```
$('#dragster').dragMe({container: '#container'});
```
OR
```
$('#dragster').dragMe({container: $('#container')});
```
etc...

If you want to only be only to drag on a part of the div use this syntax:

```
$('#dragster').dragMe({touchTarget: '#dragster-header'});
```