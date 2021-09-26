		var canvas = document.getElementById('seconds');
		var context = canvas.getContext('2d');
		var i = 0;
		
		setInterval(() => {time()}, 1000)
		
		function time(){
			i = i + 6;
			var X = 0, Y = 0;
			context.clearRect(0,0,100,100);
			X = Math.sin(i / (180/Math.PI))*35 + 50;
			Y = -Math.cos(i / (180/Math.PI))*35 + 50;
			drawLine(50, 50, X, Y);
			drawCircle(50, 50, 40);
		}

		function drawLine(Xd, Yd, Xf, Yf){
			var Dx,Dy,Dx2,Dy2,Dxy,S;
			var Xinc,Yinc,X,Y;
			var col, i;
			col = 5;
			if (Xd < Xf) Xinc = 1; else Xinc = -1;
			if (Yd < Yf) Yinc = 1; else Yinc = -1;
			Dx = Math.abs(Xd - Xf);
			Dy = Math.abs(Yd - Yf);
			Dx2 = Dx + Dx; Dy2 = Dy + Dy;
			X = Xd; Y = Yd;
				if (Dx > Dy){
				S = Dy2 - Dx;
				Dxy = Dy2 - Dx2;
				for (i=0; i < Dx; i++){
					if (S >= 0){
						Y = Y + Yinc;
						S = S + Dxy;
 					} else S = S + Dy2;
					X = X + Xinc;
					context.fillRect(X,Y,1,1);
				}
			}
            else{
                S = Dx2 - Dy;
                Dxy = Dx2 - Dy2;
                for (i=0; i < Dy; i++){
                    if ( S >= 0){
                        X = X + Xinc;
                        S = S + Dxy;
                    } else S = S + Dx2;
                    Y = Y + Yinc;
                    context.fillRect(X,Y,1,1);
                }
            }
        }
		
		function drawCircle(X0, Y0, R){
			var X = 0, Y = R;
			var delta = 3 - 2 * R;
            while (X <= Y) {
				drawpixels(X, Y, X0, Y0);
				if(delta <= 0) {
					delta = delta + 4*X + 6;
					X = X + 1;
				} else{
					delta =  delta + 4*X - 4*Y + 10;
					X = X + 1;
					Y = Y - 1;
				}
			}
        }
		
		function drawpixels(X, Y, X0, Y0){
			context.fillRect(X+X0,Y+Y0,1,1);
			context.fillRect(X+X0,-Y+Y0,1,1);
			context.fillRect(-X+X0,-Y+Y0,1,1);
			context.fillRect(-X+X0,Y+Y0,1,1);
			context.fillRect(Y+X0,X+Y0,1,1);
			context.fillRect(Y+X0,-X+Y0,1,1);
			context.fillRect(-Y+X0,-X+Y0,1,1);
			context.fillRect(-Y+X0,X+Y0,1,1);
		}
		