KISSY.add(function(S, WKeditor) {

    function init(frameGroup) {

        function SafeWKeditor(options) {
            this.inner = new WKeditor({
                ele: cajaAFTB.tameNode(options.ele),
                message:cajaAFTB.sanitizeHtml(options.message),
                font:options.font
            });
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
             return this.inner.addFont(obj,callback);
        }


        frameGroup.markCtor(SafeWKeditor);

        frameGroup.grantMethod(SafeWKeditor, 'init');
        frameGroup.grantMethod(SafeWKeditor, 'tool');
        frameGroup.grantMethod(SafeWKeditor, 'plug');
        frameGroup.grantMethod(SafeWKeditor, 'addFont');

        return function(context) {

            return {
                WKeditor: SafeWKeditor,
                kissy: true
            }
        }

    }

    return init;

}, {
    requires: ['gallery/WKeditor/1.0/']
});