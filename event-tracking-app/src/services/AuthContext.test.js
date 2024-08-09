import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

// A test component to consume the context
const TestComponent = () => {
    const { authInfo, setAuthInfo } = useAuth();

    return (
        <div>
            <span data-testid="auth-info">{authInfo ? authInfo.user : 'No user'}</span>
            <button onClick={() => setAuthInfo({ user: 'testUser' })}>Login</button>
        </div>
    );
};

test('useAuth should provide authInfo and setAuthInfo', () => {
    render(
        <AuthProvider>
            <TestComponent />
        </AuthProvider>
    );

    expect(screen.getByTestId('auth-info')).toHaveTextContent('No user');

    fireEvent.click(screen.getByText('Login'));

    expect(screen.getByTestId('auth-info')).toHaveTextContent('testUser');
});
