import React, { useState, useMemo } from 'react';
import { DatePickerIOS } from 'react-native';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './DateInput_Styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(() => format(date, "MMMM dd ',' YYYY", { locale: enUS }), [date]);

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locale="en"
            mode="date"
          />
        </Picker>
      )}
    </Container>
  );
}
