/*
 * Made with all the love in the world
 * by scireum in Remshalden, Germany
 *
 * Copyright by scireum GmbH
 * http://www.scireum.de - info@scireum.de
 */

(function ($) {
    $.fn.dragMe = function (options) {
        if (typeof options === 'undefined') {
            options = {};
        }
        var _div = this;
        var _touchTarget = $(options.touchTarget) || _div;
        var _container = $(options.container || 'body');
        var _window = $(window);
        _touchTarget.off('mousedown.dragMe').on('mousedown.dragMe', function (e) {
            if (e.which !== 1) {
                return;
            }

            _touchTarget.css({ cursor: 'move' });

            var offset = $(this).offset();
            //mouse position relative to div
            var x = e.pageX - offset.left;
            var y = e.pageY - offset.top;
            _window.on('mousemove.dragMe', function (event) {
                if (options.restrictToWindow) {
                    var maxTop = _window.scrollTop();
                    var maxBottom = _window.scrollTop() + _window.innerHeight() - _div.outerHeight();
                    var maxLeft = _window.scrollLeft();
                    var maxRight = _window.scrollLeft() + _window.innerWidth() - _div.outerWidth();
                    var mouseY = event.clientY - y + _window.scrollTop();
                    var mouseX = event.clientX - x + _window.scrollLeft();
                } else {
                    var containerOffset = _container.offset();
                    var maxTop = containerOffset.top;
                    var maxBottom = containerOffset.top + _container.outerHeight() - _div.outerHeight();
                    var maxLeft = containerOffset.left;
                    var maxRight = containerOffset.left + _container.outerWidth() - _div.outerWidth();
                    var mouseY = event.clientY - y + _container.scrollTop();
                    var mouseX = event.clientX - x + _container.scrollLeft();
                }
                
                var top = Math.min(Math.max(maxTop, mouseY), maxBottom);
                var left = Math.min(Math.max(maxLeft, mouseX), maxRight);
                _div.css({
                    position: 'absolute',
                    margin: '',
                    top: top + 'px',
                    left: left + 'px'
                });
            });
        });
        _window.on('mouseup.dragMe', function (e) {
            if (e.which === 1) {
                _window.off('mousemove.dragMe');

                _touchTarget.css({ cursor: '' });
            }
        });
    }
}(jQuery));