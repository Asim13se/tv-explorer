import React from 'react';
import './App.css';
import FilmSeriesExplorer from "./components/app/FilmSeriesExplorer/FilmSeriesExplorer";
import getStyle from "./utils/getStyle";
import data from "./assets/data.json";

function App() {
  return (
    <div className="App">
      <FilmSeriesExplorer
        filmSeries={data.filmSeriesList[0]}
        style={styles.filmSeriesExplorer}
      />
    </div>
  );
}

const styles = getStyle({
  filmSeriesExplorer: {
    marginTop: 50,
    marginLeft: 30,
    marginInlineStart: 30,
  }
})

export default App;
