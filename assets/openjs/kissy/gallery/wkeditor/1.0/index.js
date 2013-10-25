KISSY.add(function(S,DOM, WKeditor) {

    function init(frameGroup) {

        function SafeWKeditor(options) {
            this.inner = new WKeditor(options);
        }
        SafeWKeditor.prototype.init = function() {
            return this.inner.init();
        }
        SafeWKeditor.prototype.tool = function() {
            return this.inner.tool;
        }

        SafeWKeditor.prototype.plug = function(obj,callback) {
            return this.inner.plug(obj,callback);
        }

        SafeWKeditor.prototype.addFont = function(obj,callback) {
             return this.inner.addFont(obj,frameGroup.tame(callback));
        }


        frameGroup.markCtor(SafeWKeditor);

        frameGroup.grantMethod(SafeWKeditor, 'init');
        frameGroup.grantMethod(SafeWKeditor, 'tool');
        frameGroup.grantMethod(SafeWKeditor, 'plug');
        frameGroup.grantMethod(SafeWKeditor, 'addFont');

        return function(context) {

            return {
                WKeditor: frameGroup.markFunction(function () {
                    var options = cajaAFTB.untame(arguments[0]);
                        options.ele = DOM.get(options.ele,context.mod);
                        options.message = cajaAFTB.sanitizeHtml(options.message);
                    return new SafeWKeditor(options);
                }),
                kissy: true
            }
        }

    }

    return init;

}, {
    requires: ['dom','gallery/WKeditor/1.0/index']
});