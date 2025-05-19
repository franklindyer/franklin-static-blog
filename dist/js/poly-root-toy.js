(function(root) {

  "use strict";

  function makeCoeffPointOnDrag(controller) {
    return function() {
      controller.param = new Complex(controller.coeffPoints[0].X(), controller.coeffPoints[0].Y());

   controller.p = controller.g.mul(controller.param).sub(controller.f);
    console.log(controller.p);

      controller.updateRootsFromPoly();
      controller.updateRootView();

    };
  };

  /**
   * TODO Document this
   */
  function SylvesterMatrix(p1, p2) {
    var n1 = p1.degree(), n2 = p2.degree();
    var p1a = p1.coeffArray(), p2a = p2.coeffArray();

    var d = n1+n2;

    var s = new Array(d);

    for (var i=0; i<n2; i++) {
      s[i] = new Array(d);
      for (var j=0; j<i; j++)
        s[i][j] = 0;
      for (var j=i; j<i+n1+1; j++)
        s[i][j] = p1a[n1-j+i];
      for (var j=i+n1+1; j<d; j++)
        s[i][j] = 0;
    };

    for (var i=n2; i<d; i++) {
      s[i] = new Array(d);
      for (var j=0; j<i-n2; j++)
        s[i][j] = 0;
      for (var j=i-n2; j<i+1; j++)
        s[i][j] = p2a[i-j];
      for (var j=i+1; j<d; j++)
        s[i][j] = 0;
    };

    return s;
  }

  /**
   * TODO Document this
   * This constructs the Bezout matrix B( p(x), p'(x) ) while treating
   * the coefficient a_j as free, i.e. terms are polynomials in a_j
   */
  function Bezout_p_pprime_with_aj_free(p, j) {
    var n = p.degree();

    var pa = p.coeffArray();
    var ppa = p.derive(1).coeffArray();
    ppa[n] = 0.;

    for (var i=0; i<=n; i++) {
      pa[i] = Polynomial(pa[i]);
      ppa[i] = Polynomial(ppa[i]);
    }

    var px = Polynomial("x");
    var pjx = px.mul(Complex(j));

    pa[j] = px;
    if (j>0) { ppa[j-1] = pjx; };

    var b = new Array(n);

    for (var i=0; i<n; i++) {
      b[i] = new Array(n);

      for (var j=i; j<n; j++) {
        b[i][j] = Polynomial(0.);

        var maxk = Math.min(i,n-j-1);
        for (var k=0; k <= maxk; k++) {
          b[i][j] = b[i][j].add(  pa[j+k+1].mul( ppa[i-k] ));
          b[i][j] = b[i][j].sub( ppa[j+k+1].mul( pa[i-k] ) );
        };
      };
    };

    // Bezout matrix is symmetric, copy
    for (var i=0; i<n; i++) {
      for (var j=0; j<i; j++)
        b[i][j] = b[j][i];
    };

    return b;
  }

  /**
   * Return the (i,j) minor matrix
   */
  function MinorMatrix(mat, i, j) {
    var dim = mat.length;

    var rowRemoved = mat.slice(0,i).concat(mat.slice(i+1, dim));
    var colRemoved = rowRemoved.map( r =>
                                     r.slice(0,j).concat(r.slice(j+1, dim)));

    return colRemoved;
  };

  /**
   * TODO Document this.
   * Compute the determinant of some square matrix (array of arrays)
   * as a Polynomial() object.
   * Use minor expansion.
   * TODO: MINOR EXPANSION IS HELLA SLOW, USE GAUSSIAN ELIMINATION INSTEAD
   * Explicitly skip over terms that are 0.
   * This is an optimization because I'm only going to use this
   * function for computing the discriminant from the Sylvester matrix.
   */
  function PolyDeterminant(mat) {
    var dim = mat.length;

    // TODO: Hardcode more low dimensional cases
    if (dim == 1)
      return Polynomial(mat[0][0]);

    // Because of the structure of the Sylvester matrix, it's going
    // to be more efficient to perform the minor expansion down the
    // first column, where all but two entries are 0.
    var result = Polynomial(Complex(0.));
    for (var i=0; i<dim; i++) {
      if (mat[i][0] == 0)
        continue;

      var summand = Polynomial(mat[i][0]);
      summand = summand.mul( PolyDeterminant( MinorMatrix(mat, i, 0) ) );

      if (!(i%2)) {
        result = result.add(summand);
      } else {
        result = result.sub(summand);
      };
    };

    return result;
  };

  function PolyRootController(rootboxName, coeffboxName, f, g) {

    if (!(this instanceof PolyRootController)) {
      return new PolyRootController(rootboxName, coeffboxName, f, g);
    }

    // Only care about complex numbers
    Polynomial.setField("C");

    this.setupBoxes(rootboxName, coeffboxName);

    this.f = f;
    this.g = g;
    this.degree = Math.max(f.degree(), g.degree());
    this.teardownPoints();

            this.setupRandomRoots();

            this.setupPoints();
    makeCoeffPointOnDrag(this)();

            this.updateRootView();
            this.updateCoeffView();
  };

  PolyRootController.prototype = {
    'degree': 0,
    'degreeInput': {},
    'roots' : [],
    'coeffs': [],
    'p': {},
    'rootbox': {},
    'rootPoints': [],
    'coeffbox': {},
    'coeffPoints': [],

    'keepHist': false,
    'iterHist': {},

    'updateRootsFromPoly': function() {
      var result = this.p.add(Polynomial({'0':Complex(0.0000001,0)})).complexRoots(this.roots);
      // TODO Do some error checking here?!

      if (this.keepHist) {
        var iter = result.iter;

        if (this.iterHist.hasOwnProperty(iter)) {
          this.iterHist[iter] = this.iterHist[iter] + 1;
        } else {
          this.iterHist[iter] = 1;
        }

      }

      this.roots = result.root;
    },

    'updateRootView': function() {
      this.rootbox.suspendUpdate();
      for (var i=0; i<this.degree; i++) {
        this.rootPoints[i].setPosition(
          JXG.COORDS_BY_USER, [this.roots[i].re, this.roots[i].im]);
      }
      this.rootbox.unsuspendUpdate();
    },

    'updateCoeffView': function() {
      this.coeffbox.suspendUpdate();
        this.coeffPoints[0].setPosition(
          JXG.COORDS_BY_USER, [this.param.re, this.param.im]);
      this.coeffbox.unsuspendUpdate();
    },

    'setupBoxes': function(rootboxName, coeffboxName) {
      var baseOpts = {
        boundingbox: [-2, 2, 2, -2],
        keepaspectratio: true,
        axis: false,
        grid: true,
        pan: {enabled: false},
        showNavigation: true,
        showCopyright:  false};

      this.rootbox  = JXG.JSXGraph.initBoard(rootboxName, baseOpts);
      this.coeffbox = JXG.JSXGraph.initBoard(coeffboxName, baseOpts);

      this.rootbox.create('axis', [[0, 0], [1,0]],
        { name:'Re[z]',
			    withLabel: true,
          ticks: {minorTicks:1, majorHeight:10, minorHeight:4},
			    label: { position: 'rt',
					         offset: [-25, 20], }
			  });
      this.rootbox.create('axis', [[0, 0], [0,1]],
        { name:'Im[z]',
			    withLabel: true,
          ticks: {minorTicks:1, majorHeight:10, minorHeight:4},
			    label: { position: 'rt',
					         offset: [20, 0], }
			  });

      // This is a dumb hack to fix the label relative to the screen instead of axes.
      // Did I mention how much I hate JS's scoping?
      this.rootbox.create(
        'text',
        [(function (box) { return function(){ return box.getBoundingBox()[0];}; })(this.rootbox),
         (function (box) { return function(){ return box.getBoundingBox()[1];}; })(this.rootbox),
         'Roots'],
        {anchorX: 'left', anchorY: 'top',
         cssClass: 'myBoxTitle', highlightCssClass: 'myBoxTitle',
         fontSize: 14});

      this.coeffbox.create('axis', [[0, 0], [1,0]],
        { name:'Re[a<sub>i</sub>]',
			    withLabel: true,
          ticks: {minorTicks:1, majorHeight:10, minorHeight:4},
			    label: { position: 'rt',
					         offset: [-25, 20], }
			  });
      this.coeffbox.create('axis', [[0, 0], [0,1]],
        { name:'Im[a<sub>i</sub>]',
			    withLabel: true,
          ticks: {minorTicks:1, majorHeight:10, minorHeight:4},
			    label: { position: 'rt',
					         offset: [20, 0], }
			  });
      this.coeffbox.create(
        'text',
        [(function (box) { return function(){ return box.getBoundingBox()[0];}; })(this.coeffbox),
         (function (box) { return function(){ return box.getBoundingBox()[1];}; })(this.coeffbox),
         'Coefficients'],
        {anchorX: 'left', anchorY: 'top',
         cssClass: 'myBoxTitle', highlightCssClass: 'myBoxTitle',
         fontSize: 14});
    },

    'rotateParameter': function(eps) {
        this.param = new Complex(this.coeffPoints[0].X(), this.coeffPoints[0].Y());
        this.center = new Complex(this.coeffPoints[1].X(), this.coeffPoints[1].Y());
        var norm = this.param.sub(this.center).abs();
        if (norm < 0.01) return;
        this.param = this.param.add(this.param.sub(this.center).mul(eps).mul(Complex.I));
        var newnorm = this.param.sub(this.center).abs();
        this.param = this.center.add(this.param.sub(this.center).mul(norm/newnorm));
        this.coeffPoints[0].setPosition(
          JXG.COORDS_BY_USER, [this.param.re, this.param.im]);
    },

    'setupRandomRoots': function() {
      var eps = 0.1;
      var n = this.degree;

      this.roots = new Array(n);
      for (var j=0; j<n; j++) {
        this.roots[j] = Complex.I.mul(2.*Math.PI*j/n).exp();
      }
    },

    'setupPoints': function() {
      for (var i=0; i<this.degree; i++) {
        this.rootPoints[i] =
          this.rootbox.create('point', [0,0], {name: "z_"+i});
        this.rootPoints[i].setAttribute({fixed: true})
      }
        this.coeffPoints[0] = this.coeffbox.create('point', [0.5,0.5], {name: "f(z)"});
        this.coeffPoints[0].on('drag', makeCoeffPointOnDrag(this));
        this.coeffPoints[1] = this.coeffbox.create('point', [0,0], {name: "c"});
        var rotateLambda = () => {
            this.rotateParameter(0.01);
            this.updateCoeffView();
            makeCoeffPointOnDrag(this)();
            this.rotateTimeout = setTimeout(rotateLambda, 5);
        }
        this.coeffPoints[1].on('mousedown', rotateLambda);
        this.coeffPoints[1].on('mouseup', () => clearTimeout(this.rotateTimeout));
    },

    'teardownPoints': function() {
      for (var i=0; i<this.degree; i++) {
        this.rootbox.removeObject(this.rootPoints[i]);
        this.coeffbox.removeObject(this.coeffPoints[i]);
      };
      this.rootPoints = [];
      this.coeffPoints = [];
    },

    'startKeepingHist': function() {
      this.iterHist = {};
      this.keepHist = true;
    },

    'stopKeepingHist': function() {
      this.keepHist = false;
    }

  };

  PolyRootController.SylvesterMatrix = SylvesterMatrix;
  PolyRootController.Bezout_p_pprime_with_aj_free = Bezout_p_pprime_with_aj_free;
  PolyRootController.MinorMatrix = MinorMatrix;
  PolyRootController.PolyDeterminant = PolyDeterminant;

  root['PolyRootController'] = PolyRootController;

})(this);

