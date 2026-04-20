import AccessControl "mo:caffeineai-authorization/access-control";
import Runtime "mo:core/Runtime";
import AdmissionTypes "../types/admission";
import AdmissionLib "../lib/admission";

mixin (
  accessControlState : AccessControl.AccessControlState,
  admissionInfo : { var value : ?AdmissionTypes.AdmissionInfo },
) {
  public query func getAdmissionInfo() : async ?AdmissionTypes.AdmissionInfo {
    AdmissionLib.getAdmissionInfo(admissionInfo);
  };

  public shared ({ caller }) func updateAdmissionInfo(info : AdmissionTypes.AdmissionInfo) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update admission info");
    };
    ignore AdmissionLib.updateAdmissionInfo(admissionInfo, info);
  };
};
