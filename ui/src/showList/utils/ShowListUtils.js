/**
 * Method used to filter the movie list data based on the user entered text
 * @param {*} movieListsDataUI
 * @param {*} movieListsData
 */
// export const showDetailsOfSearchedMovies = (movieListsDataUI, movieListsData) => {
//   let movieTitle = '';
//   const modalTableDisplayData = [];
//   let count = 0;
//   // if entered text exists and movie list data exists
//   if (movieListsDataUI && movieListsDataUI.searched_value && movieListsData && Object.keys(movieListsData).length > 0) {
//     Object.values(movieListsData).map((item) => {
//       if (item && item.title) { // for each item if there exists title for the movie
//         movieTitle = (item.title.toLowerCase()).search(movieListsDataUI.searched_value.toLowerCase()) !== -1; // search for the entered text in the list data.
//       }
//       // if found any title matched with the entered text
//       if (movieTitle) {
//         // create table data to display in the modal popup.
//         modalTableDisplayData.push({
//           count: ++count,
//           title: item.title,
//           showId: item.show_id,
//           description: item.description,
//           type: item.type,
//         });
//       }
//       return item;
//     });
//   }
//   return modalTableDisplayData;
// }
