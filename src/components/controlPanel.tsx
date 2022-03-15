import React,{ useState } from 'react';
import {
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
} from "@100mslive/react-sdk";
const Control = (props: any) => {
    const [isAudioOn, setIsAudioOn] = useState(useHMSStore(selectIsLocalAudioEnabled));
    const [isVideoOn, setIsVideoOn] = useState(useHMSStore(selectIsLocalVideoEnabled));
    const hmsActions = useHMSActions();

    // leave the room
    const leaveRoom = () => {
        hmsActions.leave();
    }
    //toggle local audio
    const toggleLocalAudio = async () => {
      await hmsActions.setLocalAudioEnabled(!isAudioOn);
        setIsAudioOn(!isAudioOn);
    }
    //toggle local video
    const toggleLocalVideo = async () => {
        await hmsActions.setLocalVideoEnabled(!isVideoOn);
        setIsVideoOn(!isVideoOn);
    }
    /**
     * Local Peer Control Panel
     */
    return (
        <div className="callingControl">
        <div className="rowSpace">
            <button className='button leaveButton' onClick={leaveRoom}>Leave Call</button>
            <button className='button leaveButton' onClick={toggleLocalAudio}>{isAudioOn?'Mute':'Unmute'}</button>
            <button className='button leaveButton' onClick={toggleLocalVideo}>{isVideoOn?'Off Video':'On Video'}</button>
        </div>
        </div>
    );
}

export default Control;