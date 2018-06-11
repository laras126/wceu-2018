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
const { RichText, AlignmentToolbar, BlockControls } = wp.editor; // Import components from wp.editor

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
		},
		// Register an "alignment" attribute to track the value set in the alignment controls.
		alignment: {
			type: 'string'
		},
		
	},

	edit: function (props) {

		// A callback function to update the block attributes.
		const onChangeContent = newContent => {
			props.setAttributes({ content: newContent });
		};
		
		// A callback function to update the alignment value when it is changed.
		const onChangeAlignment = newAlignment => {
			props.setAttributes({ alignment: newAlignment });
		};

		return (
			<div className={props.className} style={{ textAlign: props.attributes.alignment }}>
				<BlockControls>
					<AlignmentToolbar
						value={props.attributes.alignment}
						onChange={onChangeAlignment}
					/>
				</BlockControls>
				<RichText
					onChange={onChangeContent}
					value={props.attributes.content}
				/>
			</div>
		);
	},

	save: function (props) {
		
		// In order to avoid adding inline styles to the frontend, there are a few alignment classes added to style.scss. Let's use our value from the alignment attribute to create a string that matches those classes (e.g. text-left, text-right, etc.)
		// Note that this could be considered theme territory, but for the purposes of this workshop, it's in the plugin!
		const alignmentClassName = props.attributes.alignment ? 'text-' + props.attributes.alignment : null;
		
		return (
			// Apply the same wrapper along with the block class name and alignment class to the saved version of the block.
			<div className={props.className + ' ' + alignmentClassName}>
				<p>{props.attributes.content}</p>
			</div>
		);
	},
});
