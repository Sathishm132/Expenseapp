const {S3Client,PutObjectCommand}=require("@aws-sdk/client-s3")
 require('dotenv').config()
const uploadtos3=async (data,filenme)=>{
    const s3clieint= await new S3Client({
         credentials: {
             accessKeyId:process.env.ACESSKEYID,
             secretAccessKey:process.env.SECRETEKEY,
         },
         region:"us-east-1"
     })
     const upload= await new PutObjectCommand({
         
         Bucket:"sathish456",
         Key: filenme,
         Body: data,
         ACL: 'public-read',
     },)
    const url= await s3clieint.send(upload)
    console.log(url)
    return url
     
     
     }
     module.exports={uploadtos3}
    
