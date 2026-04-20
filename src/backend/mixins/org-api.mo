import AccessControl "mo:caffeineai-authorization/access-control";
import Runtime "mo:core/Runtime";
import Storage "mo:caffeineai-object-storage/Storage";
import OrgTypes "../types/org";
import OrgLib "../lib/org";

mixin (
  accessControlState : AccessControl.AccessControlState,
  orgInfo : { var value : ?OrgTypes.OrgInfo },
) {
  public query func getOrgInfo() : async ?OrgTypes.OrgInfo {
    OrgLib.getOrgInfo(orgInfo);
  };

  public shared ({ caller }) func updateOrgInfo(info : OrgTypes.OrgInfo) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update org info");
    };
    ignore OrgLib.updateOrgInfo(orgInfo, info);
  };

  public shared ({ caller }) func updateOrgLogo(blob : Storage.ExternalBlob) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update logo");
    };
    ignore OrgLib.updateLogo(orgInfo, blob);
  };
};
