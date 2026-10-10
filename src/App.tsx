import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import PokemonList from './pages/PokemonList.tsx';
import PokemonDetail from './pages/PokemonDetail.tsx';

const App: React.FC = () => {
  return(
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
      <Route path="*" element={
        <div className="p-4">
          <h2 className="text-xl">ページが見つかりません</h2>
          <Link to="/" className="mt-3 inline-block text-blue-500 underline">一覧に戻る</Link>
        </div>
      } />
    </Routes>
  );
};

export default App;