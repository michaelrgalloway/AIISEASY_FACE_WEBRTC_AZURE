
class Process {

    key = `<your API key here>`;
    url = `https://westus.api.cognitive.microsoft.com/face/v1.0/detect`;
    apiParams = {   returnFaceId: true,
                    returnFaceLandmarks: false,
                    returnFaceAttributes:`age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise`
                };

    constructor(){}

    async processImage(url:string) {

        let res = await fetch(url);
        let blobData = await res.blob();
        let params  = Object.keys(this.apiParams).map(key => key + '=' +this.apiParams[key]).join('&');

        let rawResponse = await fetch(`${this.url}?${params}`, { 
            method: 'POST',
            headers: {
                'Ocp-Apim-Subscription-Key': this.key,
                'Content-Type': 'application/octet-stream'
            },
            body: blobData
        });

        let content = await rawResponse.json();   
        console.log(content);
       
    }

}