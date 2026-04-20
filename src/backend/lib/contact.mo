import List "mo:core/List";
import Time "mo:core/Time";
import Common "../types/common";
import ContactTypes "../types/contact";

module {
  public func submitContact(
    submissions : List.List<ContactTypes.ContactSubmission>,
    counter : { var value : Nat },
    name : Text,
    email : Text,
    message : Text,
  ) : Common.Id {
    let id = counter.value;
    counter.value += 1;
    submissions.add({
      id;
      name;
      email;
      message;
      submittedAt = Time.now();
      isRead = false;
    });
    id;
  };

  public func getSubmissions(submissions : List.List<ContactTypes.ContactSubmission>) : [ContactTypes.ContactSubmission] {
    submissions.toArray();
  };

  public func markRead(submissions : List.List<ContactTypes.ContactSubmission>, id : Common.Id) {
    submissions.mapInPlace(func(s) {
      if (s.id == id) { { s with isRead = true } } else s
    });
  };
};
