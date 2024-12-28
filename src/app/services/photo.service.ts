import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, GalleryPhoto, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async takePhoto(): Promise<Photo> {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      allowEditing: true,
      quality: 100
    });

    return photo;
  }

  public async pickImage(): Promise<GalleryPhoto> {
    const photoGallery = await Camera.pickImages({
      limit: 1,
      quality: 100
    });

    return photoGallery.photos[0];
  }

}
