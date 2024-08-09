import { trackPageView, trackSelfDescribingEvent } from '@snowplow/browser-tracker';
import { trackPageViewEvent, trackCustomEvent, fetchIpAddress } from './tracker';

jest.mock('@snowplow/browser-tracker');
global.fetch = jest.fn();

test('trackPageViewEvent should call trackPageView with the correct page name', () => {
    trackPageView.mockClear();

    trackPageViewEvent('HomePage');
    expect(trackPageView).toHaveBeenCalledWith({
        title: 'HomePage'
    });
});

test('trackCustomEvent should call trackSelfDescribingEvent with the correct event data', () => {
    trackSelfDescribingEvent.mockClear();

    trackCustomEvent('category1', 'action1', 'label1', 123);
    expect(trackSelfDescribingEvent).toHaveBeenCalledWith({
        event: {
            schema: 'iglu:com.example/generic_event/jsonschema/1-0-0',
            data: {
                category: 'category1',
                action: 'action1',
                label: 'label1',
                value: 123
            }
        }
    });
});

test('fetchIpAddress should return IP address on success', async () => {
    fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue({ ip: '123.456.789.0' })
    });

    const result = await fetchIpAddress();
    expect(result).toBe('123.456.789.0');
});

test('fetchIpAddress should return "unknown" on failure', async () => {
    fetch.mockRejectedValue(new Error('Network error'));

    const result = await fetchIpAddress();
    expect(result).toBe('unknown');
});
