<script>
  export let courseTitle = "";
  export let courseCode = "";
  export let preparedBy = "";
  export let department = "DEPARTMENT OF MICROBIOLOGY";
</script>

<div class="space-y-4 bg-white rounded-lg shadow p-6">
  <h2 class="text-lg font-semibold text-gray-800">Title slide details</h2>

  <div>
    <label class="block text-sm font-medium text-gray-600 mb-1" for="courseTitle">
      Course title
    </label>
    <input
      id="courseTitle"
      type="text"
      bind:value={courseTitle}
      placeholder="e.g. Microbial Enzyme Technology"
      class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

  <div>
    <label class="block text-sm font-medium text-gray-600 mb-1" for="courseCode">
      Course code
    </label>
    <input
      id="courseCode"
      type="text"
      bind:value={courseCode}
      placeholder="e.g. MIC-4511"
      class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

  <div>
    <label class="block text-sm font-medium text-gray-600 mb-1" for="preparedBy">
      Prepared by
    </label>
    <input
      id="preparedBy"
      type="text"
      bind:value={preparedBy}
      placeholder="e.g. Ms. Noor"
      class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>

  <div>
    <label class="block text-sm font-medium text-gray-600 mb-1" for="department">
      Department
    </label>
    <input
      id="department"
      type="text"
      bind:value={department}
      class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>
</div>
