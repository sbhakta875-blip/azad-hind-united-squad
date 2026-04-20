import Common "common";

module {
  public type ActivityCategory = {
    #training;
    #event;
  };

  public type Activity = {
    id : Common.Id;
    name : Text;
    description : Text;
    category : ActivityCategory;
  };

  public type Camp = {
    id : Common.Id;
    name : Text;
    duration : Text;
    description : Text;
    activities : [Text];
  };
};
