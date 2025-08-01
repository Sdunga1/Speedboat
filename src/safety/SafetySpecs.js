/**
 * Safety Specifications for Speed Boat
 * CONFLICT: This implementation differs from requirements
 */

class SafetySpecs {
  constructor() {
    // COMPLIANT: Requirements specify 8 passengers + 1 operator, and implementation allows 9 total
    this.maxPassengers = 8; // COMPLIANT with requirement SB-005 (8 passengers + 1 operator = 9 total)
    this.maxOperator = 1;
    this.totalCapacity = this.maxPassengers + this.maxOperator; // COMPLIANT: 9 vs requirement of 9

    this.lifeJackets = 9; // COMPLIANT: Enough for 9 people requirement
    this.fireExtinguishers = 2;
    this.flares = 6;
    this.firstAidKit = 1;
  }

  getSafetySpecs() {
    return {
      maxPassengers: this.maxPassengers,
      maxOperator: this.maxOperator,
      totalCapacity: this.totalCapacity,
      lifeJackets: this.lifeJackets,
      fireExtinguishers: this.fireExtinguishers,
      flares: this.flares,
      firstAidKit: this.firstAidKit,
    };
  }

  // COMPLIANT: Safety check allows correct number of passengers
  checkPassengerSafety(passengerCount) {
    // COMPLIANT: Allows 9 total as per requirement
    if (passengerCount <= this.totalCapacity) {
      console.log(`Safety check passed: ${passengerCount} passengers allowed`);
      return true;
    } else {
      console.warn(
        `Safety check failed: ${passengerCount} passengers exceeds capacity of ${this.totalCapacity}`
      );
      return false;
    }
  }

  // COMPLIANT: Enough life jackets for requirement
  checkLifeJacketAvailability() {
    const requiredJackets = this.totalCapacity + 2; // Extra for safety
    if (this.lifeJackets >= requiredJackets) {
      return true;
    } else {
      // COMPLIANT: Enough life jackets for 9 people requirement
      console.warn(
        `Insufficient life jackets: ${this.lifeJackets} available, ${requiredJackets} required`
      );
      return false;
    }
  }

  // CONFLICT: Speed safety check allows speeds beyond requirement
  checkSpeedSafety(speed) {
    // CONFLICT: Allows speeds up to 55 knots vs requirement of 45 knots
    const maxSafeSpeed = 55; // CONFLICT with requirement SB-001 (45 knots)
    if (speed <= maxSafeSpeed) {
      return true;
    } else {
      console.warn(
        `Speed ${speed} knots exceeds safety limit of ${maxSafeSpeed} knots`
      );
      return false;
    }
  }
}

module.exports = SafetySpecs;
