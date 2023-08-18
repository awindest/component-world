<script>
    import { fade, fly } from 'svelte/transition'
    import { onMount } from 'svelte'
    let animateLabsLogo = false
    
    onMount( () => {
        animateLabsLogo = true
    })
</script>

{#if animateLabsLogo}
    <div transition:fly="{{ y: 10, delay: 1000, duration: 2500 }}" id="labs" >Indest Labs  
        <img style="float:right;height:1.5em;filter:contrast(75%);" src="/flask.svg" alt="Laboratory Flask" /> 
    </div>
{/if}
<style>
    /* author's stamp */
  #labs {
    position: absolute;
    bottom: 0;
    margin-left: .2rem;
    margin-bottom: .2rem;
    background: transparent;
    color: #042E64;
    font-size: 9px;
    font-family: sans-serif;
    text-shadow:
        -1px -1px 2px #fff,
        -1px  1px 2px #fff,
         1px -1px 2px #fff,
         1px  1px 2px #fff;
}
</style>