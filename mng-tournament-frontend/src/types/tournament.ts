export interface Organizer {
  id: number
  organizationName: string
  email: string
  website: string
  status: boolean
  created?: string
  modified?: string
}

export interface Team {
  id: number
  teamName: string
  logoUrl: string
  status: boolean
  created?: string
  modified?: string
}

export interface Player {
  id: number
  gamertag: string
  email: string
  rank: string
  status: boolean
  team: number
  created?: string
  modified?: string
}

export interface Tournament {
  id: number
  gameName: string
  tournamentTitle: string
  virtualPrize: string
  maxParticipants: number
  eventDate: string
  status: boolean
  organizer: number
  created?: string
  modified?: string
}

export interface PlayerTournament {
  id: number
  score: number
  finalPosition: number
  status: boolean
  player: number
  tournament: number
  created?: string
  modified?: string
}
