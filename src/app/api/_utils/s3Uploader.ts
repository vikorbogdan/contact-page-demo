import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

if (!process.env.AWS_S3_REGION) {
  throw new Error("AWS_S3_REGION is not defined");
}

if (!process.env.AWS_S3_ACCESS_KEY_ID) {
  throw new Error("AWS_S3_ACCESS_KEY_ID is not defined");
}

if (!process.env.AWS_S3_SECRET_ACCESS_KEY) {
  throw new Error("AWS_S3_SECRET_ACCESS_KEY is not defined");
}

if (!process.env.AWS_S3_BUCKET_NAME) {
  throw new Error("AWS_S3_BUCKET_NAME is not defined");
}

const s3client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  },
});

export const uploadFileToS3 = async (
  fileBuffer: Buffer,
  fileName: string,
  fileType: string,
): Promise<string> => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `profilePictures/${Date.now()}-${fileName}`,
    Body: fileBuffer,
    ContentType: fileType,
  };

  const command = new PutObjectCommand(params);
  await s3client.send(command);

  return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${params.Key}`;
};
