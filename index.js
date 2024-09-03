// Given Parameters
const velocity = 10000; // initial velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeSec = 3600; // time (seconds)
const initialDistanceKm = 0; // initial distance (km)
const remainingFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgs = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity
const calculateNewVelocity = (velocity, acceleration, timeSec) => {
  // Validate input types
  if (typeof velocity !== 'number' || 
      typeof acceleration !== 'number' || 
      typeof timeSec !== 'number') {
    throw new Error('Invalid input: All parameters must be numbers.');
  }

  // Convert acceleration from m/s^2 to km/h^2
  const accelerationKmh2 = acceleration * 12960; // 1 m/s^2 = 12960 km/h^2

  // Calculate new velocity in km/h
  const newVelocity = velocity + (accelerationKmh2 * timeSec / 3600);

  return newVelocity;
};

  // Output results
  console.log(`Corrected New Velocity: ${newVelocityKmh} km/h`);
  console.log(`Corrected New Distance: ${newDistanceKm} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuelKgAfterBurn} kg`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
