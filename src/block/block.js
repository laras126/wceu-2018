/**
 * BLOCK: wceu-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor; // Import the RichText component

registerBlockType('cgb/block-wceu-block', {
	title: __('WCEU Block'),
	icon: 'carrot',
	category: 'common',
	keywords: [
		__('wceu-block — CGB Block'),
		__('CGB Example'),
		__('create-guten-block'),
	],
	attributes: {
		// Register a "content" attribute so we can track its state.
		content: {
			type: 'array',
			source: 'children',
			selector: 'p'
		}
	},

	edit: function (props) {

		// A callback function to update the block attributes.
		const onChangeContent = newContent => {
			props.setAttributes({ content: newContent });
		};

		return (
			// A div wraps the block and uses the class name generated from the block.
			<div className={props.className}>
				<RichText
					onChange={onChangeContent}
					value={props.attributes.content}
				/>
			</div>
		);
	},

	save: function (props) {
		return (
			// Apply the same wrapper and class name to the saved version of the block.
			<div className={props.className}>
				<p>{props.attributes.content}</p>
				{/* 
					This can also be done in the same fashion as the core blocks using the RichText component: 
					<RichText.Content value={ props.attributes.content } />
				*/}
			</div>
		);
	},
});
