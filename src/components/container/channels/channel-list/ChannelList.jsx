import "./ChannelList.css";

import React from "react";
import { Channel } from "../channel/Channel";
import useFetch from "../../../../hooks/useFetch";
import { URL } from '../../../../config';
// import { useEffect, useState } from "react";

export const ChannelList = () => {

  const url = `${URL}channels`;
  const { data, error, loading }  = useFetch(url);

  if (loading) return <p> Loading...</p>;
  if (error) return <p> We have a problem. Try again later!</p>;

  return (
    <div className="channels">
      <ul className="channels-list">
        {data ? data.data.map((item) => {
          return <Channel name={ item.attributes.channelName } key={ item.id } handleClickChannel={() => {console.log('From the channel function')}}/>
        }) : <div>Please refresh</div>}
      </ul>
    </div>
  );
};
