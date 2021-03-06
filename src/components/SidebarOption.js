import React from 'react'
import "./SidebarOption.css";
import { useHistory } from 'react-router';
import db from '../firebase';

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {

    const history = useHistory();

    const addChannel = () => {
        const channelName = prompt('Please Enter The Channel Name : ')
        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }
    }
    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`);
        }
        else {
            history.push(title);
        }
    }
    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {
                Icon && <Icon className="sidebarOption__icon" />
            }
            {
                Icon ? (
                    <h3 >{title}</h3>
                ) : (
                    <h3 className="sidebarOption__channel">
                        <span className="sidebarOption__hash">#</span>
                        {title}
                    </h3>
                )
            }
        </div>
    )
}

export default SidebarOption
