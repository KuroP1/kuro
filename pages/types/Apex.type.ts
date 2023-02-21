export interface APEXStats {
    global:                  Global;
    realtime:                Realtime;
    legends:                 Legends;
    mozambiquehere_internal: MozambiquehereInternal;
    ALS:                     Als;
    total:                   Total;
}

export interface Als {
    isALSDataEnabled: boolean;
}

export interface Global {
    name:                   string;
    uid:                    number;
    avatar:                 string;
    platform:               string;
    level:                  number;
    toNextLevelPercent:     number;
    internalUpdateCount:    number;
    bans:                   Bans;
    rank:                   Arena;
    arena:                  Arena;
    battlepass:             Battlepass;
    internalParsingVersion: number;
    badges:                 Damage[];
    levelPrestige:          number;
}

export interface Arena {
    rankScore:         number;
    rankName:          string;
    rankDiv:           number;
    ladderPosPlatform: number;
    rankImg:           string;
    rankedSeason:      string;
}

export interface Damage {
    name:  string;
    value: number;
}

export interface Bans {
    isActive:         boolean;
    remainingSeconds: number;
    last_banReason:   string;
}

export interface Battlepass {
    level:   string;
    history: { [key: string]: number };
}

export interface Legends {
    selected: Selected;
    all:      All;
}

export interface All {
    Revenant:     Ash;
    Crypto:       Ash;
    Horizon:      Horizon;
    Gibraltar:    Ash;
    Wattson:      Ash;
    Fuse:         Ash;
    Bangalore:    Ash;
    Wraith:       Horizon;
    Octane:       Ash;
    Bloodhound:   Ash;
    Caustic:      Ash;
    Lifeline:     Ash;
    Pathfinder:   Pathfinder;
    Loba:         Ash;
    Mirage:       Ash;
    Rampart:      Ash;
    Valkyrie:     Valkyrie;
    Seer:         Ash;
    Ash:          Ash;
    "Mad Maggie": Ash;
    Newcastle:    Ash;
    Vantage:      Ash;
    Catalyst:     Ash;
}

export interface Ash {
    ImgAssets: ImgAssets;
}

export interface ImgAssets {
    icon:   string;
    banner: string;
}

export interface Horizon {
    data:      HorizonDatum[];
    gameInfo:  HorizonGameInfo;
    ImgAssets: ImgAssets;
}

export interface HorizonDatum {
    name:                 string;
    value:                number;
    key:                  string;
    rank:                 Rank;
    rankPlatformSpecific: Rank;
}

export interface Rank {
    rankPos:    number;
    topPercent: number;
}

export interface HorizonGameInfo {
    badges: Damage[];
}

export interface Pathfinder {
    data:      PathfinderDatum[];
    gameInfo:  HorizonGameInfo;
    ImgAssets: ImgAssets;
}

export interface PathfinderDatum {
    name:                 string;
    value:                number;
    key:                  string;
    rank:                 Rank;
    rankPlatformSpecific: PurpleRankPlatformSpecific;
}

export interface PurpleRankPlatformSpecific {
    rankPos:    number | string;
    topPercent: number | string;
}

export interface Valkyrie {
    data:      ValkyrieDatum[];
    ImgAssets: ImgAssets;
}

export interface ValkyrieDatum {
    name:                 string;
    value:                number;
    key:                  string;
    rank:                 Rank;
    rankPlatformSpecific: FluffyRankPlatformSpecific;
}

export interface FluffyRankPlatformSpecific {
    rankPos:    string;
    topPercent: string;
}

export interface Selected {
    LegendName: string;
    data:       SelectedDatum[];
    gameInfo:   SelectedGameInfo;
    ImgAssets:  ImgAssets;
}

export interface SelectedDatum {
    name:   string;
    value:  number;
    key:    string;
    global: boolean;
}

export interface SelectedGameInfo {
    skin:        string;
    skinRarity:  string;
    frame:       string;
    frameRarity: string;
    pose:        string;
    poseRarity:  string;
    intro:       string;
    introRarity: string;
    badges:      Badge[];
}

export interface Badge {
    name:     string;
    value:    number;
    category: string;
}

export interface MozambiquehereInternal {
    isNewToDB:     boolean;
    claimedBy:     string;
    APIAccessType: string;
    ClusterID:     string;
    rate_limit:    RateLimit;
    clusterSrv:    string;
}

export interface RateLimit {
    max_per_second: number;
    current_req:    null;
}

export interface Realtime {
    lobbyState:                 string;
    isOnline:                   number;
    isInGame:                   number;
    canJoin:                    number;
    partyFull:                  number;
    selectedLegend:             string;
    currentState:               string;
    currentStateSinceTimestamp: number;
    currentStateAsText:         string;
}

export interface Total {
    damage:                  Damage;
    teammates_lifted:        Damage;
    specialEvent_kills:      Damage;
    specialEvent_damage:     Damage;
    specialEvent_wins:       Damage;
    kills:                   Damage;
    wins_season_1:           Damage;
    wins_season_13:          Damage;
    kills_season_13:         Damage;
    grapple_travel_distance: Damage;
    kd:                      Kd;
}

export interface Kd {
    value: string;
    name:  string;
}
