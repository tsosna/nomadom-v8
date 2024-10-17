// utils/conversion.ts

export enum Unit {
  METERS = 'meters',
  FEET = 'feet',
  // Add more units as needed
}

export function convertMeasurement(value: number, fromUnit: Unit, toUnit: Unit): number {
  if (fromUnit === toUnit) {
    return value;
  }

  switch (fromUnit) {
    case Unit.METERS:
      if (toUnit === Unit.FEET) {
        return value * 3.28084; // Convert meters to feet
      }
      break;
    case Unit.FEET:
      if (toUnit === Unit.METERS) {
        return value / 3.28084; // Convert feet to meters
      }
      break;
    // Add more conversion logic as needed
  }

  throw new Error(`Unsupported conversion from ${fromUnit} to ${toUnit}`);
}

// example usage
// import { convertMeasurement, Unit } from './utils/conversion';

// const measurementInMeters = 10;
// const measurementInFeet = convertMeasurement(measurementInMeters, Unit.METERS, Unit.FEET);

// console.log(`Measurement in feet: ${measurementInFeet}`);