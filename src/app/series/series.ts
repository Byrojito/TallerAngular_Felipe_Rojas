export class Series {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;      // En el JSON es "webpage"
  poster: string;     // En el JSON es "poster"

  constructor(
    id: number,
    name: string,
    channel: string,
    seasons: number,
    description: string,
    webpage: string,    // Cambiar si es necesario
    poster: string    // Cambiar si es necesario
  ) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.webpage = webpage;
    this.poster = poster;
  }
}