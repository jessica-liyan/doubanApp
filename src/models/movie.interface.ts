export interface MovieDetail{
  id: string;
  title: string;
  images: object;
  countries: Array<string>;
  genres: Array<string>;
  collect_count: number;
}
export interface Movie{
  id: string;
  title: string;
  images: object;
}