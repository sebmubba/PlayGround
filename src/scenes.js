import { buildExterior } from './scenes/exterior.js';
import { buildFoyer } from './scenes/foyer.js';
import { buildBedroom } from './scenes/bedroom.js';
import { buildQuarry } from './scenes/quarry.js';
import { buildHollow } from './scenes/hollow.js';
import { buildLair } from './scenes/lair.js';

const BUILDERS = {
  exterior: buildExterior,
  foyer: buildFoyer,
  bedroom: buildBedroom,
  quarry: buildQuarry,
  hollow: buildHollow,
  lair: buildLair
};

export function buildScene(id) {
  const build = BUILDERS[id];
  if (!build) throw new Error(`Unknown scene: ${id}`);
  return build();
}

export const sceneIds = Object.keys(BUILDERS);
