/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	tutorialSidebar: [
		'intro',
		{
			type: 'category',
			label: 'Getting Started',
			items: [
				'getting_started/how_to_use_windmill/index',
				{
					type: 'category',
					label: 'Scripts Quickstart',
					items: [{ type: 'autogenerated', dirName: 'getting_started/0_scripts_quickstart' }]
				},
				'getting_started/flows_quickstart/index',
				'getting_started/apps_quickstart/index'
			],
			collapsed: false
		},
		{
			type: 'category',
			label: 'Core Concepts',
			items: [{ type: 'autogenerated', dirName: 'core_concepts' }],
			collapsed: true
		},
		{
			type: 'category',
			label: 'Advanced',
			items: [{ type: 'autogenerated', dirName: 'advanced' }],
			collapsed: false
		},
		{
			type: 'category',
			label: 'App Editor',
			items: [{ type: 'autogenerated', dirName: 'apps' }],
			collapsed: true
		},
		{
			type: 'category',
			label: 'Flow Editor',
			items: [{ type: 'autogenerated', dirName: 'flows' }],
			collapsed: true
		},
		'openflow/index',
		'reference/index',
		{
			type: 'category',
			label: 'Miscellaneous',
			items: [{ type: 'autogenerated', dirName: 'misc' }],
			collapsed: false
		}
	]
};

module.exports = sidebars;
