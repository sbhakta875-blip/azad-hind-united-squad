import Common "common";

module {
  public type ContactSubmission = {
    id : Common.Id;
    name : Text;
    email : Text;
    message : Text;
    submittedAt : Common.Timestamp;
    isRead : Bool;
  };
};
