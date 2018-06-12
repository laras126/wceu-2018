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
const { 
	RichText, 
	AlignmentToolbar, 
	BlockControls, 
	InnerBlocks, 
	InspectorControls, 
	getColorClass, 
	PanelColor, 
	ContrastChecker } = wp.editor; // Import components from wp.editor

registerBlockType('cgb/block-wceu-block', {
	title: __('WCEU Callout Block'),
	icon: 'carrot',
	category: 'common',
	keywords: [
		__('wceu-block — CGB Block'),
		__('CGB Example'),
		__('create-guten-block'),
	],
	attributes: {
		// The "contentHeading" attribute will track the title of our section.
		contentHeading: {
			type: 'array',
			source: 'children',
			selector: 'h3'
		},
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
		// Register attributes to track the value for background and border colors.
		borderColor: {
			type: 'string',
		},
		backgroundColor: {
			type: 'string',
		},
	},

	edit: function (props) {

		// A callback function to update the block attributes.
		const onChangeContentHeading = newContentHeading => {
			props.setAttributes({ contentHeading: newContentHeading });
		};

		// A callback function to update the block attributes.
		const onChangeContent = newContent => {
			props.setAttributes({ content: newContent });
		};
		
		// A callback function to update the alignment value when it is changed.
		const onChangeAlignment = newAlignment => {
			props.setAttributes({ alignment: newAlignment });
		};

		// Functon to update the background color when it is changed.
		const setBorderColor = newColor => {
			props.setAttributes({ borderColor: newColor });
		};

		// Functon to update the background color when it is changed.
		const setBackgroundColor = newColor => {
			props.setAttributes({ backgroundColor: newColor });
		};

		return (
			<div className={props.className} style={{ borderColor: props.attributes.borderColor, backgroundColor: props.attributes.backgroundColor }}>
				<InspectorControls>
					<PanelColor
						colorValue={props.attributes.borderColor}
						initialOpen={true}
						title={__('Block Border Color')}
						onChange={setBorderColor}
					/>
					<PanelColor
						colorValue={props.attributes.backgroundColor}
						initialOpen={true}
						title={__('Block Background Color')}
						onChange={setBackgroundColor}
					/>
					<ContrastChecker
						textColor={'#000000'} // Set in CSS
						backgroundColor={props.attributes.backgroundColor}
					/>
				</InspectorControls>
				<BlockControls>
					<AlignmentToolbar
						value={props.attributes.alignment}
						onChange={onChangeAlignment}
					/>
				</BlockControls>
				<RichText
					onChange={onChangeContentHeading}
					value={props.attributes.contentHeading}
					focus={props.focus}
					onFocus={props.setFocus}
					placeholder={__('Callout Title')}
					tagName='h3'
				/>
				<RichText
					style={{ textAlign: props.attributes.alignment }}
					onChange={onChangeContent}
					value={props.attributes.content}
					focus={props.focus}
					onFocus={props.setFocus}
					placeholder={__('Callout Intro')}
				/>
				<InnerBlocks />
			</div>
		);
	},

	save: function (props) {
		
		// In order to avoid adding inline styles to the frontend, there are a few alignment classes added to style.scss. 
		// Let's use our value from the alignment attribute to create a string for those classes (e.g. text-left, text-right, etc.)
		// Note that this *could* be considered theme territory, but for the purposes of this workshop, it's in the plugin :)
		const alignmentClassName = props.attributes.alignment ? 'text-' + props.attributes.alignment : null;
		
		return (
			<div style={{ 'border-color': props.attributes.borderColor, 
										'background-color': props.attributes.backgroundColor }}>
				<h3 className={alignmentClassName}>{props.attributes.contentHeading}</h3>
				<p className={alignmentClassName}>{props.attributes.content}</p>
				<InnerBlocks.Content />
			</div>
		);
	},
});
