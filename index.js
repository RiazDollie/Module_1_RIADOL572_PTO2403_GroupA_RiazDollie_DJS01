
const velocityKmH = 10000;
const velocityInMetersPerSecond = velocityKmH * (1000 / 3600); 
const accelerationMetersPerSecondSquared = 3; 
const travelTimeInSeconds = 3600; 
const startingDistanceInKm = 0; 
const InitialFuelInKg = 5000; 
const fuelBurnRateKgPerSecond = 0.5; 
const distanceAfterTravel =
  startingDistanceInKm + velocityKmH * (travelTimeInSeconds / 3600);

const remainingFuelAfterTravelInKg =
  InitialFuelInKg - fuelBurnRateKgPerSecond * travelTimeInSeconds; 

const velocityDuringTravel = calcVelocityDuringTravel(
  velocityInMetersPerSecond,
  accelerationMetersPerSecondSquared,
  travelTimeInSeconds
); 
function calcVelocityDuringTravel(vel, acc, time) {
  if (typeof vel !== "number" || vel < 0) {
    throw new Error(
      "The velocity is invalid, provide a pisitive number in meters per second"
    );
  }
  if (typeof acc !== "number" || acc < 0) {
    throw new Error(
      "The acceleration is invalid, provide a pisitive number in meters per second"
    );
  }
  if (typeof time !== "number" || time < 0) {
    throw new Error(
      "The time is invalid, provide a pisitive number in seconds"
    );
  }
  return (vel + acc * time) * 3.6; 
}
console.log(`Corrected New Velocity: ${velocityDuringTravel} km/h`);
console.log(`Corrected New Distance: ${distanceAfterTravel} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelAfterTravelInKg} kg`);






