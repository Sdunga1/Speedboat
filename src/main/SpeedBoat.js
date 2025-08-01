/**
 * Main Speed Boat Class
 * CONFLICT: This implementation differs from requirements
 */

const EngineSpecs = require("../engine/EngineSpecs");
const HullSpecs = require("../hull/HullSpecs");
const SafetySpecs = require("../safety/SafetySpecs");

class SpeedBoat {
  constructor() {
    this.engine = new EngineSpecs();
    this.hull = new HullSpecs();
    this.safety = new SafetySpecs();
    this.name = "Speed Demon 3000";
    this.model = "SD-3000";
    this.year = 2024;
  }

  // CONFLICT: Returns specifications that don't match requirements
  getBoatSpecs() {
    return {
      name: this.name,
      model: this.model,
      year: this.year,
      engine: this.engine.getEngineSpecs(),
      hull: this.hull.getHullSpecs(),
      safety: this.safety.getSafetySpecs(),
    };
  }

  // CONFLICT: Performance exceeds requirement limits
  getPerformanceData() {
    return {
      maxSpeed: this.engine.maxSpeed, // CONFLICT: 50 knots vs requirement of 45 knots
      maxPower: this.engine.maxPower, // CONFLICT: 400 HP vs requirement of 350 HP
      fuelRange: this.engine.getFuelRange(), // COMPLIANT: Correct range with proper tank size
      passengerCapacity: this.safety.totalCapacity, // COMPLIANT: 9 vs requirement of 9
    };
  }

  // CONFLICT: Validation allows non-compliant configurations
  validateConfiguration() {
    const issues = [];

    // Check speed compliance
    if (this.engine.maxSpeed > 45) {
      issues.push(
        `CONFLICT: Speed ${this.engine.maxSpeed} knots exceeds requirement of 45 knots`
      );
    }

    // Check power compliance
    if (this.engine.maxPower > 350) {
      issues.push(
        `CONFLICT: Power ${this.engine.maxPower} HP exceeds requirement of 350 HP`
      );
    }

    // Check length compliance
    if (this.hull.length > 28) {
      issues.push(
        `CONFLICT: Length ${this.hull.length} feet exceeds requirement of 28 feet`
      );
    }

    // Check passenger capacity compliance
    if (this.safety.totalCapacity < 9) {
      issues.push(
        `CONFLICT: Capacity ${this.safety.totalCapacity} is less than requirement of 9`
      );
    }

    // Check fuel capacity compliance
    if (this.engine.fuelCapacity < 120) {
      issues.push(
        `CONFLICT: Fuel capacity ${this.engine.fuelCapacity} gallons is less than requirement of 120 gallons`
      );
    }

    // Check material compliance
    if (this.hull.material !== "aluminum") {
      issues.push(
        `CONFLICT: Material ${this.hull.material} differs from requirement of aluminum`
      );
    }

    return {
      isValid: issues.length === 0,
      issues: issues,
    };
  }

  // CONFLICT: Allows operation beyond requirement limits
  operate(speed, passengers) {
    const speedCheck = this.safety.checkSpeedSafety(speed);
    const passengerCheck = this.safety.checkPassengerSafety(passengers);

    if (speedCheck && passengerCheck) {
      console.log(
        `Speed boat operating at ${speed} knots with ${passengers} passengers`
      );
      return true;
    } else {
      console.warn("Operation not allowed due to safety concerns");
      return false;
    }
  }
}

module.exports = SpeedBoat;
