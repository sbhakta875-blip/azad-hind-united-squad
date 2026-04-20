import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import Runtime "mo:core/Runtime";
import Storage "mo:caffeineai-object-storage/Storage";
import TeamTypes "../types/team";
import Common "../types/common";
import TeamLib "../lib/team";

mixin (
  accessControlState : AccessControl.AccessControlState,
  teamMembers : List.List<TeamTypes.TeamMember>,
  teamCounter : { var value : Nat },
) {
  public query func getTeamMembers() : async [TeamTypes.TeamMember] {
    TeamLib.getMembers(teamMembers);
  };

  public shared ({ caller }) func addTeamMember(name : Text, title : Text, role : TeamTypes.TeamRole, photoBlob : ?Storage.ExternalBlob, order : Nat) : async Common.Id {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add team members");
    };
    TeamLib.addMember(teamMembers, teamCounter, name, title, role, photoBlob, order);
  };

  public shared ({ caller }) func updateTeamMember(id : Common.Id, name : Text, title : Text, role : TeamTypes.TeamRole, photoBlob : ?Storage.ExternalBlob, order : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update team members");
    };
    TeamLib.updateMember(teamMembers, id, name, title, role, photoBlob, order);
  };

  public shared ({ caller }) func deleteTeamMember(id : Common.Id) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete team members");
    };
    TeamLib.deleteMember(teamMembers, id);
  };
};
