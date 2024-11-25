<script>
    import { CloudUpload } from "lucide-svelte";
    let { onFileDrop = () => {} } = $props();
    let isDragging = $state(false);
    let inputRef = $state();

    function handleDragOver(event) {
        event.preventDefault();
        isDragging = true;
    }

    function handleDragLeave() {
        isDragging = false;
    }

    function handleDrop(event) {
        event.preventDefault();
        isDragging = false;
        const file = event.dataTransfer.files[0]; // Take only the first file
        if (file) {
            onFileDrop(file); // Call the parent-provided function with the dropped file
        }
    }
    function handleClick() {
        if (inputRef) {
            inputRef.value = "";
        }
        inputRef.click();
    }

    function handleFileInput(event) {
        const file = event.target.files[0];
        if (file) {
            onFileDrop(file); // Call the parent-provided function with the dropped file
        }
    }
</script>

<div
    class="dropzone {isDragging ? 'dragging' : ''}"
    ondragover={handleDragOver}
    ondragleave={handleDragLeave}
    ondrop={handleDrop}
    onclick={handleClick}
>
    <input type="file" bind:this={inputRef} onchange={handleFileInput} />
    <CloudUpload size="52" strokeWidth="1.3" />
    <p>Drop a file here, or click to select</p>
</div>

<style>
    .dropzone {
        border: 3px dashed var(--subdued);
        border-radius: 12px;
        padding: 32px;
        color: var(--subtext);
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        transition:
            background-color 0.3s,
            border-color 0.3s;
        cursor: pointer;
    }
    .dropzone.dragging {
        background-color: #f0f8ff;
        border-color: #007bff;
    }
    input {
        display: none;
    }
    .dropzone:hover {
        border-color: #999;
    }
</style>
