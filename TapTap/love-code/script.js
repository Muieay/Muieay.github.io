var settings={particles:{length:500,duration:2,velocity:100,effect:-.6,size:28}};!function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,e){var n=(new Date).getTime(),o=Math.max(0,16-(n-t)),a=window.setTimeout((function(){i(n+o)}),o);return t=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var Point=function(){function t(t,i){this.x=void 0!==t?t:0,this.y=void 0!==i?i:0}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.length=function(t){return void 0===t?Math.sqrt(this.x*this.x+this.y*this.y):(this.normalize(),this.x*=t,this.y*=t,this)},t.prototype.normalize=function(){var t=this.length();return this.x/=t,this.y/=t,this},t}(),Particle=function(){function t(){this.position=new Point,this.velocity=new Point,this.acceleration=new Point,this.age=0}return t.prototype.initialize=function(t,i,e,n){this.position.x=t,this.position.y=i,this.velocity.x=e,this.velocity.y=n,this.acceleration.x=e*settings.particles.effect,this.acceleration.y=n*settings.particles.effect,this.age=0},t.prototype.update=function(t){this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.age+=t},t.prototype.draw=function(t,i){var e,n=i.width*(e=this.age/settings.particles.duration,--e*e*e+1);t.globalAlpha=1-this.age/settings.particles.duration,t.drawImage(i,this.position.x-n/2,this.position.y-n/2,n,n)},t}(),ParticlePool=function(){var t,e=0,n=0,o=settings.particles.duration;function a(i){t=new Array(i);for(var e=0;e<t.length;e++)t[e]=new Particle}return a.prototype.add=function(i,o,a,r){t[n].initialize(i,o,a,r),++n==t.length&&(n=0),e==n&&e++,e==t.length&&(e=0)},a.prototype.update=function(i){var a;if(e<n)for(a=e;a<n;a++)t[a].update(i);if(n<e){for(a=e;a<t.length;a++)t[a].update(i);for(a=0;a<n;a++)t[a].update(i)}for(;t[e].age>=o&&e!=n;)++e==t.length&&(e=0)},a.prototype.draw=function(o,a){if(e<n)for(i=e;i<n;i++)t[i].draw(o,a);if(n<e){for(i=e;i<t.length;i++)t[i].draw(o,a);for(i=0;i<n;i++)t[i].draw(o,a)}},a}();!function(t){var i,e=t.getContext("2d"),n=new ParticlePool(settings.particles.length),o=settings.particles.length/settings.particles.duration;function a(t){return new Point(160*Math.pow(Math.sin(t),3),130*Math.cos(t)-50*Math.cos(2*t)-20*Math.cos(3*t)-10*Math.cos(4*t)+25)}var r=function(){var t=document.createElement("canvas"),i=t.getContext("2d");function e(t){var i=a(t);return i.x=settings.particles.size/2+i.x*settings.particles.size/350,i.y=settings.particles.size/2-i.y*settings.particles.size/350,i}t.width=settings.particles.size,t.height=settings.particles.size,i.beginPath();var n=-Math.PI,o=e(n);for(i.moveTo(o.x,o.y);n<Math.PI;)o=e(n+=.01),i.lineTo(o.x,o.y);i.closePath(),i.fillStyle="#ffc0cb",i.fill();var r=new Image;return r.src=t.toDataURL(),r}();function s(){requestAnimationFrame(s);var c=(new Date).getTime()/1e3,h=c-(i||c);i=c,e.clearRect(0,0,t.width,t.height);for(var l=o*h,u=0;u<l;u++){var f=a(Math.PI-2*Math.PI*Math.random()),d=f.clone().length(settings.particles.velocity);n.add(t.width/2+f.x,t.height/2-f.y,d.x,-d.y)}n.update(h),n.draw(e,r)}function c(){t.width=t.clientWidth,t.height=t.clientHeight}window.onresize=c,setTimeout((function(){c(),s()}),10)}(document.getElementById("lovexf"));