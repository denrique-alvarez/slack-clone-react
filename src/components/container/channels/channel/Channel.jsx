import "./Channel.css";

export const Channel = ({ name, index, handleClickChannel }) => {
  return (
      <li className="channel" key={ index } onClick={ handleClickChannel }>
        <p className="channel-name">#{ name }</p>
      </li>
  );
};
