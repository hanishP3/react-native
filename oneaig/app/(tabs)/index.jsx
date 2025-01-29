import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";

const Index = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleClick = () => {
    setDisplayValue(selectedValue || "None");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainheading}>Form</Text>
        <Text style={styles.h2heading}>Select an option</Text>

        <RNPickerSelect
          onValueChange={(value) => setSelectedValue(value)}
          items={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ]}
          style={{
            inputIOS: styles.input,
            inputAndroid: styles.input,
          }}
        />

        <Text style={styles.resultText}>Selected: {selectedValue || "None"}</Text>

        <Button title="Click Me" onPress={handleClick} color="#007bff" />

        {displayValue && (
          <Text style={styles.displayText}>You clicked: {displayValue}</Text>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center'
  },
  mainheading: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center',
  },
  h2heading: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: 'white'
  },
  resultText: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  displayText: {
    marginTop: 10,
    fontSize: 16,
    color: 'yellow',
    textAlign: 'center',
  },
});

export default Index;
