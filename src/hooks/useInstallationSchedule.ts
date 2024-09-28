// src/hooks/useInstallationSchedule.ts

import { useState, useEffect } from 'react';
import { Schedule } from '../types/Job';
import dayjs from 'dayjs';

export const useInstallationSchedule = (initialSchedule?: Schedule) => {
  const [schedule, setSchedule] = useState<Schedule>({
    date: null,
    timeSlot: '',
  });

  useEffect(() => {
    if (initialSchedule) {
      setSchedule(initialSchedule);
    }
  }, [initialSchedule]);

  const updateSchedule = (field: keyof Schedule, value: any) => {
    setSchedule((prev: Schedule) => ({ ...prev, [field]: value }));
  };

  const getFormattedStartTime = () => {
    if (!schedule.date) return null;
    return dayjs(schedule.date).toDate();
  };

  const getFormattedEndTime = () => {
    const startTime = getFormattedStartTime();
    if (!startTime) return null;
    return dayjs(startTime).add(3, 'hour').toDate(); // Default duration to 3 hours
  };

  const isValidSchedule = () => {
    return schedule.date !== null && schedule.timeSlot !== '';
  };

  const getScheduleForBackend = (): Schedule => {
    return {
      ...schedule,
      date: schedule.date ? schedule.date : null,
    };
  };

  return {
    schedule,
    updateSchedule,
    getFormattedStartTime,
    getFormattedEndTime,
    isValidSchedule,
    getScheduleForBackend,
  };
};