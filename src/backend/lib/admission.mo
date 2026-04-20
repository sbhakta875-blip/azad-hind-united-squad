import AdmissionTypes "../types/admission";

module {
  public func getAdmissionInfo(state : { var value : ?AdmissionTypes.AdmissionInfo }) : ?AdmissionTypes.AdmissionInfo {
    state.value;
  };

  public func updateAdmissionInfo(
    state : { var value : ?AdmissionTypes.AdmissionInfo },
    info : AdmissionTypes.AdmissionInfo,
  ) : AdmissionTypes.AdmissionInfo {
    state.value := ?info;
    info;
  };
};
