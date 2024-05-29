const { createElement } = React;

function Widget() {
    return createElement(
        'div',
        { className: 'flex justify-center items-center' },
        createElement(
            'div',
            { className: 'bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6 m-4 flex flex-col items-center' },
            createElement('img', { alt: 'Basic', src: 'https://placehold.co/150', className: 'w-24 h-24 object-cover rounded-full' }),
            createElement('h2', { className: 'text-lg font-semibold text-center mt-4' }, 'Basic'),
            createElement('p', { className: 'text-zinc-600 dark:text-zinc-400 text-center mt-2' }, 'Lorem ipsum dolor sit amet'),
            createElement('p', { className: 'text-2xl font-semibold text-center mt-4' }, '$10/month'),
            createElement(
                'button',
                { className: 'bg-zinc-300 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-4 py-2 mt-4 rounded-lg' },
                'Choose'
            )
        ),
        createElement(
            'div',
            { className: 'bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6 m-4 flex flex-col items-center' },
            createElement('img', { alt: 'Pro', src: 'https://placehold.co/150', className: 'w-24 h-24 object-cover rounded-full' }),
            createElement('h2', { className: 'text-lg font-semibold text-center mt-4' }, 'Pro'),
            createElement('p', { className: 'text-zinc-600 dark:text-zinc-400 text-center mt-2' }, 'Lorem ipsum dolor sit amet'),
            createElement('p', { className: 'text-2xl font-semibold text-center mt-4' }, '$20/month'),
            createElement(
                'button',
                { className: 'bg-zinc-300 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-4 py-2 mt-4 rounded-lg' },
                'Choose'
            )
        ),
        createElement(
            'div',
            { className: 'bg-yellow-400 dark:bg-yellow-600 shadow-lg rounded-lg p-6 m-4 flex flex-col items-center' },
            createElement('img', { alt: 'Premium', src: 'https://placehold.co/150', className: 'w-24 h-24 object-cover rounded-full' }),
            createElement('h2', { className: 'text-lg font-semibold text-center mt-4' }, 'Premium'),
            createElement('p', { className: 'text-zinc-900 dark:text-zinc-200 text-center mt-2' }, 'Lorem ipsum dolor sit amet'),
            createElement('p', { className: 'text-2xl font-semibold text-center mt-4' }, '$30/month'),
            createElement(
                'button',
                { className: 'bg-yellow-600 dark:bg-yellow-800 text-white px-4 py-2 mt-4 rounded-lg' },
                'Best Value'
            )
        )
    );
}

ReactDOM.render(createElement(Widget), document.getElementById('root'));
