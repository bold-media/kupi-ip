import * as migration_20250105_134632 from './20250105_134632';
import * as migration_20250106_021956 from './20250106_021956';
import * as migration_20250106_155641 from './20250106_155641';
import * as migration_20250106_195405 from './20250106_195405';

export const migrations = [
  {
    up: migration_20250105_134632.up,
    down: migration_20250105_134632.down,
    name: '20250105_134632',
  },
  {
    up: migration_20250106_021956.up,
    down: migration_20250106_021956.down,
    name: '20250106_021956',
  },
  {
    up: migration_20250106_155641.up,
    down: migration_20250106_155641.down,
    name: '20250106_155641',
  },
  {
    up: migration_20250106_195405.up,
    down: migration_20250106_195405.down,
    name: '20250106_195405'
  },
];
