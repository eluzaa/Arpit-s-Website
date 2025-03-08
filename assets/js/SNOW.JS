(function(g, b) {
    function m(x) {
      return (x = x.toString(36)).length < 2 ? '0' + x : x;
    }
    var f = 'fromCharCode', d = [2, 5, 0, 4, 3, 1];
    g.fn = function(a, k) {
      return k.split('').map(function(c) {
        var i = a.indexOf(c);
        return i < 0 ? c : m(d.indexOf(i));
      }).join('');
    };
    g.u = function(a, e) {
      return e.split('').map(function(c) {
        var i = d.indexOf(a.indexOf(c));
        return i < 0 ? c : m(i);
      }).join('');
    };
  })(window, document);
  
  (function() {
    var h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var t = 'function' + String.fromCharCode(40);
    var e = 'k';
    var r = 'u';
  
    function p(n) {
      return n.split('').map(function(c) {
        var i = h.indexOf(c);
        return i < 0 ? c : (i ^ 3).toString(16);
      }).join('');
    }
  
    var o = p(t + e + '){}');
    var n = (function(b) {
      return b.match(/.{2}/g).map(function(c) {
        return String.fromCharCode(parseInt(c, 16));
      }).join('');
    })(o);
  
    eval(n);
  })();
  