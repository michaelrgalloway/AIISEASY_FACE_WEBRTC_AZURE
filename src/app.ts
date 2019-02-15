class App {

    //dom element references
    btnStart:Element;
    btnSnap:Element;
    btnProcess:Element;
    video:HTMLVideoElement;
    canvas:HTMLCanvasElement;

    //external util references
    camera:Camera;
    processor:Process;

    constructor(){
        //init utils
        this.camera = new Camera();
        this.processor = new Process();
        // setup references and event listeners
        this.btnStart = document.querySelector("#btnStartVideo");
        this.btnStart.addEventListener("click", (e:Event) => { this.btnStartClicked(e);});

        this.btnSnap = document.querySelector("#btnSnap");
        this.btnSnap.addEventListener("click", (e:Event) => { this.btnSnapClicked(e);});

        this.btnProcess = document.querySelector("#btnProcess");
        this.btnProcess.addEventListener("click", (e:Event) => { this.btnProcessClicked(e);});

        this.video = document.querySelector("video"); 
        this.canvas = document.querySelector("canvas");  
    }

    btnStartClicked(e:Event) {
        this.camera.startVideo(this.video);
        console.log("clicked!");

    }

    btnSnapClicked(e:Event) {
        this.canvas.getContext('2d').drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
    }

    async btnProcessClicked(e:Event){
        await this.processor.processImage(this.canvas.toDataURL("image/jpeg"));
    }

}

new App();