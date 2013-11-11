/**
 * canvas test case
 * @author yiminghe@gmail.com
 */
if (document.createElement('canvas') && document.createElement('canvas').getContext) {
    describe('css test', function () {
        describe('support css2', function () {
            it('can draw', function () {
                var canvas = document.createElement('canvas');
                document.body.appendChild(canvas);
                canvas.width = 10;
                canvas.height = 10;
                var ctx=canvas.getContext('2d');
                ctx.beginPath();
                ctx.moveTo(2,2);
                ctx.lineTo(7,7);
                ctx.stroke();
                ctx.closePath();
                var data=ctx.getImageData(0,0,10,10).data;
                expect(data.length).toBe(400);
            });
        });
    });
}
