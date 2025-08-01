/**
 * Engine Specifications for Speed Boat
 * CONFLICT: This implementation differs from requirements
 */

class EngineSpecs {
  constructor() {
    // CONFLICT: Requirements specify 350 HP, but implementation uses 400 HP
    this.maxPower = 400; // HP - CONFLICT with requirement SB-003 (350 HP)
    this.maxSpeed = 50; // knots - CONFLICT with requirement SB-001 (45 knots)
    this.fuelCapacity = 120; // gallons - COMPLIANT with requirement SB-004 (120 gallons)
    this.engineType = "outboard";
    this.cylinders = 6;
    this.displacement = "5.7L";
  }

  getEngineSpecs() {
    return {
      power: `${this.maxPower} HP`,
      maxSpeed: `${this.maxSpeed} knots`,
      fuelCapacity: `${this.fuelCapacity} gallons`,
      type: this.engineType,
      cylinders: this.cylinders,
      displacement: this.displacement,
    };
  }

  // CONFLICT: This method allows speed beyond requirement limit
  setMaxSpeed(speed) {
    if (speed <= 60) {
      // CONFLICT: Allows speeds beyond 45 knots requirement
      this.maxSpeed = speed;
      console.log(`Engine speed set to ${speed} knots`);
    } else {
      console.warn("Speed exceeds safety limits");
    }
  }

  // COMPLIANT: Fuel capacity matches requirement
  getFuelRange() {
    const consumptionRate = 15; // gallons per hour at max speed
    return this.fuelCapacity / consumptionRate; // COMPLIANT: Correct range with proper tank size
  }
}

module.exports = EngineSpecs;
