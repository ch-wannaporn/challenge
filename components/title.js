import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef } from "react";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
    ssr: false
});

const Title = (props) => {
    const file = useRef(null);

    return (<div className="inline-flex justify-center gap-x-12 h-fit">
        <div className="relative flex-none shadow-lg text-center rounded-lg overflow-hidden w-48 mx-auto" data-tip="Edit image">
            <Image className="object-cover h-48 w-full cursor-pointer hover:brightness-90"
                src={props.current.img ? "/uploads/" + props.current.img : "/playlist_profile.jpg"}
                onClick={e => file.current.click()} 
                layout="fill" priority="false"/>
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
            <h3 className="w-full text-xl text-gray-500">Total {props.total} track(s)</h3>
            <div className="w-full inline-flex">
                <input className="w-full border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none" placeholder="Search..." />
                <button className="flex-none bg-green-500 hover:bg-green-600 border border-green-500 text-white rounded-md rounded-l-none py-2 px-4">Add track</button>
            </div>
        </div>
    </div>)
}

export default Title;