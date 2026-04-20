import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";
import OrgTypes "types/org";
import TeamTypes "types/team";
import ActivitiesTypes "types/activities";
import BranchTypes "types/branches";
import GalleryTypes "types/gallery";
import ContactTypes "types/contact";
import AdmissionTypes "types/admission";
import OrgLib "lib/org";
import TeamLib "lib/team";
import ActivitiesLib "lib/activities";
import BranchesLib "lib/branches";
import AdmissionLib "lib/admission";
import OrgApi "mixins/org-api";
import TeamApi "mixins/team-api";
import ActivitiesApi "mixins/activities-api";
import BranchesApi "mixins/branches-api";
import GalleryApi "mixins/gallery-api";
import ContactApi "mixins/contact-api";
import AdmissionApi "mixins/admission-api";

actor {
  // Authorization state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Object storage
  include MixinObjectStorage();

  // Org info state — seed default on first init
  let orgInfo = { var value : ?OrgTypes.OrgInfo = null };
  ignore OrgLib.updateOrgInfo(orgInfo, {
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
  });
  include OrgApi(accessControlState, orgInfo);

  // Team state — seed leadership and trainers
  let teamMembers = List.empty<TeamTypes.TeamMember>();
  let teamCounter = { var value : Nat = 0 };
  ignore TeamLib.addMember(teamMembers, teamCounter, "Ratan Halder", "Chief Commander Officer", #leadership, null, 0);
  ignore TeamLib.addMember(teamMembers, teamCounter, "Subham Bhakta", "Assistant Chief Commander Officer", #leadership, null, 1);
  ignore TeamLib.addMember(teamMembers, teamCounter, "Abhijit Adhikary", "Senior Trainer", #trainer, null, 2);
  ignore TeamLib.addMember(teamMembers, teamCounter, "Mousumi Mondal", "Official Member", #trainer, null, 3);
  ignore TeamLib.addMember(teamMembers, teamCounter, "Keya Samanta", "Senior", #senior, null, 4);
  include TeamApi(accessControlState, teamMembers, teamCounter);

  // Activities & camps state — seed default data
  let activities = List.empty<ActivitiesTypes.Activity>();
  let activityCounter = { var value : Nat = 0 };
  ignore ActivitiesLib.addActivity(activities, activityCounter, "Drill & Marching", "Formation drills and parade marching training", #training);
  ignore ActivitiesLib.addActivity(activities, activityCounter, "Physical Training", "Physical fitness and endurance exercises", #training);
  ignore ActivitiesLib.addActivity(activities, activityCounter, "Traffic Training", "Road safety and traffic management training", #training);
  ignore ActivitiesLib.addActivity(activities, activityCounter, "Band Training", "Military band instruments and performance", #training);
  ignore ActivitiesLib.addActivity(activities, activityCounter, "Govt Exam Training", "Preparation for government competitive examinations", #training);
  ignore ActivitiesLib.addActivity(activities, activityCounter, "First Aid", "Emergency first aid and basic medical training", #training);
  ignore ActivitiesLib.addActivity(activities, activityCounter, "Defense Training", "Self-defense and basic defense techniques", #training);
  ignore ActivitiesLib.addActivity(activities, activityCounter, "Camping", "Outdoor camping and survival skills", #training);
  ignore ActivitiesLib.addActivity(activities, activityCounter, "RDC Parade", "Republic Day Camp parade preparation and participation", #event);
  ignore ActivitiesLib.addActivity(activities, activityCounter, "Independence Day Parade", "Independence Day parade march and ceremony", #event);
  ignore ActivitiesLib.addActivity(activities, activityCounter, "PTS Parade", "Pre-Training School parade and evaluation", #event);

  let camps = List.empty<ActivitiesTypes.Camp>();
  let campCounter = { var value : Nat = 0 };
  ignore ActivitiesLib.addCamp(camps, campCounter, "Summer Camp", "4-7 days", "Intensive summer training camp with diverse outdoor activities",
    ["Gun shooting", "Rock climbing", "Fire fighting", "Self-defense", "Cultural programs"]);
  ignore ActivitiesLib.addCamp(camps, campCounter, "Winter Camp", "Multiple days", "Winter training camp focused on cold-weather survival and team building",
    ["Gun shooting", "Rock climbing", "Fire fighting", "Self-defense", "Cultural programs"]);
  include ActivitiesApi(accessControlState, activities, activityCounter, camps, campCounter);

  // Branches state — seed HQ and sub-branches
  let branches = List.empty<BranchTypes.Branch>();
  let branchCounter = { var value : Nat = 0 };
  ignore BranchesLib.addBranch(branches, branchCounter, "Behala Chowrasta Unit", "15/1, Raja Rammohan Roy Road, Behala Chowrasta, Kolkata - 700008", "Ratan Halder", "9804312544", true);
  ignore BranchesLib.addBranch(branches, branchCounter, "Barisha", "Barisha, Kolkata", "", "", false);
  ignore BranchesLib.addBranch(branches, branchCounter, "Thakurpukur", "Thakurpukur, Kolkata", "", "", false);
  ignore BranchesLib.addBranch(branches, branchCounter, "Bishnupur", "Bishnupur, West Bengal", "", "", false);
  ignore BranchesLib.addBranch(branches, branchCounter, "Falta", "Falta, West Bengal", "", "", false);
  ignore BranchesLib.addBranch(branches, branchCounter, "Newtown", "Newtown, Kolkata", "", "", false);
  ignore BranchesLib.addBranch(branches, branchCounter, "Kalagachhia", "Kalagachhia, West Bengal", "", "", false);
  ignore BranchesLib.addBranch(branches, branchCounter, "Shibrampur", "Shibrampur, West Bengal", "", "", false);
  ignore BranchesLib.addBranch(branches, branchCounter, "Howrah Singur", "Singur, Howrah, West Bengal", "", "", false);
  include BranchesApi(accessControlState, branches, branchCounter);

  // Gallery state
  let galleryItems = List.empty<GalleryTypes.GalleryItem>();
  let galleryCounter = { var value : Nat = 0 };
  include GalleryApi(accessControlState, galleryItems, galleryCounter);

  // Contact submissions state
  let contactSubmissions = List.empty<ContactTypes.ContactSubmission>();
  let contactCounter = { var value : Nat = 0 };
  include ContactApi(accessControlState, contactSubmissions, contactCounter);

  // Admission info state — seed default fees and documents
  let admissionInfo = { var value : ?AdmissionTypes.AdmissionInfo = null };
  ignore AdmissionLib.updateAdmissionInfo(admissionInfo, {
    fees = { admission = 350; monthly = 50 };
    documents = ["Photos", "School certificate", "Address proof", "ID proof"];
  });
  include AdmissionApi(accessControlState, admissionInfo);
};
