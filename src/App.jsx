import './App.css'

function StatusBadge({ isOpenToWork }) {
  return (
    <span className={isOpenToWork ? 'badge open' : 'badge busy'}>
      {isOpenToWork ? 'Open to work' : 'Busy learning'}
    </span>
  )
}

function App() {
  return (
    <div className="profile">
      <h1>Viphou</h1>
      <p>Goal: build one small React project every week.</p>
      <StatusBadge isOpenToWork={false} />
    </div>
  )
}

export default App
