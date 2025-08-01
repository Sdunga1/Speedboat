# Speed Boat Requirements

This document contains the original requirements for the Speed Boat project.

## Requirements List

### SB-001: Maximum Speed

**Type:** Performance Requirement  
**Title:** The speed boat shall achieve a maximum speed of 45 knots (52 mph) in calm water conditions.  
**Description:** The vessel must be capable of reaching and maintaining 45 knots under normal operating conditions with standard load.

### SB-002: Boat Length

**Type:** Physical Specification  
**Title:** The speed boat shall have a total length of 28 feet (8.5 meters) including bow and stern.  
**Description:** The overall length from bow to stern shall be exactly 28 feet to meet marina slip requirements.

### SB-003: Engine Power

**Type:** Technical Specification  
**Title:** The speed boat shall be powered by a 350 horsepower outboard engine.  
**Description:** The vessel shall use a single 350 HP outboard motor for propulsion and maneuverability.

### SB-004: Fuel Capacity

**Type:** Operational Requirement  
**Title:** The speed boat shall have a fuel tank capacity of 120 gallons (454 liters).  
**Description:** The fuel system must accommodate 120 gallons to ensure adequate range for typical operations.

### SB-005: Passenger Capacity

**Type:** Safety Requirement  
**Title:** The speed boat shall safely accommodate a maximum of 8 passengers plus 1 operator.  
**Description:** The vessel must have seating and safety equipment for 9 total occupants.

### SB-006: Hull Material

**Type:** Construction Requirement  
**Title:** The speed boat hull shall be constructed of marine-grade aluminum.  
**Description:** The hull structure must use marine-grade aluminum for durability and corrosion resistance.

## Implementation Status

The current implementation has the following compliance status:

### ❌ CONFLICTS (3 requirements):

1. **SB-001 Conflict:** Implementation allows 50 knots vs requirement of 45 knots
2. **SB-003 Conflict:** Implementation uses 400 HP vs requirement of 350 HP
3. **SB-006 Conflict:** Implementation uses fiberglass vs requirement of aluminum

### ✅ COMPLIANT (3 requirements):

4. **SB-002 Compliant:** Implementation uses 28 feet vs requirement of 28 feet
5. **SB-004 Compliant:** Implementation has 120 gallons vs requirement of 120 gallons
6. **SB-005 Compliant:** Implementation allows 9 total vs requirement of 9

These conflicts are intentionally created for demonstration purposes to test requirements vs implementation analysis tools.
