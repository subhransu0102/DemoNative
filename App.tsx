import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import ABC from './CustomModule';


const App = () => {

  const [deviceId, setDeviceId] = useState('');

  useEffect(() => {

    const fetchDeviceId = async () => {

        const id = await getDeviceID(deviceId);
        setDeviceId(id);

    };
    fetchDeviceId();

  }, []);

  ABC.show();

  return (
    <>
      <Text>Demo android native</Text>
      <Text>device id{deviceId}</Text>
      

    </>

  )
}

export default App