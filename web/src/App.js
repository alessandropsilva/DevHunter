import React, { useState, useEffect} from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])
  
  async function handleAddDev(e) {
    e.preventDefault()
  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastro</strong>
        <form onSubmit= {handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input required name="github_username" id="github_username" value={github_username}
              onChange = {e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input required name="techs " id="techs" value={techs}
              onChange = {e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude}
                onChange = {e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} 
                onChange = {e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://i.pinimg.com/236x/31/f3/27/31f32713e633f7ee7f2ed2a07ad767c5--for-cats-ironman.jpg" alt="IronCatMan"/>
              <div className="user-info">
                <strong>Alessandro P Silva</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Dev JS FullStack</p>
            <a href="http://github.com/alessandropsilva">GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://i.pinimg.com/236x/31/f3/27/31f32713e633f7ee7f2ed2a07ad767c5--for-cats-ironman.jpg" alt="IronCatMan"/>
              <div className="user-info">
                <strong>Alessandro P Silva</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Dev JS FullStack</p>
            <a href="http://github.com/alessandropsilva">GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://i.pinimg.com/236x/31/f3/27/31f32713e633f7ee7f2ed2a07ad767c5--for-cats-ironman.jpg" alt="IronCatMan"/>
              <div className="user-info">
                <strong>Alessandro P Silva</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Dev JS FullStack</p>
            <a href="http://github.com/alessandropsilva">GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://i.pinimg.com/236x/31/f3/27/31f32713e633f7ee7f2ed2a07ad767c5--for-cats-ironman.jpg" alt="IronCatMan"/>
              <div className="user-info">
                <strong>Alessandro P Silva</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Dev JS FullStack</p>
            <a href="http://github.com/alessandropsilva">GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://i.pinimg.com/236x/31/f3/27/31f32713e633f7ee7f2ed2a07ad767c5--for-cats-ironman.jpg" alt="IronCatMan"/>
              <div className="user-info">
                <strong>Alessandro P Silva</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Dev JS FullStack</p>
            <a href="http://github.com/alessandropsilva">GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App;
