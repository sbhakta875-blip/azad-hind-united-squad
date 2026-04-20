import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import Runtime "mo:core/Runtime";
import BranchTypes "../types/branches";
import Common "../types/common";
import BranchesLib "../lib/branches";

mixin (
  accessControlState : AccessControl.AccessControlState,
  branches : List.List<BranchTypes.Branch>,
  branchCounter : { var value : Nat },
) {
  public query func getBranches() : async [BranchTypes.Branch] {
    BranchesLib.getBranches(branches);
  };

  public shared ({ caller }) func addBranch(name : Text, address : Text, contactPerson : Text, phone : Text, isHQ : Bool) : async Common.Id {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add branches");
    };
    BranchesLib.addBranch(branches, branchCounter, name, address, contactPerson, phone, isHQ);
  };

  public shared ({ caller }) func updateBranch(id : Common.Id, name : Text, address : Text, contactPerson : Text, phone : Text, isHQ : Bool) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update branches");
    };
    BranchesLib.updateBranch(branches, id, name, address, contactPerson, phone, isHQ);
  };

  public shared ({ caller }) func deleteBranch(id : Common.Id) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete branches");
    };
    BranchesLib.deleteBranch(branches, id);
  };
};
