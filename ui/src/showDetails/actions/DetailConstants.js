/**
 * Show Details Action Constants
 */
export const ShowDetailsConstants = {
  GET_SHOW_DETAILS: 'GET_SHOW_DETAILS',
  TvShowMoreConstants: {
    popularity: 'Popularity',
    production_companies: 'Production Companies',
    production_countries: 'Production Countries',
    revenue: 'Total Revenue',
    vote_count: 'Vote Count',
    tagline: 'Tagline',
    title: 'Title',
  },
  TvShowConstants: {
    overview: 'Overview',
    runtime: 'Duration in Minutes',
    release_date: 'Release Date',
    vote_average: 'Rating',
    status: 'Status',
  }
};

/**
   * Columns created for the showing movie details data.
   */
export const Tablecolumns = [
  {
    dataIndex: 'columName',
    key: 'columName',
  },
  {
    dataIndex: 'value',
    key: 'value',
  }
];