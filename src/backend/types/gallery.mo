import Common "common";
import Storage "mo:caffeineai-object-storage/Storage";

module {
  public type MediaType = {
    #photo;
    #video;
  };

  public type GalleryItem = {
    id : Common.Id;
    title : Text;
    mediaType : MediaType;
    blob : Storage.ExternalBlob;
    thumbnailBlob : ?Storage.ExternalBlob;
    uploadedAt : Common.Timestamp;
    isActive : Bool;
  };
};
