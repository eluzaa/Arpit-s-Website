(function(s, h) {
    function r(e) {
        return e.split('').reverse().join('');
    }
    var q = String.fromCharCode,
        t = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',
        n = 0;
    while (n < 100) {
        n++;
        s[++n] = s[n - 1] + 1;
    }
    s.fn = function(a, k) {
        return k.split('').map(function(c) {
            var i = a.indexOf(c);
            return i < 0 ? c : q(s[i]);
        }).join('');
    };
    s.u = function(a, e) {
        return e.split('').map(function(c) {
            var i = a.indexOf(c);
            return i < 0 ? c : q(s.indexOf(i));
        }).join('');
    };
})(window, document);

(function() {
    var m = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b = 'aHR0cHM6Ly93d3cuZXhhbXBsZS5jb20=';

    function d(b) {
        var o = '';
        for (var i = 0; i < b.length; i++) {
            var c = b.charCodeAt(i);
            o += String.fromCharCode((c >> 3) | (c << 5) & 255);
        }
        return o;
    }

    var l = d(atob(b));
    var s = (function(z) {
        var f = '',
            i = 0;
        while (i < z.length) {
            f += String.fromCharCode(z.charCodeAt(i) ^ m.charCodeAt(i % m.length));
            i++;
        }
        return f;
    })(l);

    console.log(s);
})();
