<script>
    import { Menubar } from "bits-ui";
    import { ChevronDown } from 'lucide-svelte';

</script>

<div class="sticky top-0 left-0 w-full flex justify-center z-10 p-2 backdrop-blur">
    <Menubar.Root class="w-2/3 bg-slate-200 flex justify-center gap-4 p-2 text-lg rounded-lg">
        <button class="rounded-lg px-3 bg-slate-200 flex justify-center items-center font-medium">
            <a href="/" class="">Home</a>
        </button>
        <Menubar.Menu>
            <Menubar.Trigger 
                class="inline-flex h-10 items-center justify-center rounded-lg px-3 font-medium 
                    data-[highlighted]:bg-slate-300 data-[state=open]:bg-slate-200">
                <p>Services</p>
                <ChevronDown size={16} />
            </Menubar.Trigger>
            <Menubar.Content class="z-20 w-full max-w-[220px] rounded-xl border border-muted bg-background px-1 py-1.5 shadow-popover !ring-0 !ring-transparent ">
                <Menubar.Item class="p-1.5 text-sm font-medium data-[highlighted]:bg-slate-300">
                    <a href="/game" class="w-full">Services</a>
                </Menubar.Item>
                <Menubar.Item class="item">Products</Menubar.Item>
                <Menubar.Item class="item">Customers</Menubar.Item>
            </Menubar.Content>
        </Menubar.Menu>
    </Menubar.Root>
</div>