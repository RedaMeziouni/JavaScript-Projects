window.addEventListener('load', function() {
    //console.log("test");
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const small = document.getElementById('moth');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // class that maintain the audio bars
    class Bar {
        constructor(x, y, width, height, color, index) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
            this.index = index;
        }
        update(micInput) {
            this.height = micInput;
        }
        draw(context, volume) {
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    const bar1 = new Bar(200, 200, 100, 300, '#ff33f7', 1);
    
    // Animation function
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bar1.draw(ctx, 1);
        requestAnimationFrame(animate);
    };
    animate();
});