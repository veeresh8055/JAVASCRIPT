import ImageKit from "@imagekit/nodejs";

const imagekit = new ImageKit({
    publicKey :process.env.PUBLIC_KEY_IMAGEKIT,
    privateKey:process.env.PRIVATE_KEY_IMAGEKIT,
    urlEndpoint:process.env.URL_ENCODED_IMAGEKIT
})

async function uploadFile(file , filename){

    const response = await imagekit.upload({
        file:file, //required
       fileName : fileName,
       folder : "AI_CAPTION_GENERATOR"
    })
  return response ; 
}

export default uploadFile;
