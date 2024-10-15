<script lang="ts">
    import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

    import Fa from "svelte-fa";

    export var icon: IconDefinition | null = null;
    export var onClick: (() => void) | null = null;
    export var iconColor: string | null = null;
</script>

<button on:click={onClick || (() => {})}>
    {#if icon}
        {#if iconColor}
            <Fa color={iconColor} {icon} />
        {:else}
            <Fa {icon} />
        {/if}
    {/if}
    <slot>Button</slot>
</button>

<style>
    button {
        display: flex;
        align-items: center;
        gap: 6px;
        border: none;
        border-radius: 4px;
        padding: 4px 8px;
        background-color: transparent;
        color: #aaa;
        cursor: pointer;
    }
    button:hover {
        background-color: #222;
    }
</style>
