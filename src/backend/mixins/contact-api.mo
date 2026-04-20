import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import Runtime "mo:core/Runtime";
import ContactTypes "../types/contact";
import Common "../types/common";
import ContactLib "../lib/contact";

mixin (
  accessControlState : AccessControl.AccessControlState,
  contactSubmissions : List.List<ContactTypes.ContactSubmission>,
  contactCounter : { var value : Nat },
) {
  public shared func submitContact(name : Text, email : Text, message : Text) : async Common.Id {
    ContactLib.submitContact(contactSubmissions, contactCounter, name, email, message);
  };

  public shared ({ caller }) func getContactSubmissions() : async [ContactTypes.ContactSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view contact submissions");
    };
    ContactLib.getSubmissions(contactSubmissions);
  };

  public shared ({ caller }) func markContactRead(id : Common.Id) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can mark contacts read");
    };
    ContactLib.markRead(contactSubmissions, id);
  };
};
