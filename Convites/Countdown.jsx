import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const Countdown = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(eventDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      setTimeLeft(timeLeft);
    };

    const timer = setInterval(() => calculateTimeLeft(), 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <View>
      <Text>{`${timeLeft.days} dias ${timeLeft.hours} horas ${timeLeft.minutes} minutos ${timeLeft.seconds} segundos`}</Text>
    </View>
  );
};

export default Countdown;
