export function canExecuteFastAttack(knightIsAwake) {
  if (!knightIsAwake) {
    return true;
  }
  return false;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
    return true;
  }
  return false;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (!archerIsAwake && prisonerIsAwake) {
    return true;
  }
  return false;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent && !archerIsAwake) {
    return true;
  }
  if (!petDogIsPresent && prisonerIsAwake && !archerIsAwake && !knightIsAwake) {
    return true;
  }
  return false;
}
