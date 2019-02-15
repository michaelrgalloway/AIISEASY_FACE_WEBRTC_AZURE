class Camera {
    
    mediaoptions = { audio: false,video: true};

    video: HTMLVideoElement;
    constructor(){}
    startVideo(video:HTMLVideoElement){
        this.video = video;
        navigator.mediaDevices.getUserMedia(this.mediaoptions)
        .then(( stream )=>{
            this.video.srcObject = stream;
        })
        .catch(( err )=>{console.log(err)});
    }
    stopVideo(){

    }
    snapPic(){

    }
}