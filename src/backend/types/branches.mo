import Common "common";

module {
  public type Branch = {
    id : Common.Id;
    name : Text;
    address : Text;
    contactPerson : Text;
    phone : Text;
    isHQ : Bool;
  };
};
