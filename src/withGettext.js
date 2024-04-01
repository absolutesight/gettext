import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import TextDomain from './TextDomain.js';

const withGettext = (translations = {}, pluralForm = 'n != 1', options = {}) => (WrappedComponent) => {
	const args = Object.assign({ withRef: false }, options);

	class WithGettext extends TextDomain {

		getWrappedComponent() {
			return this.refs.wrappedComponent;
		}

		render() {
			const newprops = Object.assign({}, this.props);
			if (args.withRef) {
				newprops.ref = 'wrappedComponent';
			}

			return React.createElement(WrappedComponent, newprops);
		}

	}

	WithGettext.defaultProps = {
		translations,
		plural: pluralForm,
	};

	WithGettext.displayName = `withGettext(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

	return hoistNonReactStatic(WithGettext, WrappedComponent);
};

export default withGettext;
