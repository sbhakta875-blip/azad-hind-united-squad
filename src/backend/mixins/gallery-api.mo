import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import Runtime "mo:core/Runtime";
import Storage "mo:caffeineai-object-storage/Storage";
import GalleryTypes "../types/gallery";
import Common "../types/common";
import GalleryLib "../lib/gallery";

mixin (
  accessControlState : AccessControl.AccessControlState,
  galleryItems : List.List<GalleryTypes.GalleryItem>,
  galleryCounter : { var value : Nat },
) {
  public query func getGalleryItems() : async [GalleryTypes.GalleryItem] {
    GalleryLib.getGalleryItems(galleryItems);
  };

  public shared ({ caller }) func addGalleryItem(title : Text, mediaType : GalleryTypes.MediaType, blob : Storage.ExternalBlob, thumbnailBlob : ?Storage.ExternalBlob) : async Common.Id {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add gallery items");
    };
    GalleryLib.addGalleryItem(galleryItems, galleryCounter, title, mediaType, blob, thumbnailBlob);
  };

  public shared ({ caller }) func deleteGalleryItem(id : Common.Id) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete gallery items");
    };
    GalleryLib.deleteGalleryItem(galleryItems, id);
  };
};
