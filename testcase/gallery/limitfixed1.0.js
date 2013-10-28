var S = KISSY;

new S.LimitFixed('.caption', '.floor', {
    holder: true
});


new S.LimitFixed('.caption', '.slide', {
    align: ['left', 'top'],
    holderCls: "lf-holder",
    holder: true
});

new S.LimitFixed('#totop', {
    align: ['bottom right']
});