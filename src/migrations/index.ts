import * as migration_20250105_134632 from './20250105_134632';
import * as migration_20250106_021956 from './20250106_021956';
import * as migration_20250106_155641 from './20250106_155641';
import * as migration_20250106_195405 from './20250106_195405';
import * as migration_20250107_094705 from './20250107_094705';
import * as migration_20250107_224643 from './20250107_224643';
import * as migration_20250107_225341 from './20250107_225341';
import * as migration_20250107_235053 from './20250107_235053';

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
    name: '20250106_195405',
  },
  {
    up: migration_20250107_094705.up,
    down: migration_20250107_094705.down,
    name: '20250107_094705',
  },
  {
    up: migration_20250107_224643.up,
    down: migration_20250107_224643.down,
    name: '20250107_224643',
  },
  {
    up: migration_20250107_225341.up,
    down: migration_20250107_225341.down,
    name: '20250107_225341',
  },
  {
    up: migration_20250107_235053.up,
    down: migration_20250107_235053.down,
    name: '20250107_235053'
  },
];
