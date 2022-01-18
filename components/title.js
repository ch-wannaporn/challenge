import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import Select from 'react-select';

const ReactTooltip = dynamic(() => import("react-tooltip"), {
    ssr: false
});

const Title = (props) => {
    const file = useRef(null);
    const [track, setTrack] = useState(null);

    return (<div className="inline-flex justify-center gap-x-12 h-fit">
        <div className="relative flex-none shadow-lg text-center rounded-lg overflow-hidden w-48 mx-auto" data-tip="Edit image">
            <Image className="object-cover h-48 w-full cursor-pointer hover:brightness-90"
                src={props.current.img ? "/uploads/" + props.current.img : "/playlist_profile.jpg"}
                onClick={e => file.current.click()}
                layout="fill" priority="false" />
            <input type="file" id="file" name="file" accept="image/*" ref={file} className="hidden" onChange={e => {
                props.setcurrentimg(e.target.files[0]);
                file.current.value = null;
            }} />
        </div>
        <ReactTooltip />
        <div className="flex flex-row flex-wrap items-end h-48">
            <h1 className="w-full text-6xl font-medium text-gray-600 inline-flex items-end decoration-2 underline-offset-2 hover:underline focus:outline-none"
                contentEditable
                suppressContentEditableWarning={true}
                onBlur={e => props.setcurrentname(e.target.innerHTML)}>{props.current.name}</h1>
            <h3 className="w-full text-xl text-gray-500 inline-flex items-center"><span>Total {props.total} track(s)</span><button onClick={e => props.deleteplaylist()} className="bg-gray-400 hover:bg-gray-500 text-white py-1 px-2 text-sm rounded ml-2">Delete this playlist</button></h3>
            <div className="w-full inline-flex">
                <Select
                    id="select-song" instanceId="select-song"
                    options={props.options} className="w-full"
                    onInputChange={val => { props.searchtracks(val) }}
                    styles={{
                        menuList: base => ({
                            ...base,
                            maxHeight: "12rem"
                        })
                    }}
                    onChange={val => {setTrack(val)}}
                    isClearable="true" />
                <button className="flex-none bg-green-500 hover:bg-green-600 border border-green-500 text-white rounded-md px-2 ml-1" onClick={e => props.addtrack(track)}>Add track</button>
            </div>
        </div>
    </div>)
}

export default Title;