<script>
    import Dropzone from "$lib/Dropzone.svelte";
    import { hashFile, hashToPassword } from "$lib/hash.js";
    import { Clipboard, ClipboardCheck, Eye, EyeOff, X } from "lucide-svelte";
    import { onMount } from "svelte";

    let password = $state("");
    let inputType = $state("password");
    let error = $state("");
    let isProcessing = $state(false);
    let fileName = $state("");
    let fileSize = $state("");
    let copied = $state(false); // Tracks copy button state
    let visible_text = $derived.by(() => {
        return inputType === "password" ? "Show" : "Hide";
    });

    function formatFileSize(bytes) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }

    async function processFile(file) {
        error = "";
        password = "";
        isProcessing = true;
        fileName = "";
        fileSize = "";
        inputType = "password";
        try {
            if (!file) {
                throw new Error("Please select a file");
            }
            fileName = file.name;
            fileSize = formatFileSize(file.size);
            const hash = await hashFile(file);
            password = hashToPassword(hash);
        } catch (err) {
            error = err.message;
            password = "";
        } finally {
            isProcessing = false;
        }
    }

    function clearFile() {
        password = "";
        fileName = "";
        fileSize = "";
        error = "";
    }

    function toggleVisibility() {
        inputType = inputType === "text" ? "password" : "text";
    }

    function copyPassword() {
        navigator.clipboard.writeText(password);
        copied = true;
        setTimeout(() => (copied = false), 1500); // Reset state after 1.5 seconds
    }
</script>

<div class="container">
    <h2>File Password Generator</h2>

    <Dropzone onFileDrop={processFile} />

    {#if fileName}
        <div class="file-info">
            <div class="file-details">
                <div class="file-name">{fileName}</div>
                <div class="file-size">{fileSize}</div>
            </div>
            <button class="clear-button" onclick={clearFile}>
                <X />
            </button>
        </div>
    {/if}

    {#if isProcessing}
        <div class="processing">Processing...</div>
    {/if}

    {#if error}
        <div class="error">{error}</div>
    {/if}

    {#if password}
        <div class="password-section">
            <div class="password-header">
                <label for="password-input">Password</label>
            </div>
            <div class="password-container">
                <input
                    id="password-input"
                    type={inputType}
                    readonly
                    value={password}
                    class="password-input"
                />
            </div>
            <div class="password-footer">
                <div class="tooltip-container">
                    <button class="copy-button" onclick={copyPassword}>
                        {#if copied}
                            <ClipboardCheck />
                        {:else}
                            <Clipboard />
                        {/if}
                    </button>
                    <span class="tooltip">Copy</span>
                </div>
                <div class="tooltip-container">
                    <button
                        class="visibility-button"
                        onclick={toggleVisibility}
                    >
                        {#if inputType === "text"}
                            <EyeOff />
                        {:else}
                            <Eye />
                        {/if}
                    </button>
                    <span class="tooltip">{visible_text}</span>
                </div>
            </div>
        </div>
        <p class="password-note">
            This password will always be the same as long as the file is
            unmodified.
        </p>
    {/if}
</div>

<style>
    .container {
        max-width: 480px;
        margin: 100px auto;
        padding: 0 20px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
    }

    h2 {
        text-align: center;
        font-weight: 600;
        color: var(--text);
        font-size: 24px;
        margin-bottom: 40px;
    }

    .file-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        background: var(--background-color);
        border-radius: 12px;
        margin: 20px 0;
    }

    .file-details {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .file-name {
        font-size: 14px;
        color: var(--text);
    }

    .file-size {
        font-size: 12px;
        color: var(--subtext);
    }

    .clear-button {
        border: none;
        background: none;
        color: var(--subdued);
        font-size: 14px;
        cursor: pointer;
        padding: 8px;
    }

    .clear-button:hover {
        color: var(--accent);
    }

    .processing {
        text-align: center;
        color: var(--subtext);
        padding: 16px 0;
    }

    .error {
        color: var(--accent);
        text-align: center;
        padding: 12px;
        margin: 12px 0;
    }

    .password-section {
        margin-top: 24px;
    }

    .password-header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .password-header label {
        font-size: 14px;
        color: var(--subdued);
        margin-right: 8px;
    }

    /* Input and Eye Icon */
    .password-container {
        position: relative;
        margin-bottom: 4px;
        text-align: center;
    }

    .password-input {
        width: 90%;
        padding: 5px 10px;
        font-size: 24px;
        border: none;
        background: white;
        color: var(--text);
        text-align: center;
        letter-spacing: 3px;
        font-family: monospace;
        position: relative;
    }

    .password-input[type="password"] {
        font-family: monospace;
        -webkit-text-security: disc;
        -moz-text-security: disc;
    }

    .password-input:focus {
        outline: none;
    }

    .password-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .password-note {
        padding: 0 40px;
        text-align: center;
        font-size: 14px;
        color: var(--disabled);
        margin-top: 12px;
    }

    /* Tooltips */
    .tooltip-container {
        position: relative;
        display: inline-block;
    }

    .tooltip {
        visibility: hidden;
        background-color: var(--tooltip-background-color);
        color: var(--tooltip-text-color);
        text-align: center;
        padding: 4px 6px;
        border-radius: 4px;
        position: absolute;
        bottom: 80%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        z-index: 1;
        opacity: 0;
        transition:
            opacity 0.2s ease,
            transform 0.2s ease;
    }

    .tooltip-container:hover .tooltip {
        visibility: visible;
        opacity: 1;
        transform: translate(-50%, -10px); /* Slight upward animation */
    }

    /* Buttons */
    .copy-button,
    .visibility-button {
        border: none;
        background: none;
        border-radius: 5px;
        color: var(--subtext);
        font-size: 14px;
        cursor: pointer;
        padding: 8px 12px;
        transition:
            color 0.2s ease,
            background-color 0.2s ease;
    }

    .copy-button:hover,
    .visibility-button:hover {
        color: var(--accent);
        background-color: var(--background-color);
    }

    .copy-button:active,
    .visibility-button:active {
        transform: scale(0.95);
    }
</style>
