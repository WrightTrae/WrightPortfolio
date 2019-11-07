import { Component,OnInit } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
	title = 'WrightPortfolio';

	ngOnInit() {
		window.onscroll = function() {
			var currentScrollPos = window.pageYOffset;
			if (this.prevScrollpos > currentScrollPos) {
				document.getElementById("toolbar").style.top = "0";
			} else {
				document.getElementById("toolbar").style.top = "-50px";
			}
			this.prevScrollpos = currentScrollPos;
		}.bind(this);
	}
}
