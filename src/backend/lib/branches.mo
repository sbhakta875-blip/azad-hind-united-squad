import List "mo:core/List";
import Common "../types/common";
import BranchTypes "../types/branches";

module {
  public func getBranches(branches : List.List<BranchTypes.Branch>) : [BranchTypes.Branch] {
    branches.toArray();
  };

  public func addBranch(
    branches : List.List<BranchTypes.Branch>,
    counter : { var value : Nat },
    name : Text,
    address : Text,
    contactPerson : Text,
    phone : Text,
    isHQ : Bool,
  ) : Common.Id {
    let id = counter.value;
    counter.value += 1;
    branches.add({ id; name; address; contactPerson; phone; isHQ });
    id;
  };

  public func updateBranch(
    branches : List.List<BranchTypes.Branch>,
    id : Common.Id,
    name : Text,
    address : Text,
    contactPerson : Text,
    phone : Text,
    isHQ : Bool,
  ) {
    branches.mapInPlace(func(b) {
      if (b.id == id) { { b with name; address; contactPerson; phone; isHQ } } else b
    });
  };

  public func deleteBranch(branches : List.List<BranchTypes.Branch>, id : Common.Id) {
    let filtered = branches.filter(func(b) { b.id != id });
    branches.clear();
    branches.append(filtered);
  };
};
