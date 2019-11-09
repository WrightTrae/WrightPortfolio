import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  animateChild,
  query
} from '@angular/animations';


@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss'],
animations:[
    trigger('isLoaded', [
      // ...
      state('loaded', style({
        height: '25px',
        opacity: 1
      })),
      state('notLoaded', style({
        height: '0px',
        opacity: 0
      })),
      transition('notLoaded => loaded', [
	  	group([
	    	query('@rightArrow', animateChild()),
	    	query('@leftArrow', animateChild()),
	    	animate('500ms')
	  	]),
	  ]),
    ]),
    trigger('rightArrow', [
      state('down', style({
      	transform: 'translate(5px, 0px) rotate(-45deg) '
      })),
      state('up', style({
      	transform: 'translate(-12px, 0px) rotate(45deg) '
      })),
      transition('* <=> *', [
        animate('250ms')
      ]),
    ]),
    trigger('leftArrow', [
      state('down', style({
        transform: 'translate(-5px, 0px) rotate(45deg)'
      })),
      state('up', style({
      	transform: 'translate(12px, 0px) rotate(-45deg) '
      })),
      transition('* <=> *', [
        animate('250ms')
      ]),
    ])
  ]
})
//

export class AppComponent implements OnInit, AfterViewInit {
	title = 'WrightPortfolio';
	isLoaded;
	arrowDirection;
	// @ViewChild('randomcanvas', { static: true }) 
	// randomcanvas: ElementRef<HTMLCanvasElement>;
	// private ctx: CanvasRenderingContext2D;


	ngOnInit() {
		// this.canvas = document.getElementById("random-canvas")
		window.onscroll = function() {
			var currentScrollPos = window.pageYOffset;
			if(currentScrollPos < 100){
				this.arrowDirection = "down"; 
			}else{
				this.arrowDirection = "up";
			}
			// if(currentScrollPos < 25){
			document.getElementById("toolbar").style.top = "0";
			this.prevScrollpos = currentScrollPos;
		}.bind(this);
	}

	ngAfterViewInit(){
  		setTimeout(()=>{ this.isLoaded = true;
  		this.arrowDirection = "down" }, 250);
		// var op = {x: 0, y: 0};
		// var i = 0;
		// var flip = false;
		// while(i<100){
		// 	i++;
		// 	flip = !flip;
		// 	op = this.drawRandomLine(op, flip);
		// }
	}

	// drawRandomLine(op, flip): number{

	//   	this.ctx = this.randomcanvas.nativeElement.getContext('2d');
	//   	this.ctx.beginPath();
	//   	this.ctx.moveTo(op.x, op.y);
	//   	if(flip){
	//   		op.x += this.getRandomInt(this.getRandomInt(3)) * -1;
	// 		op.y += this.getRandomInt(this.getRandomInt(3)) * -1;
	//   	}else {
	//   		op.x += this.getRandomInt(this.getRandomInt(10))
	// 		op.y += this.getRandomInt(this.getRandomInt(10))
	// 	}
	//   	this.ctx.lineTo(op.x, op.y);
 //      	this.ctx.strokeStyle = '#ffffff';
	//   	this.ctx.stroke();

	//   	return op;
	// }

	// getRandomInt(max) {
 //  		return Math.floor(Math.random() * Math.floor(max));
	// }
}