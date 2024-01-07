const assert = require('assert');
const vscode = require('vscode');

suite('Snippet Tests', () => {
    test('Snippets file should be loaded', async () => {
        const publisher_name = 'undefined_publisher';
        const extension = vscode.extensions.getExtension(publisher_name + '.query-monitor-wordpress-snippets');
        await extension.activate();
        const snippets = extension.packageJSON.contributes.snippets;
        assert.ok(snippets.length > 0, 'No snippets found');
    });
});