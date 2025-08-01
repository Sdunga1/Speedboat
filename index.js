/**
 * Speed Boat Project - Main Entry Point
 * This file demonstrates the conflicts between implementation and requirements
 */

const SpeedBoat = require("./src/main/SpeedBoat");

// Create a new speed boat instance
const speedBoat = new SpeedBoat();

console.log("=== SPEED BOAT PROJECT ===");
console.log(
  "Demonstrating conflicts between implementation and requirements\n"
);

// Display boat specifications
console.log("📋 BOAT SPECIFICATIONS:");
const specs = speedBoat.getBoatSpecs();
console.log(JSON.stringify(specs, null, 2));

console.log("\n📊 PERFORMANCE DATA:");
const performance = speedBoat.getPerformanceData();
console.log(JSON.stringify(performance, null, 2));

console.log("\n⚠️  REQUIREMENT COMPLIANCE CHECK:");
const validation = speedBoat.validateConfiguration();
if (validation.isValid) {
  console.log("✅ All requirements met");
} else {
  console.log("❌ CONFLICTS DETECTED:");
  validation.issues.forEach((issue) => {
    console.log(`   - ${issue}`);
  });
}

console.log("\n🚤 OPERATION TEST:");
// Test operation with conflicting parameters
const operation1 = speedBoat.operate(50, 7); // CONFLICT: Speed exceeds requirement
const operation2 = speedBoat.operate(40, 9); // COMPLIANT: Correct passenger count

console.log("\n📝 SUMMARY OF CONFLICTS:");
console.log(
  "1. Speed: Implementation allows 50 knots, requirement is 45 knots"
);
console.log("2. Power: Implementation uses 400 HP, requirement is 350 HP");
console.log(
  "3. Material: Implementation uses fiberglass, requirement is aluminum"
);
console.log("\n✅ COMPLIANT REQUIREMENTS:");
console.log("4. Length: Implementation is 28 feet, requirement is 28 feet");
console.log(
  "5. Fuel: Implementation has 120 gallons, requirement is 120 gallons"
);
console.log("6. Passengers: Implementation allows 9, requirement is 9");

console.log(
  "\n🎯 This demonstrates how requirements vs implementation conflicts can be detected!"
);
