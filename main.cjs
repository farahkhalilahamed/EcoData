import dotenv from 'dotenv';
import { PinataSDK } from "pinata";

dotenv.config();

const pinataJwt = process.env.PINATA_JWT;

const pinata = new PinataSDK({
  pinataJwt: process.env."eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0ZDg5YzVmOC1lMWM5LTQzMjAtYWUzYi03ZjFiMWQ2MjZiZWUiLCJlbWFpbCI6Im1hbmhhLmthbjI5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJlNmU1MjBjY2QwODQzNzY5MjAwOSIsInNjb3BlZEtleVNlY3JldCI6IjljOTk4NGJjMGQ5Y2UyNTJmOTkxY2Y5ZTAwYmI2YmRhYWZkNjQ1NWRlNDNhYjFjMWI0MGFiY2Y2YmE3MWY2MjkiLCJleHAiOjE3NjMzMzAxNDR9.W59xkKR5Ur9DZrJKpWL2pERYZBUi3SsiON96RZ7wqtY"!,
  pinataGateway: "amethyst-neat-landfowl-394.mypinata.cloud",
});

async function main() {
  try {
    const file = new File(["hello"], "Testing.txt", { type: "text/plain" });
    const upload = await pinata.upload.file(file);
    console.log(upload);
  } catch (error) {
    console.log(error);
  }
}

await main();
