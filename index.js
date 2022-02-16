export const myPlugin = (editor) => {
    editor.BlockManager.add("my-first-block", {
        label: "Simple block",
        content: '<div class="my-block">This is a simple block</div>',
    });
};
