import List "mo:core/List";
import Time "mo:core/Time";
import Common "../types/common";
import GalleryTypes "../types/gallery";
import Storage "mo:caffeineai-object-storage/Storage";

module {
  public func getGalleryItems(items : List.List<GalleryTypes.GalleryItem>) : [GalleryTypes.GalleryItem] {
    items.filter(func(i) { i.isActive }).toArray();
  };

  public func addGalleryItem(
    items : List.List<GalleryTypes.GalleryItem>,
    counter : { var value : Nat },
    title : Text,
    mediaType : GalleryTypes.MediaType,
    blob : Storage.ExternalBlob,
    thumbnailBlob : ?Storage.ExternalBlob,
  ) : Common.Id {
    let id = counter.value;
    counter.value += 1;
    items.add({
      id;
      title;
      mediaType;
      blob;
      thumbnailBlob;
      uploadedAt = Time.now();
      isActive = true;
    });
    id;
  };

  public func deleteGalleryItem(items : List.List<GalleryTypes.GalleryItem>, id : Common.Id) {
    items.mapInPlace(func(i) {
      if (i.id == id) { { i with isActive = false } } else i
    });
  };
};
