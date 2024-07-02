<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-[#21222D] rounded-[10px] flex flex-col gap-y-3 py-2 px-4 text-[#fff] col-span-2 h-fit ">
        <div class="flex flex-col gap-y-1">
            <h2 class="text-[15px]">Today’s Sales</h2>
            <p class="text-[#A0A0A0] text-[12px]">Sales Summary</p>
        </div>
        <div class="flex gap-x-7 justify-between">
            <div class="bg-[#171821] rounded-[10px] p-4  flex flex-col gap-y-2 w-[100%]">
                <div class="h-10">
                    <img class="w-7 h-8" src="../assets/dashboard/sales/Group.png" alt="">
                </div>
                <h3 class="text-[16px]">$5k</h3>
                <label class="text-[12px]">Total Sales</label>
                <label class="text-[#FEB95A] text-[10px]">+10% from yesterday</label>
            </div>
            <div class="bg-[#171821] rounded-[10px] p-4 px-6 flex flex-col gap-y-2 w-[100%]">
                <div class="h-10">
                    <img class="w-7 h-8" src="../assets/dashboard/sales/Group (2).png" alt="">
                </div>
                <h3 class="text-[16px]">500</h3>
                <label class="text-[12px]">Total Order</label>
                <label class="text-[#A9DFD8] text-[10px]">+8% from yesterday</label>
            </div>
            <div class="bg-[#171821] rounded-[10px] p-4 px-6 flex flex-col gap-y-2 w-[100%]">
                <div class="h-10">
                    <img class="w-7 h-8" src="../assets/dashboard/sales/Vector.png" alt="">
                </div>
                <h3 class="text-[16px]">9</h3>
                <label class="text-[12px]">Product Sold</label>
                <label class="text-[#F2C8ED] text-[10px]">+2% from yesterday</label>
            </div>
            <div class="bg-[#171821] rounded-[10px] p-4 px-6 flex flex-col gap-y-2 w-[100%]">
                <div class="h-10">
                    <img class="w-7 h-8" src="../assets/dashboard/sales/Group (3).png" alt="">
                </div>
                <h3 class="text-[16px]">12</h3>
                <label class="text-[12px]">New Customer</label>
                <label class="text-[#20AEF3] text-[10px]">+3% from yesterday</label>
            </div>
        </div>
    </div>
    <div class="bg-[#21222D] rounded-[10px] py-3 px-4 h-full text-[#fff] flex flex-col justify-between gap-y-5 ">
        <div>
            <h2 class="text-[15px]">Level</h2>
        </div>
        <!-- <SaleChart/> -->
        <FirstChart/>
        <div class="flex justify-center">
            <img class="h-32 w-[70%]" src="../assets/dashboard/level/Bars.png">
        </div>
        <div class="w-full flex justify-center">
            <div class="flex w-56 h-full justify-between">
                <div class="flex items-center gap-x-2">
                    <span class="h-2 w-2 inline-block bg-[#A9DFD8] rounded-full"></span>
                    <label class="text-[12px] font-medium text-[#A0A0A0]">Volume</label>
                </div>
                <span class="inline-block w-px h-full bg-[#fff] opacity-40"></span>
                <div class="flex items-center gap-x-2">
                    <span class="h-2 w-2 inline-block bg-[#2B2B36] rounded-full"></span>
                    <label class="text-[12px] font-medium text-[#A0A0A0]">Service</label>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#21222D] rounded-[10px] px-4 py-2 text-[#fff] col-span-2 ...">
        <div class="flex flex-col gap-y-2">
            <h2 class="text-[15px]">Top Products</h2>
            <div class="flex flex-col gap-y-3">
                <div class="flex items-center justify-between">
                    <div class="w-[5%]"><span class="text-[13px] text-[#87888C]">#</span></div>
                    <div class="w-[30%]"><span class="text-[13px] text-[#87888C]">Name</span></div>
                    <div class="w-[30%]"><span class="text-[13px] text-[#87888C] w-1/4">Popularity</span></div>
                    <div class="w-[8%]"><span class="text-[13px] text-[#87888C]">Sales</span></div>
                </div>
                <div class="flex flex-col gap-y-2">
                    <div class="flex items-center justify-between border-t border-[#fff] border-opacity-10 py-2">
                        <div class="w-[5%]"><span class="text-[12px]">01</span></div>
                        <div class="w-[30%]"><span class="text-[12px]">Home Decore Range</span></div>
                        <div class="w-[30%]">
                            <span class="relative w-full h-1 rounded inline-block bg-[#2b2b36]">
                                <span class="absolute bg-[#FCB859] w-5/6 h-full inline-block rounded"></span>
                            </span>
                        </div>
                        <div class="w-[8%]"><span class="text-[12px] w-full py-1 px-2.5 bg-[#FCB859] bg-opacity-20 rounded border-[0.5px] border-[#FCB859] text-[#FCB859]">46%</span></div>
                    </div>
                    <div class="flex items-center justify-between border-t border-[#fff] border-opacity-10 py-2">
                        <div class="w-[5%]"><span class="text-[12px]">02</span></div>
                        <div class="w-[30%]"><span class="text-[12px]">Disney Princess Dress</span></div>
                        <div class="w-[30%]">
                            <span class="relative w-full h-1 rounded inline-block bg-[#2b2b36]">
                                <span class="absolute bg-[#A9DFD8] w-4/6 h-full inline-block rounded"></span>
                            </span>
                        </div>
                        <div class="w-[8%]"><span class="text-[12px] w-full py-1 px-2.5 bg-[#A9DFD8] bg-opacity-20 rounded border-[0.5px] border-[#A9DFD8] text-[#A9DFD8]">17%</span></div>
                    </div>
                    <div class="flex items-center justify-between border-t border-[#fff] border-opacity-10 py-2">
                        <div class="w-[5%]"><span class="text-[12px]">03</span></div>
                        <div class="w-[30%]"><span class="text-[12px]">Bathroom Essentials</span></div>
                        <div class="w-[30%]">
                            <span class="relative w-full h-1 rounded inline-block bg-[#2b2b36]">
                                <span class="absolute bg-[#28AEF3] w-1/2 h-full inline-block rounded"></span>
                            </span>
                        </div>
                        <div class="w-[8%]"><span class="text-[12px] w-full py-1 px-2.5 bg-[#2b2b36] bg-opacity-20 rounded border-[0.5px] border-[#28AEF3] text-[#28AEF3]">19%</span></div>
                    </div>
                    <div class="flex items-center justify-between border-t border-[#fff] border-opacity-10 py-2">
                        <div class="w-[5%]"><span class="text-[12px]">04</span></div>
                        <div class="w-[30%]"><span class="text-[12px]">Apple Smartwatch</span></div>
                        <div class="w-[30%]">
                            <span class="relative w-full h-1 rounded inline-block bg-[#2b2b36]">
                                <span class="absolute bg-[#F2C8ED] w-1/3 h-full inline-block rounded"></span>
                            </span>
                        </div>
                        <div class="w-[8%]"><span class="text-[12px] w-full py-1.5 px-2.5 bg-[#F2C8ED] bg-opacity-20 rounded border-[0.5px] border-[#F2C8ED] text-[#F2C8ED]">29%</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#21222D] rounded-[10px] py-3 px-4 h-full text-[#fff] flex flex-col justify-between">
        <div>
            <h2 class="text-[15px]">Customer Fulfilment</h2>
        </div>
        <div class="flex justify-center">
            <img class="h-44 w-full" src="../assets/dashboard/level/Graph.png">
        </div>
        <span class="inline-block h-px w-full bg-[#fff] opacity-5"></span>
        <div class="w-full flex justify-center">
            <div class="flex w-44 h-full justify-between">
                <div class="flex flex-col items-center gap-y-1">
                    <div class="flex items-center w-full gap-x-1">
                        <span class="h-2 w-2 inline-block bg-[#A9DFD8] rounded-full"></span>
                        <label class="text-[12px] font-medium text-[#A0A0A0]">Last Month</label>
                    </div>
                    <span class="text-[12px]">$4,087</span>
                </div>
                <span class="inline-block w-px h-full bg-[#fff] opacity-5"></span>
                <div class="flex flex-col items-center gap-y-1">
                    <div class="flex items-center w-full gap-x-1">
                        <span class="h-2 w-2 inline-block bg-[#A9DFD8] rounded-full"></span>
                        <label class="text-[12px] font-medium text-[#A0A0A0]">This Month</label>
                    </div>
                    <span class="text-[12px]">$5,506</span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#21222D] rounded-[10px] p-4 text-[#fff] flex flex-col justify-between gap-y-2">
        <div class="flex flex-col gap-y-1">
            <h2 class="text-[15px]">Earnings</h2>
            <p class="text-[#A0A0A0] text-[12px]">Total Expense</p>
        </div>
        <div class="flex flex-col gap-y-3 justify-between">
            <span class="text-2xl text-[#A9DFD8] font-bold">$6078.76</span>
            <p class="text-[#87888C] text-[11px]">Profit is 48% More than last Month</p>
            <div class="flex items-center justify-center w-[100%]">
                <img class="w-[90%]" src="../assets/dashboard/earings/Percentage meter.png" alt="">
            </div>
        </div>
    </div>
    <div class="bg-[#21222D] rounded-[10px] p-4 text-[#fff] col-span-2 flex flex-col gap-y-1">
        <div class="flex itemc-center justify-between">
            <h2 class="text-[15px]">Visitor Insights</h2>
            <div class="flex items-center justify-center gap-x-2 bg-[#171821] rounded p-2">
                <span class="bg-[#FCB859] inline-block w-1.5 h-1.5 rounded-full"></span>
                <label class="text-[12px]">New Visitors</label>
            </div>
        </div>
        <div class="flex items-center justify-center">
            <img class="w-[95%]" src="../assets/dashboard/insight/Graph.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import FirstChart from './FirstChart.vue'
export default {
  components: {FirstChart}
}
</script>

<style>

</style>