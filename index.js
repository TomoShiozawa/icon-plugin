exports.decorateTerm = (Term, { React, notify }) => {
  return class extends React.Component {
    render() {
      return React.createElement(
        'div',
        { style: { width: '100%', height: '100%', position: 'relative' } },
        [
          React.createElement('img', {
            class: 'logo',
            src: file_path,
          }),
          React.createElement(
            'style',
            {},
            `
            .logo {
              width: 500px;
              height: 417px;
              position: absolute;
              bottom: 5%;
              left: 70%;
              pointer-events: none;
              z-index: 1000;
            }
            `
          ),
          React.createElement(Term, this.props),
        ]
      );
    }
  };
};
