import Auth from './pages/Auth'
import './App.css'
// import { DataProvider } from './context/DataContext'

function App() {
  return (
    // <div className="min-h-screen bg-brand-neutral flex">
    //   <DataProvider>
    //     <div className="max-w-[1750px] container mx-auto p-8">
    //       <Auth></Auth>
    //     </div>
    //   </DataProvider>
    // </div>

    <div className="min-h-screen bg-brand-neutral flex">
      <div className="max-w-[1750px] container mx-auto p-8">
        <Auth></Auth>
      </div>
    </div>
  );
}

export default App;
