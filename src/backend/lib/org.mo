import OrgTypes "../types/org";
import Storage "mo:caffeineai-object-storage/Storage";

module {
  public func getOrgInfo(state : { var value : ?OrgTypes.OrgInfo }) : ?OrgTypes.OrgInfo {
    state.value;
  };

  public func updateOrgInfo(state : { var value : ?OrgTypes.OrgInfo }, info : OrgTypes.OrgInfo) : OrgTypes.OrgInfo {
    state.value := ?info;
    info;
  };

  public func updateLogo(state : { var value : ?OrgTypes.OrgInfo }, blob : Storage.ExternalBlob) : OrgTypes.OrgInfo {
    let current = switch (state.value) {
      case (?info) info;
      case null {
        {
          name = "AZAD HIND UNITED SQUAD";
          tagline = "Building Discipline, Leadership & Patriotism";
          department = "Ministry of Youth Affairs & Sports, Govt. of India";
          registrationNo = "S/20/755";
          affiliationNo = "62213686/NYK/6221/2024-2025";
          address = "Behala Chowrasta, 15/1, Raja Rammohan Roy Road, Kolkata - 700008";
          phone = "9804312544";
          email = "";
          mission = ["Character building", "Self-reliance", "Patriotism"];
          logoBlob = null;
        };
      };
    };
    let updated = { current with logoBlob = ?blob };
    state.value := ?updated;
    updated;
  };
};
