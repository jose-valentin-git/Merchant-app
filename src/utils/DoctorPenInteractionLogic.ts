class DoctorPenInteractionLogic {
  private static instance: DoctorPenInteractionLogic;

  private constructor() {
    // Private constructor to prevent instantiation from outside
  }

  public static getInstance(): DoctorPenInteractionLogic {
    if (!DoctorPenInteractionLogic.instance) {
      DoctorPenInteractionLogic.instance = new DoctorPenInteractionLogic();
    }
    return DoctorPenInteractionLogic.instance;
  }
}
