import { newTracker, trackPageView, trackSelfDescribingEvent } from '@snowplow/browser-tracker';

// Initialize the tracker
const tracker = newTracker('myTracker', 'http://localhost:9090', {
  appId: 'event-track',
  platform: 'web',
});

export const trackPageViewEvent = (pageName) => {
    trackPageView({
      title: pageName
    });
};

export const trackCustomEvent = (category, action, label = null, value = null) => {
  trackSelfDescribingEvent({
    event: {
      schema: 'iglu:com.example/generic_event/jsonschema/1-0-0',
      data: {
        category,
        action,
        label,
        value
      }
    }
  });
};

export const fetchIpAddress = async () => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return 'unknown';
    }
};