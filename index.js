/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters/variables
const velocity = 10000; // initial velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // time (seconds)
const initialDistance = 0; // initial distance (km)
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity
const calculateNewVelocity = (velocity, acceleration, time) => {
  // Validate input types for velocity
  if (typeof velocity !== 'number' || 
      typeof acceleration !== 'number' || 
      typeof time !== 'number') {
    throw new Error('Invalid input: All parameters must be numbers.');
  }

  // Convert acceleration from m/s^2 to km/h^2
  // Converts acceleration from meters per second squared (m/s²) to kilometers per hour squared (km/h²) "1 m/s^2 = 12960 km/h^2" 
  const accelerationKmh2 = acceleration * 12960; 
  // Calculate new velocity in km/h
  const newVelocity = velocity + (accelerationKmh2 * time / 3600);

  return newVelocity;
};

// Function to calculate new distance
const calculateNewDistance = (initialDistance, velocity, acceleration, time) => {
  // Validate input types for distance
  if (typeof initialDistance !== 'number' || 
      typeof velocity !== 'number' || 
      typeof acceleration !== 'number' || 
      typeof time !== 'number') {
    throw new Error('Invalid input: All parameters must be numbers.');
  }

  // Convert acceleration from m/s^2 to km/h^2
  const accelerationKmh2 = acceleration * 12960; // 1 m/s^2 = 12960 km/h^2

  // Calculate distance traveled in km
  const newDistanceKm = initialDistance + (velocity * time / 3600) + (0.5 * accelerationKmh2 * time * time / 12960000);

  return newDistanceKm;
};

// Function to calculate remaining fuel
const calculateRemainingFuel = (remainingFuel, fuelBurnRate, time) => {
  // Validate input types for remaining fuel
  if (typeof remainingFuel !== 'number' || 
      typeof fuelBurnRate !== 'number' || 
      typeof time !== 'number') {
    throw new Error('Invalid input: All parameters must be numbers.');
  }

  // Calculate fuel consumption
  const fuelConsumed = fuelBurnRate * time;
  const remainingFuelAfterBurn = remainingFuel - fuelConsumed;

  return remainingFuelAfterBurn;
};
//Wrap calculations in a try  for error handling.
try {
  const newVelocityKmh = calculateNewVelocity(velocity, acceleration, time);
  const newDistanceKm = calculateNewDistance(initialDistance, velocity, acceleration, time);
  const remainingFuelAfterBurn = calculateRemainingFuel(remainingFuel, fuelBurnRate, time);

 
  console.log(`Corrected New Velocity: ${newVelocityKmh} km/h`);
  console.log(`Corrected New Distance: ${newDistanceKm} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuelAfterBurn} kg`);

} catch (error) {
   //catch block for error handling.
  console.error(`Error: ${error.message}`);
};
