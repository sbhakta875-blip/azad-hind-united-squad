module {
  public type AdmissionFees = {
    admission : Nat;
    monthly : Nat;
  };

  public type AdmissionInfo = {
    fees : AdmissionFees;
    documents : [Text];
  };
};
