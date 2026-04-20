import List "mo:core/List";
import Common "../types/common";
import ActivitiesTypes "../types/activities";

module {
  public func getActivities(activities : List.List<ActivitiesTypes.Activity>) : [ActivitiesTypes.Activity] {
    activities.toArray();
  };

  public func addActivity(
    activities : List.List<ActivitiesTypes.Activity>,
    counter : { var value : Nat },
    name : Text,
    description : Text,
    category : ActivitiesTypes.ActivityCategory,
  ) : Common.Id {
    let id = counter.value;
    counter.value += 1;
    activities.add({ id; name; description; category });
    id;
  };

  public func updateActivity(
    activities : List.List<ActivitiesTypes.Activity>,
    id : Common.Id,
    name : Text,
    description : Text,
    category : ActivitiesTypes.ActivityCategory,
  ) {
    activities.mapInPlace(func(a) {
      if (a.id == id) { { a with name; description; category } } else a
    });
  };

  public func deleteActivity(activities : List.List<ActivitiesTypes.Activity>, id : Common.Id) {
    let filtered = activities.filter(func(a) { a.id != id });
    activities.clear();
    activities.append(filtered);
  };

  public func getCamps(camps : List.List<ActivitiesTypes.Camp>) : [ActivitiesTypes.Camp] {
    camps.toArray();
  };

  public func addCamp(
    camps : List.List<ActivitiesTypes.Camp>,
    counter : { var value : Nat },
    name : Text,
    duration : Text,
    description : Text,
    campActivities : [Text],
  ) : Common.Id {
    let id = counter.value;
    counter.value += 1;
    camps.add({ id; name; duration; description; activities = campActivities });
    id;
  };

  public func updateCamp(
    camps : List.List<ActivitiesTypes.Camp>,
    id : Common.Id,
    name : Text,
    duration : Text,
    description : Text,
    campActivities : [Text],
  ) {
    camps.mapInPlace(func(c) {
      if (c.id == id) { { c with name; duration; description; activities = campActivities } } else c
    });
  };
};
