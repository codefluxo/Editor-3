<script>
    import Canvas from "./ui/Canvas.svelte";
    import Info from "./ui/Info.svelte";
import Menubar from "./ui/Menubar.svelte";
    import Sidebar from "./ui/Sidebar.svelte";
    import Toolbar from "./ui/Toolbar.svelte";
    import Toolbar2 from "./ui/Toolbar2.svelte";

</script>

<Menubar/>
<div class="layout">
  <Canvas>
    <Toolbar/>
    <Toolbar2/>
    <Info/>
  </Canvas>
  <Sidebar/>
</div>



<style>
  .layout{
    flex-grow: 1;
    display: flex;
  }
</style>