import Storage "mo:caffeineai-object-storage/Storage";

module {
  public type OrgInfo = {
    name : Text;
    tagline : Text;
    department : Text;
    registrationNo : Text;
    affiliationNo : Text;
    address : Text;
    phone : Text;
    email : Text;
    mission : [Text];
    logoBlob : ?Storage.ExternalBlob;
  };
};
