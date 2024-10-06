import React, { useState } from "react";
import { View, Text, Button, ToastAndroid } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "./app.styles";

export function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();

    calculateAge(date);
  };

  function calculateAge(birthDate) {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years >= 0) {
      let ageMessage = `Você tem ${years} anos, ${months} meses e ${days} dias.`;

      if (years <= 19) {
        ageMessage = ageMessage + " Você é Jovem 👶";
      }
      if (years <= 59 && years >= 20) {
        ageMessage = ageMessage + " Você é Adulto 👦";
      }
      if (years > 59) {
        ageMessage = ageMessage + " Você é Idoso 👴";
      }
      ToastAndroid.show(ageMessage, ToastAndroid.LONG);
    } else {
      ToastAndroid.show("Você ainda não nasceu 🤔", ToastAndroid.LONG);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule sua idade</Text>
      <View style={styles.dateContainer}>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>
          {selectedDate
            ? selectedDate.toLocaleDateString()
            : "No date selected"}
        </Text>
        <Button title="Selecione seu Aniversário" onPress={showDatePicker} />
        <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
  );
}
