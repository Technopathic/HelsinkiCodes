import ReactPlayer from 'react-player'

const Video = (props) => (
    <div className={props.className}>
        <ReactPlayer url={props.url} width="100%"/>
    </div>
)

export default Video