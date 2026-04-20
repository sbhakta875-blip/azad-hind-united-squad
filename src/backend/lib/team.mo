import List "mo:core/List";
import Common "../types/common";
import TeamTypes "../types/team";
import Storage "mo:caffeineai-object-storage/Storage";

module {
  public func getMembers(members : List.List<TeamTypes.TeamMember>) : [TeamTypes.TeamMember] {
    members.toArray();
  };

  public func addMember(
    members : List.List<TeamTypes.TeamMember>,
    counter : { var value : Nat },
    name : Text,
    title : Text,
    role : TeamTypes.TeamRole,
    photoBlob : ?Storage.ExternalBlob,
    order : Nat,
  ) : Common.Id {
    let id = counter.value;
    counter.value += 1;
    members.add({ id; name; title; role; photoBlob; order });
    id;
  };

  public func updateMember(
    members : List.List<TeamTypes.TeamMember>,
    id : Common.Id,
    name : Text,
    title : Text,
    role : TeamTypes.TeamRole,
    photoBlob : ?Storage.ExternalBlob,
    order : Nat,
  ) {
    members.mapInPlace(func(m) {
      if (m.id == id) { { m with name; title; role; photoBlob; order } } else m
    });
  };

  public func deleteMember(members : List.List<TeamTypes.TeamMember>, id : Common.Id) {
    let filtered = members.filter(func(m) { m.id != id });
    members.clear();
    members.append(filtered);
  };
};
