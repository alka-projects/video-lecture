import React from 'react'
import { Container } from 'react-bootstrap'
import '../ComponentCss/PlayLecture.css'
import ReactPlayer from 'react-player'

function PlayLecture() {
    return (
        <Container className='mar'>
            {/* <video width="320" height="240" controls>
                
                <source src="https://www.youtube.com/watch?v=-AhMT2N5JOA&list=PLEVDNf7p-wYxzjfAZ29MTmgJ7pBj_0__8&index=15" type='video/x-matroska; codecs="theora, vorbis"' autoplay controls onerror="failed(event)"  />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
        </video> */}
        <iframe src='https://drive.google.com/file/d/1zPARjQAaspu7tYrWiXFVh8Rds4TjFBaY/preview' allowfullscreen='true' frameborder='0'></iframe>
        <iframe src='https://drive.google.com/file/d/1N7VmxA5PHsNTsYb-dWlchjiXdcbGI2nb/preview' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
picture-in-picture" allowfullscreen='true'></iframe>
        <ReactPlayer 
            url='https://drive.google.com/file/d/1zPARjQAaspu7tYrWiXFVh8Rds4TjFBaY/preview'  
            onReady={()=> console.log('onReady callback')}
            onStart={()=> console.log('onStart callback')}
            onError={()=> console.log('onError callback')}
        />
        <ReactPlayer url='https://www.youtube.com/watch?v=7sDY4m8KNLc'
        onReady={()=> console.log('onReady callback')}
        onStart={()=> console.log('onStart callback')}
        onError={()=> console.log('onError callback')}
         />
        
        </Container>
    )
}

export default PlayLecture
