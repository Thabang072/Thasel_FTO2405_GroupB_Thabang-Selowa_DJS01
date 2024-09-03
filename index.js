// Given Parameters/variables
const velocity = 10000; // initial velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeSec = 3600; // time (seconds)
const initialDistance = 0; // initial distance (km)
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

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

// Function to calculate new distance
const calculateNewDistance = (initialDistance, velocity, acceleration, timeSec) => {
  // Validate input types
  if (typeof initialDistance !== 'number' || 
      typeof velocity !== 'number' || 
      typeof acceleration !== 'number' || 
      typeof timeSec !== 'number') {
    throw new Error('Invalid input: All parameters must be numbers.');
  }

  // Convert acceleration from m/s^2 to km/h^2
  const accelerationKmh2 = acceleration * 12960; // 1 m/s^2 = 12960 km/h^2

  // Calculate distance traveled in km
  const newDistanceKm = initialDistance + (velocity * timeSec / 3600) + (0.5 * accelerationKmh2 * timeSec * timeSec / 12960000);

  return newDistanceKm;
};

// Function to calculate remaining fuel
const calculateRemainingFuel = (remainingFuel, fuelBurnRate, timeSec) => {
  // Validate input types
  if (typeof remainingFuel !== 'number' || 
      typeof fuelBurnRate !== 'number' || 
      typeof timeSec !== 'number') {
    throw new Error('Invalid input: All parameters must be numbers.');
  }

  // Calculate fuel consumption
  const fuelConsumed = fuelBurnRate * timeSec;
  const remainingFuelAfterBurn = remainingFuel - fuelConsumed;

  return remainingFuelAfterBurn;
};
//Wrap calculations in a try  for error handling.
try {
  const newVelocityKmh = calculateNewVelocity(velocity, acceleration, timeSec);
  const newDistanceKm = calculateNewDistance(initialDistance, velocity, acceleration, timeSec);
  const remainingFuelAfterBurn = calculateRemainingFuel(remainingFuel, fuelBurnRate, timeSec);

 
  console.log(`Corrected New Velocity: ${newVelocityKmh} km/h`);
  console.log(`Corrected New Distance: ${newDistanceKm} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuelAfterBurn} kg`);

} catch (error) {
   //catch block for error handling.
  console.error(`Error: ${error.message}`);
};
