function FormComp() {
  return (
    <>
      <form action="">
<div class="w-[350px] bg-white rounded-2xl p-6 shadow-lg">
  <h2 class="text-center text-[24px] font-semibold mb-6">Book your car</h2>

  <form class="flex flex-col gap-4">


    <div class="relative">
      <select class="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none">
        <option>Car type</option>
        <option>BMW</option>
        <option>Mercedes</option>
        <option>Toyota</option>
      </select>
      <span class="absolute right-4 top-4 text-gray-500">⌄</span>
    </div>

    
    <div class="relative">
      <select class="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none">
        <option>Place of rental</option>
        <option>Peshawar</option>
        <option>Islamabad</option>
        <option>Karachi</option>
      </select>
      <span class="absolute right-4 top-4 text-gray-500">⌄</span>
    </div>

    
    <div class="relative">
      <select class="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none">
        <option>Place of return</option>
        <option>Peshawar</option>
        <option>Islamabad</option>
        <option>Karachi</option>
      </select>
      <span class="absolute right-4 top-4 text-gray-500">⌄</span>
    </div>

    
    <div class="relative">
      <input 
        type="date" 
        class="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none text-gray-700"
      />
      <span class="absolute right-4 top-4 text-gray-500">📅</span>
    </div>

    
    <div class="relative">
      <input 
        type="date" 
        class="w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none text-gray-700"
      />
      <span class="absolute right-4 top-4 text-gray-500">📅</span>
    </div>
    <button class="w-full bg-orange-500 text-white py-3 rounded-xl text-center font-semibold mt-2">
      Book now
    </button>

  </form>
</div>

        
      </form>
    </>
  );
}
export default FormComp;
