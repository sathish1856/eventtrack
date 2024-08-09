import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';
import './Loader.css';

test('Loader component should render correctly', () => {
    const { container } = render(<Loader />);
    expect(container.querySelector('.loader-container')).toBeInTheDocument();
    expect(container.querySelector('.loader')).toBeInTheDocument();
});
