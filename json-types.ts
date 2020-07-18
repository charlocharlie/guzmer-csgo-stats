// Generated by https://quicktype.io

export interface DemoJson {
  id: string;
  name: string;
  stringWithoutExtension: string;
  date: string;
  source: string;
  comment: string;
  status: string;
  client_name: string;
  hostname: string;
  type: string;
  tickrate: number;
  server_tickrate: number;
  duration: number;
  ticks: number;
  map_name: string;
  path: string;
  cheater_count: number;
  score_team1: number;
  score_team2: number;
  score_half1_team1: number;
  score_half1_team2: number;
  score_half2_team1: number;
  score_half2_team2: number;
  '5k_count': number;
  '4k_count': number;
  '3k_count': number;
  '2k_count': number;
  '1k_count': number;
  team_ct: Team;
  team_t: Team;
  team_surrender: Team | null;
  team_winner: Team | null;
  rounds: Round[];
  players: Player[];
  most_killing_weapon: Weapon;
  overtimes: any[];
  most_headshot_player: Player;
  most_bomb_planted_player: Player;
  most_entry_kill: Player;
  bomb_planted: BombPlanted[];
  bomb_defused: BombDefused[];
  bomb_exploded: BombPlanted[];
  kills: Kill[];
  weapon_fired: any[];
  player_blinded_events: any[];
  player_hurted: PlayerHurted[];
  kill_count: number;
  clutch_count: number;
  trade_kill_count: number;
  bomb_defused_count: number;
  bomb_planted_count: number;
  bomb_exploded_count: number;
  flashbang_thrown_count: number;
  smoke_thrown_count: number;
  he_thrown_count: number;
  decoy_thrown_count: number;
  molotov_thrown_count: number;
  incendiary_thrown_count: number;
  decoys: UtilityInfo[];
  incendiaries: UtilityInfo[];
  molotovs: UtilityInfo[];
  damage_health_count: number;
  damage_armor_count: number;
  average_health_damage: number;
  kill_per_round: number;
  assist_per_round: number;
  jump_kill_count: number;
  crouch_kill_count: number;
  headshot_count: number;
  death_count: number;
  assist_count: number;
  entry_kill_count: number;
  knife_kill_count: number;
  mvp_count: number;
  teamkill_count: number;
  death_per_round: number;
  clutch_lost_count: number;
  clutch_won_count: number;
  shot_count: number;
  hit_count: number;
  average_hltv_rating: number;
  average_esea_rws: number;
  chat_messages: any[];
}

export interface BombDefused {
  defuser_steamid: string;
  defuser_name: string;
  site: Site;
  tick: number;
  seconds: number;
}

export enum Site {
  A = 'A',
  B = 'B',
}

// From https://github.com/akiver/CSGO-Demos-Manager/blob/master/Core/Models/Round.cs
export enum RoundType {
  ECO = 0,
  SEMI_ECO = 1,
  NORMAL = 2,
  FORCE_BUY = 3,
  PISTOL_ROUND = 4,
}

export interface BombPlanted {
  site: Site;
  planter_steamid: string;
  planter_name: string;
  tick: number;
  seconds: number;
}

export interface UtilityInfo {
  thrower_steamid: string;
  thrower_name: string;
  thrower_side: Side;
  heatmap_point: HeatmapPoint;
  round_number: number;
  tick: number;
  seconds: number;
  flashed_players_steamid?: string[];
}

export interface HeatmapPoint {
  X: number;
  Y: number;
}

export enum Side {
  CT = 'CT',
  Empty = '',
  T = 'T',
}

export interface Kill {
  killer_steamid: string;
  killed_steamid: string;
  assister_steamid: string;
  weapon: Weapon;
  heatmap_point: KillHeatmapPoint;
  killer_vel_x: number;
  killer_vel_y: number;
  killer_vel_z: number;
  killer_side: Side;
  killer_team: string;
  killed_side: Side;
  killed_team: string;
  killer_name: string;
  killed_name: string;
  assister_name: string | null;
  round_number: number;
  time_death_seconds: number;
  killer_crouching: boolean;
  killer_blinded: boolean;
  is_trade_kill: boolean;
  is_headshot: boolean;
  killer_is_controlling_bot: boolean;
  killed_is_controlling_bot: boolean;
  victim_blinded: boolean;
  assister_is_controlling_bot: boolean;
  tick: number;
  seconds: number;
}

export interface KillHeatmapPoint {
  killer_x: number;
  killer_y: number;
  victim_x: number;
  victim_y: number;
  X: number;
  Y: number;
}

export interface Weapon {
  element: number;
  type: WeaponType;
  weapon_name: Weaponstring;
}

// From https://github.com/akiver/CSGO-Demos-Manager/blob/master/Core/Models/Weapon.cs
export enum WeaponType {
  Pistol = 1,
  Rifle = 2,
  Sniper = 3,
  SMG = 4,
  Heavy = 5,
  Equipment = 6,
  Grenade = 7,
  Unkown = 8,
}

export enum Weaponstring {
  AK_47 = 'AK-47',
  AUG = 'AUG',
  M4A4 = 'M4A4',
  FAMAS = 'Famas',
  AWP = 'AWP',
  M4A1_S = 'M4A1-S',
  GLOCK = 'Glock-18',
  USP = 'USP-S',
  DEAGLE = 'Desert Eagle',
  P250 = 'P250',
  GALIL = 'Galil AR',
  SG008 = 'SG008',
  PP_BIZON = 'PP-Bizon',
  C4 = 'C4',
  CZ75 = 'CZ75-Auto',
  DUAL_BERETTAS = 'Dual Berettas',
  FIVE_SEVEN = 'Five-SeveN',
  G3SG1 = 'G3SG1',
  KNIFE = 'Knife',
  M249 = 'M249',
  MP7 = 'MP7',
  MP9 = 'MP9',
  MAC_10 = 'MAC-10',
  NEGEV = 'Negev',
  NOVA = 'Nova',
  XM1014 = 'XM1014',
  P2000 = 'P2000',
  P90 = 'P90',
  SG_553 = 'SG 553',
  SAWED_OFF = 'Sawed-Off',
  SCAR_20 = 'Scar-20',
  SSG_08 = 'SSG 08',
  MAG_7 = 'MAG-7',
  TEC_9 = 'Tec-9',
  UMP_45 = 'UMP-45',
  R8 = 'R8 Revolver',
  ZEUS = 'Zeus (Tazer)',
  FLASHBANG = 'Flashbang',
  HE = 'HE Grenade',
  SMOKE = 'Smoke',
  DECOY = 'Decoy',
  MOLOTOV = 'Molotov',
  INCENDIARY = 'Incendiary',
  KEVLAR = 'Kevlar',
  HELMET = 'Helmet',
  DEFUSE_KIT = 'Defuse Kit',
  WORLD = 'World',
  UNKNOWN = 'Unknown',
}

export interface Player {
  $id?: string;
  steamid: string;
  name: string;
  kill_count: number;
  crouch_kill_count: number;
  jump_kill_count: number;
  score: number;
  tk_count: number;
  assist_count: number;
  trade_kill_count: number;
  trade_death_count: number;
  bomb_planted_count: number;
  bomb_defused_count: number;
  bomb_exploded_count: number;
  death_count: number;
  '5k_count': number;
  '4k_count': number;
  '3k_count': number;
  '2k_count': number;
  '1k_count': number;
  hs_count: number;
  kd: number;
  mvp_count: number;
  hltv_rating: number;
  esea_rws: number;
  shot_count: number;
  hit_count: number;
  is_vac_banned: boolean;
  is_ow_banned: boolean;
  flashbang_count: number;
  smoke_count: number;
  he_count: number;
  molotov_count: number;
  incendiary_count: number;
  decoy_count: number;
  round_count: number;
  team_name: string;
  start_money_rounds: { [key: string]: number };
  equipement_value_rounds: { [key: string]: number };
  rounds_money_earned: { [key: string]: number };
  time_death_rounds: { [key: string]: number };
  entry_kills: EntryKill[];
  entry_hold_kills: EntryKill[];
  kills: Kill[];
  deaths: Kill[];
  assits: Kill[];
  players_hurted: PlayerHurted[];
  clutches: Clutch[];
  rank_old: number;
  rank_new: number;
  win_count: number;
  entry_kill_won_count: number;
  entry_kill_loss_count: number;
  entry_hold_kill_won_count: number;
  entry_hold_kill_loss_count: number;
  clutch_count: number;
  clutch_loss_count: number;
  clutch_won_count: number;
  '1v1_won_count': number;
  '1v2_won_count': number;
  '1v3_won_count': number;
  '1v4_won_count': number;
  '1v5_won_count': number;
  '1v1_loss_count': number;
  '1v2_loss_count': number;
  '1v3_loss_count': number;
  '1v4_loss_count': number;
  '1v5_loss_count': number;
  '1v1_count': number;
  '1v2_count': number;
  '1v3_count': number;
  '1v4_count': number;
  '1v5_count': number;
  suicide_count: number;
  total_damage_health_done: number;
  total_damage_armor_done: number;
  total_damage_health_received: number;
  total_damage_armor_received: number;
  average_health_damage: number;
  kill_per_round: number;
  assist_per_round: number;
  death_per_round: number;
  total_time_death: number;
  avg_time_death: number;
}

export interface Clutch {
  opponent_count: number;
  has_won: boolean;
  round_number: number;
  tick: number;
  seconds: number;
}

export interface EntryKill {
  round_number: number;
  killer_steamid: string;
  killer_name: string;
  killer_side: Side;
  killed_steamid: string;
  killed_name: string;
  killed_side: Side;
  weapon: Weapon;
  has_won: boolean;
  has_won_round: boolean;
  tick: number;
  seconds: number;
}

export interface PlayerHurted {
  hurted_steamid: string;
  attacker_steamid: string;
  attacker_side: Side;
  armor_damage: number;
  health_damage: number;
  hitgroup: number;
  weapon: Weapon;
  round_number: number;
  tick: number;
  seconds: number;
}

export interface Round {
  number: number;
  tick: number;
  end_tick: number;
  end_tick_officially: number;
  freezetime_end_tick: number;
  end_reason: string;
  kills: Kill[];
  winner_side: Side;
  winner_name: string;
  team_t_name: string;
  team_ct_name: string;
  kill_count: number;
  '5k_count': number;
  '4k_count': number;
  '3k_count': number;
  '2k_count': number;
  '1k_count': number;
  jump_kill_count: number;
  crouch_kill_count: number;
  trade_kill_count: number;
  equipement_value_team_t: number;
  equipement_value_team_ct: number;
  start_money_team_t: number;
  start_money_team_ct: number;
  bomb_defused_count: number;
  bomb_exploded_count: number;
  bomb_planted_count: number;
  entry_kill: EntryKill | null;
  entry_hold_kill: EntryKill | null;
  bomb_planted: BombPlanted | null;
  bomb_defused: BombDefused | null;
  bomb_exploded: BombPlanted | null;
  type: RoundType;
  team_trouble_name: string | null;
  side_trouble: Side;
  flashbang_thrown_count: number;
  smoke_thrown_count: number;
  he_thrown_count: number;
  decoy_thrown_count: number;
  molotov_thrown_count: number;
  incendiary_thrown_count: number;
  players_hurted: PlayerHurted[];
  weapon_fired: WeaponFired[];
  duration: number;
  damage_health_count: number;
  damage_armor_count: number;
  average_health_damage_per_player: number;
  flashbangs_exploded: UtilityInfo[];
  smokes_started: UtilityInfo[];
  he_exploded: UtilityInfo[];
}

export interface WeaponFired {
  heatmap_point: HeatmapPoint;
  shooter_steamid: string;
  shooter_name: string;
  shooter_side: Side;
  weapon: Weapon;
  round_number: number;
  shooter_vel_x: number;
  shooter_vel_y: number;
  shooter_vel_z: number;
  shooter_pos_x: number;
  shooter_pos_y: number;
  shooter_pos_z: number;
  shooter_angle_pitch: number;
  shooter_angle_yaw: number;
  tick: number;
  seconds: number;
}

export interface Team {
  team_name: string;
  score: number;
  score_first_half: number;
  score_second_half: number;
  team_players: Player[];
  $id?: string;
}
