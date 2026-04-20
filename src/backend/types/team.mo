import Common "common";
import Storage "mo:caffeineai-object-storage/Storage";

module {
  public type TeamRole = {
    #leadership;
    #trainer;
    #senior;
  };

  public type TeamMember = {
    id : Common.Id;
    name : Text;
    title : Text;
    role : TeamRole;
    photoBlob : ?Storage.ExternalBlob;
    order : Nat;
  };
};
