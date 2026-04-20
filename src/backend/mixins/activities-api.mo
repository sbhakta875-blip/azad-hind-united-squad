import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import Runtime "mo:core/Runtime";
import ActivitiesTypes "../types/activities";
import Common "../types/common";
import ActivitiesLib "../lib/activities";

mixin (
  accessControlState : AccessControl.AccessControlState,
  activities : List.List<ActivitiesTypes.Activity>,
  activityCounter : { var value : Nat },
  camps : List.List<ActivitiesTypes.Camp>,
  campCounter : { var value : Nat },
) {
  public query func getActivities() : async [ActivitiesTypes.Activity] {
    ActivitiesLib.getActivities(activities);
  };

  public shared ({ caller }) func addActivity(name : Text, description : Text, category : ActivitiesTypes.ActivityCategory) : async Common.Id {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add activities");
    };
    ActivitiesLib.addActivity(activities, activityCounter, name, description, category);
  };

  public shared ({ caller }) func updateActivity(id : Common.Id, name : Text, description : Text, category : ActivitiesTypes.ActivityCategory) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update activities");
    };
    ActivitiesLib.updateActivity(activities, id, name, description, category);
  };

  public shared ({ caller }) func deleteActivity(id : Common.Id) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete activities");
    };
    ActivitiesLib.deleteActivity(activities, id);
  };

  public query func getCamps() : async [ActivitiesTypes.Camp] {
    ActivitiesLib.getCamps(camps);
  };

  public shared ({ caller }) func addCamp(name : Text, duration : Text, description : Text, campActivities : [Text]) : async Common.Id {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add camps");
    };
    ActivitiesLib.addCamp(camps, campCounter, name, duration, description, campActivities);
  };

  public shared ({ caller }) func updateCamp(id : Common.Id, name : Text, duration : Text, description : Text, campActivities : [Text]) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update camps");
    };
    ActivitiesLib.updateCamp(camps, id, name, duration, description, campActivities);
  };
};
