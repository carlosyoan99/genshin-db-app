import { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './pages/Home'
import Characters from './pages/Characters'
import CharacterDetail from './pages/CharacterDetail'
import Weapons from './pages/Weapons'
import WeaponDetail from './pages/WeaponDetail'
import Artifacts from './pages/Artifacts'
import ArtifactDetail from './pages/ArtifactDetail'
import Enemies from './pages/Enemies'
import EnemyDetail from './pages/EnemyDetail'
import Materials from './pages/Materials'
import Elements from './pages/Elements'
import Domains from './pages/Domains'
import Foods from './pages/Foods'
import Animals from './pages/Animals'
import About from './pages/About'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:name" element={<CharacterDetail />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/weapons/:name" element={<WeaponDetail />} />
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/artifacts/:name" element={<ArtifactDetail />} />
        <Route path="/enemies" element={<Enemies />} />
        <Route path="/enemies/:name" element={<EnemyDetail />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App