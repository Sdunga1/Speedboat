/**
 * Hull Specifications for Speed Boat
 * CONFLICT: This implementation differs from requirements
 */

class HullSpecs {
  constructor() {
    // COMPLIANT: Requirements specify 28 feet, and implementation uses 28 feet
    this.length = 28; // feet - COMPLIANT with requirement SB-002 (28 feet)
    this.width = 8.5; // feet
    this.height = 4.2; // feet
    this.weight = 2800; // lbs

    // CONFLICT: Requirements specify aluminum, but implementation uses fiberglass
    this.material = "fiberglass"; // CONFLICT with requirement SB-006 (aluminum)
    this.thickness = 0.25; // inches
    this.layers = 3;
  }

  getHullSpecs() {
    return {
      length: `${this.length} feet`,
      width: `${this.width} feet`,
      height: `${this.height} feet`,
      weight: `${this.weight} lbs`,
      material: this.material,
      thickness: `${this.thickness} inches`,
      layers: this.layers,
    };
  }

  // COMPLIANT: Hull length matches requirement
  calculateDisplacement() {
    const volume = this.length * this.width * this.height * 0.5; // cubic feet
    return volume * 64; // lbs (water displacement)
  }

  // CONFLICT: Material is different from requirement
  getMaterialProperties() {
    const properties = {
      fiberglass: {
        strength: "high",
        weight: "medium",
        corrosion: "excellent",
        cost: "medium",
      },
      aluminum: {
        strength: "very high",
        weight: "low",
        corrosion: "good",
        cost: "high",
      },
    };

    // CONFLICT: Using fiberglass instead of required aluminum
    return properties[this.material];
  }

  // COMPLIANT: Passenger capacity calculation based on correct length
  getMaxPassengers() {
    // COMPLIANT: Using 28 feet as per requirement
    const capacityPerFoot = 0.3; // passengers per foot
    return Math.floor(this.length * capacityPerFoot); // COMPLIANT: 8 passengers as required
  }
}

module.exports = HullSpecs;
