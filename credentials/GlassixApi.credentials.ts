import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class GlassixApi implements ICredentialType {
	name = 'glassixApi';
	displayName = 'Glassix API';
	documentationUrl = 'glassix';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'glassixApiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];
}