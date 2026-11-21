import * as migration_20261117_124957_initial from './20261117_124957_initial';
import * as migration_20261121_120125_admin_pages_labels from './20261121_120125_admin_pages_labels';

export const migrations = [
  {
    up: migration_20261117_124957_initial.up,
    down: migration_20261117_124957_initial.down,
    name: '20261117_124957_initial',
  },
  {
    up: migration_20261121_120125_admin_pages_labels.up,
    down: migration_20261121_120125_admin_pages_labels.down,
    name: '20261121_120125_admin_pages_labels'
  },
];
