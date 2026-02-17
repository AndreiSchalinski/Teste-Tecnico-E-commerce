"use client";

import React from 'react';
import { Snackbar, Alert, AlertColor } from '@mui/material';

interface FeedbackToastProps {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose: () => void;
}

export default function FeedbackToast({ open, message, severity, onClose }: FeedbackToastProps) {
  return (
    <Snackbar 
      open={open} 
      autoHideDuration={3000} 
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}