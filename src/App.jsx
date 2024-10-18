import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import VideouUpload from './components/VideouUpload'
import './App.css'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)
  const [videoId,setVideoId]=useState("2cfd37df-99a8-4340-9711-cd1625a0d095");

  return (
    <>
    <Toaster/>
     <div className="flex flex-col items-center space-y-6 justify-center py-8">
      <h1 className="text-3xl font-extrabold text-gray-700 dark:text-gray-100"> Vedio streaming application</h1>
    <div className='flex mt-14 w-full justify-around'>
    <div>
      <h1 className="text-3xl font-extrabold text-gray-700 dark:text-gray-100">Playing video</h1>
      {/* <video  style={{
        width:500,
      }} src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`} controls>

      </video> */}

<video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    
    
    data-setup="{}"
  >
    <source src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`}  type="video/mp4" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a>
    </p>
  </video>



     </div>
     
      <VideouUpload/>
     </div>
    </div>
    </>
  )
}

export default App
