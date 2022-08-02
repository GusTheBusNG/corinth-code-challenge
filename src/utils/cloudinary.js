import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
  }
}); 

export const imageUrl = name => cld.image(`LifeWay-star-wars/${name}`).format('auto').toURL();
