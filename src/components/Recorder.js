
import './Recorder.css'

import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import { saveAs } from 'file-saver';

function Recorder() {


    const [isRecording, setIsRecording] = useState(false);
    const [recordedBlob, setRecordedBlob] = useState(null);

    const startRecording = () => {
        setIsRecording(true);
    };

    const stopRecording = () => {
        setIsRecording(false);
    };

    const onData = (recordedBlob) => {
        console.log('chunk of real-time data is: ', recordedBlob);
    };

    const onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
        setRecordedBlob(recordedBlob);
    };
    const saveRecording = () => {
        if (recordedBlob) {
            const blob = new Blob([recordedBlob.blob], { type: 'audio/wav' });
            saveAs(blob, 'recorded_audio.wav');
        }
    };


    return (
        <div>
            <p className='mic'    > <ReactMic
                record={isRecording}
                onStop={onStop}
                onData={onData}
                mimeType="audio/wav"
            /></p>

            <div className="container-fluid main   ">
                <div className="row pt-5 ">
                    <div className="col-md-7 text-center">
                        <p>SS`s</p>
                        <div className=" highlight display-2">Free Online Voice Recorder</div>
                        <p> High Quality ,<span>Streo</span>, Enhanced  </p>
                    </div>
                    <div className="col-md-5   text-center " >

                        <p>

                            <button className={isRecording ? 'start-btn' : 'stop-btn'} ></button>

                        </p>
                        <p>Just Click To Start</p>
                        <p>
                            <button className='btn-primary btn' onClick={startRecording} >Start</button>
                            <button className='btn-danger btn' onClick={stopRecording} >Stop</button>
                            <button className='btn-info btn' onClick={saveRecording} disabled={!recordedBlob} >Save Recording</button>
                        </p>

                    </div>
                </div>

            </div>

            <main className='text' >

                <div className="h1 text-center center ">Online Voice Recorder</div>

                <div className='text-center' >
                    <p>Fast ,Free ,Enhaced Engine </p>
                    <p> Quick Start </p>
                    <p> Instantely Save In Your System </p>
                    <p></p>
                </div>



            </main>

            <footer>
                <p className='text-center' >Copyright © 2023 Tool By SS | Product of SS</p>
            </footer>

        </div>
    )
}

export default Recorder